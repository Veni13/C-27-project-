class Chain{
    constructor(bodyA,bodyB){
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness : 0.04,
            length : 10
        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
        display();
        
        strokeWeight(4);
        line(poinA.x,pointA.y,pointB.x,pointB.y);
    }
}