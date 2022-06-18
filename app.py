from importlib.resources import Resource
from flask import Flask, json, jsonify, request
import pymongo
from flask_cors import CORS
from flask_restful import Api, Resource

app = Flask(__name__)
api = Api(app)
# CORS(app)

client = pymongo.MongoClient("mongodb+srv://teddyk:JToi5MPMTkwg6G9L@cluster0.zka8x.mongodb.net/?retryWrites=true&w=majority")
db = client.get_database('webapp')
users = db.users
class Login(Resource):
    def post(self):
        data = request.json
        email = data['email']
        password = data['password']
        query = users.find_one({'email': email, 'password': password})
        if query:
            print("Found")
            print(users.find_one({'email': email, 'password': password}))
            return {"status": "success", "role": query.get('role')}
        else:
            print("Not found")
            return {"body": "fail"}

class Signup(Resource):
    def post(self):
        data = request.json
        name = data['name']
        email = data['email']
        password = data['password']
        role = data['role']
        public_key = data['publicKey']    
        try:
            users.insert_one({'name': name, 'email': email, 'password': password, 'role': role, 'public_key': public_key})
            return {"status": "success"}
        except:
            return {"body": "fail"}

api.add_resource(Login, '/login')
api.add_resource(Signup, '/signup')



