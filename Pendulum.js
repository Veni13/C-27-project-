class Pendulum {
    constructor(x,y,radius) {
        var options = {
            'restitution': 0.8,
            'friction': 1.0,
            'density': 1.0

        }
        this.body = Bodies.ellipse(x,y,radius,options);
       
         World.add(world,this.body);
         this.width = radius;
         this.height = radius;
       
    }
    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}