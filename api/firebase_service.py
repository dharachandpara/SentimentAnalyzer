# api/firebase_service.py

import firebase_admin
from firebase_admin import credentials, firestore
from django.conf import settings

#initialize firebase
cred = credentials.Certificate(settings.FIREBASE_CONFIG)
firebase_admin.initialize_app(cred)

#firestore client
db = firestore.client()

def get_firestore_client():
    return db #returns firestore client instance

#crud functions:

def add_document(collection, data): #adds a document to a Firestore collection
    db.collection(collection).add(data) #collection = name of collection, data = dictionary containing the data

def get_document(collection, doc_id): #retrieves a document
    doc_ref = db.collection(collection).document(doc_id) #collection "", doc_id = document ID, return document data or none
    doc = doc_ref.get()
    return doc.to_dict() if doc.exists else None

def update_document(collection, doc_id, data): #updates a document in Firestore
    doc_ref = db.collection(collection).document(doc_id) #collection "", doc_id "", data = dictionary containing updated data
    doc_ref.update(data)

def delete_document(collection, doc_id): #deletes a document in Firestore
    doc_ref = db.collection(collection).document(doc_id) #collection "", doc_id ""
    doc_ref.delete()


def collection_listener(collection_name, callback): #attaches listener to Firestore collection
    collection_ref = db.collection(collection_name) #collection_name = name of collection, callback = function to call on document changes

def on_snapshot(col_snapshot, changes, read_time): #define a snapshot listener
    for change in changes:
        if change.type.name == 'ADDED':
            print(f'New Document added: {change.document.id}')
        elif change.type.name == 'MODIFIED':
            print(f'Document modified: {change.document.id}')
        elif change.type.name == 'REMOVED':
            print(f'Document removed: {change.document.id}')