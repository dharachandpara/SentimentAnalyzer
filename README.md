# Gramalytics

Gramalytics is an app that scores the health of topics and hashtags over time to present them to users to help leverage their social media.

10/16/24 = 10/30/24
-Once the DB is set up with firebase: 
    collect the private key from firebase console and save as firebase-adminsdk.json inside the SentimentAnalyzer folder. then initialize in terminal in api/views.py:

    import firebase_admin
    from firebase_admin import credentials, auth

    cred = credentials.Certificate("firebase-adminsdk.json")
    firebase_admin.initialize_app(cred)

    ^this has to be done before "auth" module in api/views.py will be able to function

    #! IF YOU ADD ANYTHING HERE PLEASE PUT EVERYTHING ALREADY UNDER "SENTIMENTANALYZER" INTO A SUBFOLDER !#
