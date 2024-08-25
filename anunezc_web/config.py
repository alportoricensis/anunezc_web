"""ANUNEZC_WEB development configuration."""

import pathlib

# Root of this application, useful if it doesn't occupy an entire domain
APPLICATION_ROOT = '/'

# File Upload to var/uploads/
ANUNEZC_WEB_ROOT = pathlib.Path(__file__).resolve().parent.parent
IMAGES_FOLDER = ANUNEZC_WEB_ROOT/'anunezc_web'/'static'/'images'


