class Ground 
{
  //Defina as características do constructor para (x, y, w, h)
  constructor(???) 
  {
    //Defina que o rect será estático, para isso, coloque a palavra 'true'
    let options = {
      isStatic:???
    };
    
    //Utilize o código ' Bodies.rectangle'para que o corpo que você irá criar seja um retângulo
    this.body = ???(x, y, w, h, options);
    this.w = w;
    this.h = h;
    //Utilize o código ' World.add' para adicionar esse corpo ao mundo
    ???(world, this.body);
  }

  show() {
    var pos = this.body.position;
    Matter.Body.rotate(this.body,angle)

    push();
    rectMode(CENTER);
    stroke(255);
    fill(127);

    translate(pos.x,pos.y);
   rotate(angle);
   rect(0, 0, this.w, this.h);

  
    pop();
    //Utilize 'angle' para definir o ângulo do rect
    angle +=0.1;

  }
  
}
