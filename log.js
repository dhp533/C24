class Log
{
    constructor (xpos, ypos, height, angle)
    {
        var options={
            density: 1,
            friction: 1.2,
            restitution: 0.7
        }
        this.log = Bodies.rectangle(xpos, ypos, 20, height, options)
        Matter.Body.setAngle(this.log, angle)
        World.add(world, this.log)
        this.height = height;
        this.width = 20;
    }
    display()
    {
        var position = this.log.position;
        var angle = this.log.angle;
        push();
        rectMode(CENTER)
        translate(position.x,position.y)
        rotate(angle)
        fill ("brown");
        rect(0,0, this.width, this.height);
        pop();
    }
}