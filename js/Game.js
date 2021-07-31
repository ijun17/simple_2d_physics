let Game = {
    channel : [new EntityManager(), new EntityManager()], //phisics, particle, button
    time : 0,
    p:null,


    resetGame:function() {
        Game.channel[0].clear();
        Game.channel[1].clear();
        Game.time = 0;
    },

    startGame:function() {
        document.addEventListener("keydown", keyDownHandler, false);
        document.addEventListener("keyup", keyUpHandler, false);

        //entity 작성
        function mapBlock(mapSizeW,mapSizeH,wallSize){
            new MapBlock(0,-wallSize-mapSizeH,mapSizeW,wallSize,"wall");//top
            new MapBlock(-wallSize, -wallSize-mapSizeH, wallSize, mapSizeH*2,"wall"); //left
            new MapBlock(mapSizeW, -wallSize-mapSizeH, wallSize, mapSizeH*2,"wall");//right
            new MapBlock(-wallSize,0,mapSizeW+wallSize*2,wallSize,"grass");
        }

        mapBlock(2000,1000,200);

        //performance test
        for(let i=0; i<16;i++){
            for(let j=0; j<24; j++){
                let e = new Block(300+j*30,-1000+i*30,50,50);
                e.canRemoved=false;
            }
        }
        Game.p = new Player(200,40);
        Camera.makeMovingCamera(Game.p,0,0,10)
    },
    updateWorld:function() {
        ctx.fillStyle="rgb(121, 155, 206)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < 2; i++) {
            Game.channel[i].update();
        }
    },
}
function keyDownHandler(e) {
    console.log
    switch (e.keyCode) {
        case 39:
            Game.p.moveFlag = true;
            Game.p.isRight = true;
            break;
        case 37:
            Game.p.moveFlag = true;
            Game.p.isRight = false;
            break;
        case 38:
            Game.p.jump();
            break;
    }
}

function keyUpHandler(e) {
    if (e.keyCode == 39) {
        Game.p.moveFlag = false;
        //p.setVectorX(0);
    }
    else if (e.keyCode == 37) {
        Game.p.moveFlag = false;
        //p.setVectorX(0);
    }
}

Game.startGame();
setInterval(Game.updateWorld, 10);