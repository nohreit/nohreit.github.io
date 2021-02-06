from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__, template_folder="templates")
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://postgres:Urpassword@localhost/bmi"
db = SQLAlchemy(app)


class Data(db.Model):

    __tablename__ = "data"
    id = db.Column(db.Integer, primary_key=True)
    email_ = db.Column(db.String(120), unique = True)
    height_ = db.Column(db.Integer)
    weight_ = db.Column(db.Integer)
    
    def __init___(self, email_, height_, weight_):
        self.email_-email
        self.height_-height
        self.weight_-weight


#home page rounte
@app.route("/")
def index():
    return render_template("index.html")


# thankyou page route
@app.route("/thankyou", methods = ["POST"])
def thankyou():
    if request.method == "POST":
        email = request.from['email_name']
        height = request.from['height_name']
        weight = request.from['weight_name']

    print(request.form)

#     return render_template("./thankyou.html", methods=['POST'])

if __name__ == "__main__":
    app.debug = True
    app.run()
