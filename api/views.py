from django.shortcuts import render
from django.http import JsonResponse
from .firebase_service import add_document, get_document
from firebase_admin import auth

# User Management Functions
def create_user(request):
    email = request.POST.get('email')
    password = request.POST.get('password')
    try:
        user = auth.create_user(email=email, password=password) #! refer to Firebase Admin's auth
        return JsonResponse({"message": "User created", "uid": user.uid})
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=400)

def delete_user(request):
    uid = request.POST.get('uid')
    try:
        auth.delete_user(uid) #! refer to Firebase Admin's auth
        return JsonResponse({"message": "User deleted"})
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=400)

def login_user(request):
    # TODO: Implement token-based login via Firebase
    return JsonResponse({"message": "Login successful"})

# Core App Functions
def generate_idea(request):
    # TODO: Call AI for idea generation
    return JsonResponse({"idea": "Sample AI-generated idea"})

def save_idea(request):
    # TODO: Save idea to Firebase
    return JsonResponse({"status": "Idea saved"})

def search_hashtag(request):
    # TODO: Query API or Firebase for hashtag health
    return JsonResponse({"hashtag": "example", "health": "Good"})

def test_add_document(request): #test adding document to Firestore
    data = {"hashtags": "art", "likes": "20", "niche": "art", "shares": "20", "timestamp": "November 18, 2024 at 4:36:20 AM UTC-5"}
    add_document("post", data)

def test_get_document(request): #test requesting the test add document
    doc_id = "sample_doc_id" #! whatever the doc_id of the test add happens to be
    document = get_document("post", doc_id)
    if document:
        return JsonResponse({"status": "success", "data": document})
    return JsonResponse({"status": "error", "message": "Document not found."})