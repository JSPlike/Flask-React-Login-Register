from flask import Flask, jsonify, request, json
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from datetime import datetime
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from flask_jwt_extended import create_access_token

app = Flask(__name__, static_url_path="")

app.config['MONGO_DBNAME'] = 'user_db'
app.config['MONGO_URI'] = 'mongodb://localhost:27017/user_db'
app.config['JWT_SECRET_KEY'] = 'secret'

mongo = PyMongo(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)

CORS(app)


@app.route('/users/register', methods=['GET', 'POST'])
def register():
    users = mongo.db.users
    code = request.get_json()['code']

    password = bcrypt.generate_password_hash(
        request.get_json()['password']).decode('utf-8')
    created = datetime.utcnow()

    user_id = users.insert({
        'code': code,
        'password': password,
        'create': created
    })

    new_user = users.find_one({'_id': user_id})

    result = {'code': new_user['code'] + 'registered'}

    return jsonify({'result': result})


@app.route('/users/login', methods=['GET', 'POST'])
def login():
    users = mongo.db.users
    code = request.get_json()['code']
    password = request.get_json()['password']
    result = ""

    response = users.find_one({'code' : code})

    if response:
        if bcrypt.check_password_hash(response['password'], password):
            access_token = create_access_token(identity = {
                'code': response['code']
            })
            result = jsonify({'token': access_token})
        else:
            result = jsonify({'error': "Invalid username and password"})
    else:
        result = jsonify({'result': "No Results found"})
    return result


if __name__ == '__main__':
    app.run(debug=True)
