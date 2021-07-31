class Player extends Entity{
    lv=1;
    mp=40;
    pv=5;
    isRight=true;
    moveFlag=false;
    canJump=true;

    constructor(x,y){
        super(x,y,30,60);
        this.overlap=false;
        this.ga=-0.2;
        this.friction=0.4;
        this.inv_mass=0.000001;
        this.COR=0.5;
    }
    move(){
        super.move();
        this.move_run();
    }

    draw(){
        ctx.strokeStyle="pink";
        Camera.strokeRect(this.x,this.y,this.w,this.h);
    }

    move_run(){
        if (this.moveFlag) {
            if (this.isRight && this.vx <= this.pv) this.vx = this.pv;
            else if (!this.isRight && this.vx >= -this.pv) this.vx = -this.pv;
        }
    }
    
    jump(){
        if(this.canJump){
            this.vy=this.pv;
            //this.canJump=false;
        }
    }
}