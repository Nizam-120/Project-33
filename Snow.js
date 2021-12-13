class Snow
{
  constructor(x,y,w,h)
{
    let options = {
 isStatic : false
    };


this.body = Bodies.rectangle(x,y,w,h,options)
this.w=w;
this.h=h;
World.add(world,this.body);
}

show(){
let pos = this.body.position;
push();
}
}

