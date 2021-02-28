import os
from launcher.ip_locator import locate
'''os.system('python -m venv venv')
os.system('source venv/bin/activate')
os.system('pip install -r requirements.txt')'''

os.system('python manage.py makemigrations')
os.system('python manage.py migrate')
print('______________________________\n\n\n\n\n')
print(f'Адрес для игроков: http://{locate()}:8000\n\n\n')
print('______________________________\n\n\n\n\n\n')
os.system(f'python manage.py runserver {locate()}:8000')
