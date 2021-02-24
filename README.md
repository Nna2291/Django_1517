# Команда Альфа

Работа команды Альфа Школы №1517
# Оглавление
- [Установка redis-server](https://github.com/Nna2291/Django_1517#установка-redis-server)
- [Установка и запуск](https://github.com/Nna2291/Django_1517#установка-и-запуск)
- [Авторы](https://github.com/Nna2291/Django_1517#состав-команды-альфа)
- [Версии](https://github.com/Nna2291/Django_1517#версии)
# Установка redis-server
#### Mac OS:
Если у вас нет менеджера *Homebrew* то установите его командой:
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
Потом введите в терминале следующую команду:
```
brew install redis
```
#### Linux:

```
sudo apt install redis-server
```

#### Windows:
Скачайте файл [Redis-x64-3.2.100.zip](https://github.com/MSOpenTech/redis/releases/download/win-3.2.100/Redis-x64-3.2.100.zip), разархивируйте и запустите файл redis-server.exe
## Установка и запуск
```
git clone https://github.com/Nna2291/Django_1517
redis-server //если у вас Mac OS или Linux
```
Откройте новое окно терминала
```
cd Django_1517
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

После этого перейдите на сайт http://0.0.0.0:8000/

## Состав команды Альфа
Учреждение:
ГБОУ школа № 1517

**Кейс:**
Робот, рисующий «крестики-нолики»

**Авторы:**
Токарь Егор Олегович (9 класс)

Нефедов Николай Андреевич (9 класс)

Краснолуцкая Елизавета Олеговна (9 класс)

Сайдходжаев Максуд Рустамович (11 класс)

Черный Никита Михайлович (11 класс)
## Версии:
#### v1.0 
Сделан работующая веб версия крестиков-ноликов на 2 игроков.
#### v1.1
Добавлен вывод в консоль хода игры, изменен дизайн, исправлена структура проекта,
и еще несколько изменений, который позволяют программе работать быстрее ;)
## Приятной игры!
