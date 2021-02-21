var checker = 0
if (window.username == window.creater) {
    var player = 'X';
    var times = 'первым';
} else {
    var player = 'O';
    var times = 'вторым';
}

let socket = new WebSocket('ws://localhost:8000/ws/game/' + window.room_code)

let GameField = ["","","","","","","","",""]

let elementArray = document.querySelectorAll('.space')

swal("Вы играете за "+player,"Вы ходите " + times , "success")


//setText(event.path[0].getAttribute('data-cell-index') , player);




elementArray.forEach(function(elem){
    elem.addEventListener("click" , function (event){
    var countww = 0;
    GameField.map((game)=>{
        if(game != ""){
            countww++;
        }
    })
    if (countww % 2 == 0 && player == 'X'){
        setText(event.path[0].getAttribute('data-cell-index') , player);

        $.ajax(
          "/draw/?" + $.param({ selector_0: GameField[0],
                                selector_1: GameField[1],
                                selector_2: GameField[2],
                                selector_3: GameField[3],
                                selector_4: GameField[4],
                                selector_5: GameField[5],
                                selector_6: GameField[6],
                                selector_7: GameField[7],
                                selector_8: GameField[8],
                            }),
              
        );    
    }else if (countww % 2 != 0 && player == 'O'){
       setText(event.path[0].getAttribute('data-cell-index') , player);

        $.ajax(
          "/draw/?" + $.param({ selector_0: GameField[0],
                                selector_1: GameField[1],
                                selector_2: GameField[2],
                                selector_3: GameField[3],
                                selector_4: GameField[4],
                                selector_5: GameField[5],
                                selector_6: GameField[6],
                                selector_7: GameField[7],
                                selector_8: GameField[8],
                            }),
              
        );    
    }else{
        swal("Не ваш ход!", "Сейчас вы не можете сделать ход!", "error");
   }
    })
})


function GameEndChecker(){
    var count = 0;
    GameField.map((game)=>{
        if(game != ""){
            count++;
        }
    })

    if(count >= 9){
        var data = {'type' : 'over'}
        socket.send(JSON.stringify({data}))
        swal("Ничья!" , "Никто не выиграл!" , "warning")
    }
}

function checkWon(value , player){
    var won = false;

    if(GameField[0] === value && GameField[1] == value && GameField[2] == value){
        won = true;
    }else if(GameField[3] === value && GameField[4] == value && GameField[5] == value){
        won = true
    }else if(GameField[6] === value && GameField[7] == value && GameField[8] == value){
        won = true
    }
    else if(GameField[0] === value && GameField[3] == value && GameField[6] == value){
        won = true
    }
    else if(GameField[1] === value && GameField[4] == value && GameField[7] == value){
        won = true
    }else if(GameField[2] === value && GameField[5] == value && GameField[8] == value){
        won = true
    }
    else if(GameField[0] === value && GameField[4] == value && GameField[8] == value){
        won = true
    }
    else if(GameField[2] === value && GameField[4] == value && GameField[6] == value){
        won = true
    }

    if(won){
        var data = {'type' : 'end' , 'player' : player}
        socket.send(JSON.stringify({data}))
        swal("Победа!" , "Игрок с ником " + window.username + " выиграл!" , "success")
    }

    GameEndChecker();

}



function setText(index , value){
    var data = {
    'player' : player,
    'index' : index,
    'type' : 'running'
    }


    if(GameField[parseInt(index)] == ""){
    GameField[parseInt(index)] = value
    elementArray[parseInt(index)].innerHTML = value

    socket.send(JSON.stringify({
        data
    }))
    checkWon(value , player )
    }else{
        alert("Вы не можете занять это место")
    }


}


function setAnotherUserText(index , value){
    GameField[parseInt(index)] = value
    elementArray[parseInt(index)].innerHTML = value
}


socket.onopen = function (e){
    console.log('Сокет соединен')
    console.log(JSON.parse(e.data))
}

socket.onmessage = function (e){
    var data = JSON.parse(e.data)
    console.log(data)
    if(data.payload.type == 'end' && data.payload.player !== player){
        swal("Проигрыш!" , "К сожалению вы проиграли" , "error")
    }else if(data.payload.type == 'over'){
        swal("Ничья!" , "Никто не выиграл!" , "warning")
        return;
    }else if(data.payload.type == 'running' &&  data.payload.player !== player){
        setAnotherUserText(data.payload.index , data.payload.player)
    }



}

socket.onclose = function (e){
    console.log('Сокет закрыт')
}
