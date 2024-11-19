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

11/18

When working with firebase/firestore on your own devices, please update the file path in
.env (see below venv folder, above manage.py and this readme) to represent where the firebase
private key json is on your device, or else it won't work. This is for the FIREBASE_CONFIG variable
in settings.py, to help ensure everyone can run the program. Be advised you may need to run:

pip install python-decouple

in the terminal for it to work properly. If you don't use Windows, add 'sudo' to the beginning of the command, i.e.:

sudo pip install python-decouple

See .env.example for an example of the variable.

-----

.gitignore is for files to be excluded from the version control. You should put your private key file
path here to keep it out of the version control, as well as any other similar credentials that may appear. 
You may also wish to use it to have environment files (.env), cache files (the two weird lines, pycache and .py), 
and virtual environment files (venv/ and env/) also be excluded. 

-----

#api/apps.py needs to have all collections added to it when tables are complete, also see dependencies