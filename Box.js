class Box{
    constructor(x,y,width,height){
    var options={
        isStatic:true,
         restitution:0.8
 }

    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world,this.body);
}
    display() {
        var pos = this.body.position;
        translate(pos.x,pos.y);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("blue");
        fill("red");
        rect(pos.x,pos.y,this.width,this.height);
        }

    
}