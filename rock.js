class Rock {
    constructor(x,y,width,height){

        this.x = x
        this.y = y
        this.width = width
         this.height = height;
       this.image = loadImage("stone.png");
       this.body=Bodies.rectangle(this.x,this.y,this.width,this.height)
       World.add(world,this.body);

    }
    
    display(){
        
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        
        imageMode(CENTER)
        rectMode(CENTER);
        image(this.image,this.x - 300,this.y - 140,this.width,this.height);
        pop();
    }
    
}
/*
var mangoPos=this.body.position;	
push()
translate(mangoPos.x, mangoPos.y);
// rectMode(CENTER);
rotate(this.body.angle)
fill(255,0,255)
imageMode(CENTER);
ellipseMode(CENTER);
image(this.image, 0,0,this.r*2, this.r*2)
pop()

*/