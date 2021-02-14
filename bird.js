class Bird
{
    constructor (xpos, ypos)
    {
        var options= {
            density: 1,
            friction: 1.2,
            restitution: 0.7        
        }
        this.body = Bodies.rectangle(xpos, ypos, 50, 50, options);
        this.width = 50;
        this.height = 50;
        World.add(world, this.body)
    }
    display()
    {
        var position = this.body.position;
        position.x = mouseX
        position.y = mouseY
        var angle = this.body.angle;
        push();
        rectMode(CENTER)
        translate(position.x,position.y)
        rotate(angle)
        fill ("red");
        rect(0,0, this.width, this.height);
        pop();
    }
}