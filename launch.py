#TODO: добавить в README строку про подключение к интернету
#TODO: проверить работу на raspberry




import os
from launcher.ip_locator import locate

os.system('python manage.py makemigrations')
os.system('python manage.py migrate')
os.system('clear')
print('______________________________\n\n\n\n\n')
print(f'Адрес для игроков: http://{locate()}:8000\n\n\n')
print('______________________________\n\n\n\n\n\n')
os.system(f'python manage.py runserver 0.0.0.0:8000')
