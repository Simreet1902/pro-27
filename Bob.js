class Bob{

    constructor(x,y,radius,color){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2,
        }
       this.body = Bodies.circle(x,y,radius/2)
       this.x =x
       this.y = y
       this.radius = radius
       this.color = color
       World.add(world, this.body)

    }

    display(){
     var pos =this.body.position;
      push();
      ellipseMode(CENTER);
      fill(this.color);
      ellipse(pos.x, pos.y, this.radius, this.radius);
      pop();
    }
}
