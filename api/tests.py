from django.test import TestCase
from unittest.mock import TestCase
from api.firebase_service import add_document, get_document

# Create your tests here.

class FireStoreServiceTests(TestCase):
    @patch('api.firebase_service.db') #mock the firestore db object
    def test_add_document(self, mock_db): #mock the add method
        mock_collection = MagicMock()
        mock_db.collection.return_value = mock_collection

        test_data = {} #key value pairs for table 
        add_document = {} #table name, test_data

        mock_db.collection.assert_called_once_with("") #table name; asserts that previous call was correct
        mock_collection.add.assert_called_once_with(test_data)

    @patch('api.firebase_service.db') #mock again
    def test_get_document(self, mock_db): #mock the get_document method
        mock_doc_ref = MagicMock()
        mock_doc_ref.get.return_value.exists = True
        mock_doc_ref.get.return_value.to_dict.return_value = {} #key value pairs of attribute name, attribute fill value
        mock_db.collection.return_value.document.return_value = mock_doc_ref

        doc_id = "12345" #mock random document ID to fetch

        result = get_document() #table name, doc_id

        mock_db.collection.assert_called_once_with("") #table name; asserts that previous call was correct
        mock_db.collection.return_value.document.assert_called_once_with(doc_id)

        self.assertEqual(result, {}) #key value pairs; check that result matches expected output

#run in terminal with:
#python manage.py test