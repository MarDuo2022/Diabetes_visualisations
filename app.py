# Create an app
import flask
app = flask.Flask(__name__)

# 1. Define what to do when a user hits the index route


@app.route("/")
def index():
    print("Server received request for 'index' page...")
    return flask.render_template('index.html')


@app.route("/charts")
def charts():
    print("Server received request for 'charts' page...")
    return flask.render_template('charts.html')


@app.route("/maps")
def maps():
    print("Server received request for 'maps' page...")
    return flask.render_template('maps.html')


if __name__ == '__main__':
    app.debug = True
    app.run()
