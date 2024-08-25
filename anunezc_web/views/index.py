"""
anunezc_web index (main) view.

URLs include:
/
"""
import flask
import pathlib
import anunezc_web


@anunezc_web.app.route('/')
def show_index():
    """Display / route."""
    return flask.render_template("index.html")


@anunezc_web.app.route("/static/images/<path:name>")
def down_file(name):
    """Upload file from disk."""
    file = pathlib.Path(anunezc_web.app.config["IMAGES_FOLDER"]/name)
    if not file.is_file():
        flask.abort(404)
    return (((anunezc_web.flask.send_from_directory
              (anunezc_web.app.config["IMAGES_FOLDER"], name))))