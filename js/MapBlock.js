class MapBlock extends Entity{
    constructor(x,y,w,h){
        super(x,y,w,h);
        this.canMove=false;
        this.ga=0;
        this.inv_mass=0;
        //this.COR=0;
    }
    draw(){
        ctx.fillStyle="grey";
        Camera.fillRect(this.x,this.y,this.w,this.h);
    }
}