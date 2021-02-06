from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__, template_folder="templates")
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://postgres:postgresql@localhost/BMI"
db = SQLAlchemy(app)


class Data(db.Model):

    __tablename__ = "data"
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True)
    height = db.Column(db.Integer)
    weight = db.Column(db.Integer)

    def __init__(self, email, height, weight):
        self.email = email
        self.height = height
        self.weight = weight


# home page rounte
@app.route("/")
def index():
    return render_template("index.html")


# thankyou page route
@app.route("/thankyou", methods=["POST"])
def thankyou():
    if request.method == "POST":
        email = request.form['email_me']
        height = request.form['height_value']
        weight = request.form['weight_value']

        print(request.form)

        data = Data(email, height, weight)
        db.session.add(data)
        db.session.commit()

        return render_template("thankyou.html")


#     return render_template("./thankyou.html", methods=['POST'])

if __name__ == "__main__":
    app.debug = True
    app.run()
