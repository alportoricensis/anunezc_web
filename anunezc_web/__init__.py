"""anunezc_web package initializer."""
import flask
app = flask.Flask(__name__)
app.config.from_object('anunezc_web.config')
app.config.from_envvar('ANUNEZCWEB_SETTINGS', silent=True)
import anunezc_web.views

