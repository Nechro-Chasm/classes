class Box{
 constructor()
{
    var options = {
        restitution:1
    };

    this.body = Bodies.rectangle(200,100,50,50,options);
    this.width = 50;
    this.height = 50;
    World.add(world, this.body);
}
 display(){
var pose = this.body.position;
rectMode(CENTER);
fill("white");
rect(pose.x, pose.y,this.width,this.height);
 }
}