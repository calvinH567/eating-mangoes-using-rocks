class Restraint {
        constructor(bodyA,pointB){
            var options = {
                length:0.5,
                stiffness:0.004,
                bodyA:bodyA,
                pointB:pointB
            }
        
            this.pointB = pointB;
            this.body = Constraint.create(options);
            World.add(world,this.body);            
        }
        fly(){
            this.body.bodyA = null;
        } 


        display(){
            if(this.body.bodyA){
            var bodyA = this.body.bodyA.position
            var pointB = this.pointB
            line(bodyA.x,bodyA.y,
                pointB.x,pointB.y);
            }
             
        }
        
    }