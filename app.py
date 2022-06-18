from flask import Flask, json, request
import pymongo

app = Flask(__name__)

client = pymongo.MongoClient("mongodb+srv://teddyk:JToi5MPMTkwg6G9L@cluster0.zka8x.mongodb.net/?retryWrites=true&w=majority")
db = client.get_database('webapp')
users = db.users

app.route('/')
def index():
    return '<h1>Hello World!</h1>'


app.route('/login', methods=['POST'])
def login():
    username = request.form['username']
    password = request.form['password']
    email = request.form['email']
    if users.find_one({'email': email, 'password': password}):
        return json.dumps({'success': True})


if __name__ == '__main__':
    app.run(debug=True)