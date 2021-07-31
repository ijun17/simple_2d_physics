let Screen ={
    perX:function(percentile){
        return Math.floor(canvas.width*0.01*percentile);
    },
    perY:function(percentile){
        return Math.floor(canvas.height*0.01*percentile);
    }
}

let Camera={
    e:null, //Entity
    cameraOn:false,
    extension:1, // 커지면 엔티티들이 작아짐
    getX:function(x){
        if(Camera.cameraOn)return ((x-Camera.e.x)*Camera.extension+Screen.perX(50));
        else return x;
    },
    getY:function(y){
        if(Camera.cameraOn)return ((y-Camera.e.y)*Camera.extension+Screen.perY(65));
        else return y;
    },
    getS:function(w){ //size
        if(Camera.cameraOn)return w*Camera.extension;
        else return w;
    },
    drawImage:function(img,x,y,w,h){
        if(this.cameraOn)ctx.drawImage(img,this.getX(x), this.getY(y), this.getS(w), this.getS(h));
        else ctx.drawImage(img,x,y,w,h);
    },
    fillRect:function(x,y,w,h){
        if(this.cameraOn)ctx.fillRect(this.getX(x), this.getY(y), this.getS(w), this.getS(h));
        else ctx.fillRect(x,y,w,h);
    },
    strokeRect:function(x,y,w,h){
        if(this.cameraOn)ctx.strokeRect(this.getX(x), this.getY(y), this.getS(w), this.getS(h));
        else ctx.strokeRect(x,y,w,h);
    },
    makeMovingCamera:function(target,x,y, movingDelay=10){
        Camera.cameraOn=true;
        Camera.e=new Entity(x,y,1);
        Camera.e.temp=target;
        Camera.e.update = function(){
            Camera.e.x+=(Camera.e.temp.x-Camera.e.x)/movingDelay;
            Camera.e.y+=(Camera.e.temp.y-Camera.e.y)/movingDelay;
        }
    }
}