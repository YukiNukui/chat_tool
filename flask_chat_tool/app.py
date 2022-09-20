# from enum import unique
from flask import Flask
from flask import request, make_response, jsonify
from flask_cors import CORS
# from flask_sqlalchemy import SQLAlchemy
# from sqlalchemy.dialects.mysql import INTEGER, VARCHAR 

app = Flask(__name__)
CORS(
    app,
    origins=["http://localhost:3000"]
)

@app.route('/')
def index():
    return 'Hola!!'

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        response = {'result': "flask OK"}
        return make_response(jsonify(response))
    else :
        return 'hello'

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=8000)