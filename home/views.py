import os

from home.game_scoreboard import print_tic_tac_toe
from django.shortcuts import render, redirect
from django.contrib import messages

from launcher.ip_locator import locate
from .models import Game


def home(request):
    if request.method == "POST":
        username = request.POST.get('username')
        option = request.POST.get('option')
        room_code = request.POST.get('room_code')

        if option == '1':
            game = Game.objects.filter(room_code=room_code).first()

            if game is None:
                messages.success(request, "Room code not found")
                return redirect('/')

            if game.is_over:
                messages.success(request, "Game is over")
                return redirect('/')
            else:
                game.game_opponent = username
                game.save()
                return redirect(f'/play/{room_code}?username={username}')
        elif option == '2':
            game = Game(game_creator=username, room_code=room_code)
            game.save()
            return redirect(f'/play/{room_code}?username={username}')

    return render(request, 'home.html')


def play(request, room_code):
    username = request.GET.get('username')
    create = Game.objects.all()
    new_create = create.last()
    context = {'room_code': room_code, 'username': username, 'create': new_create.game_creator,
               'ip': locate()}
    return render(request, 'play.html', context)


def draw(request):
    field = str(request)[35:len(str(request)) - 2].split('&selector_')
    for i in range(9):
        if len(field[i]) == 3:
            field[i] = field[i][2]
        else:
            field[i] = ' '
    os.system('clear')
    print_tic_tac_toe(field)
    return render(request, 'api.html')
