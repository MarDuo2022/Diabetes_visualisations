# Import dependencies. Create an app
from flask import Flask, render_template, url_for
app = Flask(__name__)

# 1. Define what to do when a user hits the index route


@app.route("/")
def index():
    print("Server received request for 'index' page...")
    return render_template('index.html')

# 2. charts route


@app.route("/charts")
def charts():
    print("Server received request for 'charts' page...")
    return render_template('charts.html')

# 3. maps route


@app.route("/maps")
def maps():
    print("Server received request for 'maps' page...")
    return render_template('maps.html')

# 4. other charts route


@app.route("/other")
def charts():
    print("Server received request for 'other charts' page...")
    return render_template('other.html')


if __name__ == '__main__':
    app.debug = True
    app.run()
