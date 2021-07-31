class Block extends Entity{
    constructor(x,y,w,h){
        super(x,y,w,h);
        this.inv_mass=0.1/(w*h);
        this.COR=1;
    }
    draw(){
        // ctx.strokeStyle="yellow";
        // ctx.strokeRect(this.x,this.y,this.w,this.h);
        ctx.fillStyle="black";
        Camera.fillRect(this.x,this.y,this.w,this.h);
    }
}