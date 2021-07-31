class Entity {
    channelLevel;

    x = 0; y = 0; w = 0; h = 0; 
    vx = 0; 
    vy = 0; 
    ga = -0.04; //gravity acceleration
    friction = 0.4; 
    density=1;
    inv_mass=0.1;//if inv_mass==0 , can not move, giveforce
    COR=0;//coefficient of restitution
    life = 1;
    friction=0.4;
    SFV=1; //static friction velocity

    action=[];

    overlap = false; //다른 엔티티와 겹쳐질 수 있는가, if one overlap true and other overlap false, they overlap false;
    canInteract = true;
    canDraw=true;
    canMove=true;
    canAct=true;
    canRemoved = true; 
    canFallDie=true;

    constructor(x, y, w,h,channelLevel = 0) {
        this.x = x;
        this.y = y;
        this.w=w;
        this.h=h;
        this.inv_mass=1/w/h;
        Game.channel[0].push(this);
    }

    update(){
        if(this.canDraw)this.draw();
        if(this.canMove)this.move();
        if(this.canAct)this.act();
    }

    draw() {
        ctx.strokeStyle="black";
        ctx.strokeRect(this.x,this.y,this.w,this.h);
    }

    act() {
        let i;
        for(i=this.action.length-1; i>=0; i--){
            if (this.action[i][1] < Game.time) break;
            else if (this.action[i][0] <= Game.time) new (this.action[i][2])();  
        }
        this.action.splice(0, i+1);
    }

    move(){
        if(this.inv_mass>0){
            this.x += this.vx;
            this.y -= this.vy;
            this.vy += this.ga;
        }
    }

    addAction(start, end, code) {
        let i,j;
        for (i = 0, j=this.action.length; i < j; i++) {
            if (this.action[i][1] >= end + Game.time) break;
        }
        this.action.splice(i, 0, [start + Game.time, end + Game.time, code]);
    }

    giveForce(ax, ay) {
        this.vx += ax * this.inv_mass;
        this.vy += ay * this.inv_mass;
    }

    damage(d){
        this.life-=Math.floor(d);
    }

    //event handler
    collisionHandler(e, collisionType) {return true; }
    removeHandler() { return true;}
}