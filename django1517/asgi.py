"""
ASGI config for django1517 project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.1/howto/deployment/asgi/
"""

import os
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack
from home.consumers import GameRoom
from django.core.asgi import get_asgi_application
from django.urls import path

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'django1517.settings')

application = get_asgi_application()

ws_pattern = [
    path('ws/game/<room_code>', GameRoom)
]

application = ProtocolTypeRouter(
    {
        'websocket': AuthMiddlewareStack(URLRouter(
            ws_pattern
        ))
    }
)
