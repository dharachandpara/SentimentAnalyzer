# SentimentBackend

Hey, this is Esther. Just letting you know I was able to access and clone the repo. 

10/16/24 = 10/30/24
-Once the DB is set up with firebase: 
    collect the private key from firebase console and save as firebase-adminsdk.json inside the SentimentAnalyzer folder. then initialize in terminal in api/views.py:

    import firebase_admin
    from firebase_admin import credentials, auth

    cred = credentials.Certificate("firebase-adminsdk.json")
    firebase_admin.initialize_app(cred)

    ^this has to be done before "auth" module in api/views.py will be able to function

    #! IF YOU ADD ANYTHING HERE PLEASE PUT EVERYTHING ALREADY UNDER "SENTIMENTANALYZER" INTO A SUBFOLDER !#