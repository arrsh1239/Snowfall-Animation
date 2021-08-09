class Snow {
    constructor(x, y) {
        var options = {
            restitution: 0,
            friction: 0,
            density: 0.1,
            isStatic:false
        }
        this.r = 40;
        this.body = Bodies.circle(x, y, this.r, options);
        World.add(world, this.body);
        this.image = loadImage("snow4.webp");
        this.trajectory =[];
         }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;
         
        push();
        translate(pos.x, pos.y);
        rotate(angle);
       // imageMode(CENTER);
        imageMode(RADIUS);
        image(this.image,0,0,this.r,this.r);
        pop();
        /*
        if(this.body.position.x > 0){
          var position = [this.body.position.x, this.body.position.y];
          this.trajectory.push(position);
          
        }
       
    
        for(var i=0; i<this.trajectory.length; i++){
          image(this.image, this.trajectory[i][0], this.trajectory[i][1]);
        }     
*/
      }
};