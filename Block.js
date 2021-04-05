class Block{
    constructor(x, y, width, height) {
        var options = {           
            restitution :0.4,
            friction :0.0,                   
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.image = loadImage("sprites/enemy.png")
        this.width = width;
        this.height = height;
        this.visibility = 255;
        World.add(world, this.body);
      }
      display(){
        
        if(this.body.speed<3){
        var angle = this.body.angle;
        var pos= this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,45,35);
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        /*rectMode(CENTER);
        rect(0,0,this.width, this.height);
        */
        pop();
        }  else {
          World.remove(world,this.body);
          push();
          this.visibility = this.visibility - 5;
          pop();
        }

      }

      score(){
        if (this.visiblity < 50 && this.visiblity > -1005){
          score++;
        }
      }
}