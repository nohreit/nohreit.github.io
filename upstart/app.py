# contains my Python code wrapped in a minimal implementation of the Flask web framework.

from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__, template_folder="templates")
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://postgres:postgresql@localhost/upstart"
db = SQLAlchemy(app)

class Questions(db.Model):
    __tablename__ = "questions" # provide a name for your table

    id = db.Column(db.Integer, primary_key=True) # defines id column
    question = db.Column(db.String(120), unique="True") # defines name column

    def __init__(self, question):
        self.question = question


class Options(db.Model):
    __tablename__ = "options" # provide a name for your table
    
    id = db.Column(db.Integer, primary_key=True) # defines id column
    option = db.Column(db.String(120), unique="True")
    count = db.Column(db.Integer)
    fk_question = db.Column(db.Integer)

    def __init__(self, option, count, fk_question):
        self.question = question
        self.count = count
        self.fk_question = fk_question


# home page route

@app.route("/")
def index():
    if request.method == "POST":
        question = request.form["question"]
        
    return render_template("./index.html")

# result page route

@app.route("/pool")
def result():
    if request.method == "POST":
        name = request.form["name"]
        email = request.form["email"]
        birthday = request.form["birthday"]

        print(request.form)
        return render_template("./result.html")


if __name__ == "__main__":
    app.debug = True
    app.run()
