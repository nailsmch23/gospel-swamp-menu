
release: python manage.py makemigrations
release: python manage.py migrate

web: gunicorn gospel_swamp_mobile_menu_site.wsgi --log-file -
