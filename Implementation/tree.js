
function setup(){

createCanvas(640, 360);
  background(255);
    stroke(0);
  


}

function draw(){
  
    translate(width/2,height);
    line(0,0,0,-150);
    translate(0,-150);
    rotate(PI/4);
    

}

var topbranch = function(){
    
    line(0,0,0,-100);
    push();
    rotate(PI/4);
    topbranch();
    pop();
    
    push();
    rotate(-PI/4);
    topbranch();
    pop();
    
    
}