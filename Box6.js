class Box6 {
    constructor(x, y, width, height){
      var options = {
        restitution :0.4,
        friction :0.1,
        //isStatic: false,
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      //this.image = loadImage("sprites/wood1.png");
      this.width = width
      this.height - height
      World.add(world,this.body);

    }
  
    display(){
      var angle = this.body.angle;
      var pos= this.body.position;
      push();
      translate(pos.x, pos.y);
      fill("purple")
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,this.width, this.height);
      pop();
    }
  };