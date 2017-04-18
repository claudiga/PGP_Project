var kernel = new Image();
kernel.src = 'graphics/kernel.png';

//$( "#dialog" ).dialog(); 
var square = new Image();
square.src = 'graphics/psquare.png';


var bart = new Image();
bart.src = 'graphics/bartsml.jpg'
bart.height = 300;
bart.width = 300;

outputIm = new Image();
outputIm.src = 'graphics/bartsml.jpg';
outputIm.height = 300;
outputIm.width = 300;

var tutorial = function(para,clicked){
   var i = 1;
    
    //red
    textarea = document.getElementById('textarea');
    tree = document.getElementById('defaultCanvas0')
    treeCtx = tree.getContext('2d');
    treeCtx.beginPath();
    treeCtx.arc(135,130,12,0,2*Math.PI);
    treeCtx.fillStyle = '#FF0000';
    treeCtx.fill();
    treeCtx.stroke();
    
    //green
    treeCtx.beginPath();
    treeCtx.arc(350,65,12,0,2*Math.PI);
    treeCtx.fillStyle = '#41f453';
    treeCtx.fill();
    treeCtx.stroke();
    
    //blue
    treeCtx.beginPath();
    treeCtx.arc(350 + 215,130,12,0,2*Math.PI);
    treeCtx.fillStyle = '#4167f4';
    treeCtx.fill();
    treeCtx.stroke();
    
    
    treeCtx.beginPath();
treeCtx.moveTo(135,130);
treeCtx.lineTo(72,165);
          treeCtx.strokeStyle ='#FF0000';
treeCtx.stroke();
      
    
    
    textarea.innerHTML = para[0];
    
    if(!clicked){
    
  $( "#nextBT" ).click( function( event ) {
        
  
  
      
      textarea.innerHTML = para[i];
      if(i ==1){

      
      }
      
  i+=1;
  });
     $( "#prevBT" ).click( function( event ) {
        

    i-=1;  
         textarea.innerHTML = para[i-1];
        

  });
    }
}

mtrx = {"tpl":0,"tpm":0, "tpr":0,"mdl":0,"mdm":1,"mdr":0,"btl":0,"btm":0,btr:0}
kernel.onload = function(){   
imageurl = "graphics/bart.jpg";    
src = 'Convolution';
dest = 'Coutput'
convolut(mtrx,imageurl,src,dest);
     
     canvas = document.getElementById(src)
     output = document.getElementById(dest);
    
    
    
    drawsquare(canvas,output,tutorial);
    $( "#kernelLog" ).dialog(); 
    
    $( "#kernelLog" ).dialog({
  close: function( event, ui ) {$( "#outputLog" ).dialog(); 

                                 
   $( "#outputLog" ).dialog({
position: { my: "left top", at: "left bottom", of: canvas }
});                                },
position: { my: "right top", at: "left top", of: canvas }
});    
    
    
    
   
  
 }


var drawsquare = function(canvas,ouput,tutorial){
    var paragraphs = [];

   paragraphs.push('For images with colour we also have to work out the extra channels RGB. so we have to work out each channel and combine them after. Press next to continue');
    paragraphs.push('hello world')
    
            
//tutorial(paragraphs);
    var posx, posy;
    var clicked = false;
    console.log(clicked);
 var ctx = canvas.getContext('2d')
 var ctxOuput = output.getContext('2d');



     canvas.addEventListener('mousemove', function(e) {
if(clicked == false){
    var rect = canvas.getBoundingClientRect();
    posx = e.clientX - rect.left ;
    posy = e.clientY - rect.top  ;         

             posx = Math.floor(posx/12) * 12 - 12;
             posy = Math.floor(posy/12) * 12 - 12;

 ctx.drawImage(bart,0,0);

         
         ctx.drawImage(kernel,posx,posy);
    ctxOuput.drawImage(outputIm,0,0);

         ctxOuput.strokeStyle="#FF0000";
         ctxOuput.strokeRect(posx+12,posy+12,12,12)
         
         console.log(clicked)
         }});
    
    canvas.addEventListener('mousedown', function(e) {
        ctx.fillRect(posx+12,posy+12,12,12);
    
         tutorial(paragraphs,clicked);

        if(clicked == true){
            document.getElementById('textarea').innerHTML ='';
        clicked = false}else{
        clicked = true}
        
    });
    

}








var trunks =0;
var size = 50;
function setup(){

var canv = createCanvas(700, 360);
    canv.parent('tabs');
  //background(155);
    stroke(0);
  

translate(350,0);
    line(0,0,0,5);
   
      translate(0,5);
 
    //left
    push();
  
    rotate(PI/3)
    line(0,0,0,250);
    translate(0,250)
branches(80);
   lastbranch(0,0,80)
    lastbranch(-70,35,80)
    lastbranch(-70,110,80)

    
    
    pop();
    
    //middle 
     push();
    rotate(PI-PI);
    line(0,0,0,60);
     translate(0,60)
    ellipse(0,0,20,20);
    rotate(1)
    branches(80);
    lastbranch(0,0,80)
    lastbranch(-70,35,80)
    lastbranch(-70,110,80)

    
    pop();
    //right
    push();
     rotate(-PI/3)
    line(0,0,0,250);
     translate(0,250)
    ellipse(0,0,20,20);
    rotate(2);
    branches(80);
    lastbranch(-70,35,80)
    lastbranch(0,0,80)
    lastbranch(-70,110,80)
    
pop();
    

}

function draw(){
 
}

function branches(x){

    
    i = 0;
    while(i < 3){

        ellipse(0,0,20,20);
        line(0,0,0,x);
        rotate(-1);
    
    i+=1;

    }
    
   
}


function lastbranch(y,offset,x){
    
    //rotate(5)
     push()
    rotate(1)
  
    translate(y,x-offset);
    
    
    ellipse(0,0,10,10);
        
    push();

    for(var i = 0; i < 3; i+=1){
        line(0,0,0,x/2);
    rotate(1)
        
    }
    
    
    
    
    pop();
    
    
    push();
    translate(0,x/2)
    ellipse(0,0,5,5)
    line(0,0,0,20)
    rotate(1)
    line(0,0,0,20)
    pop();
    
    
    
    
    
    
     push();
    rotate(0.6)
    translate(-17,x/2)
    ellipse(0,0,5,5)
    line(0,0,0,20)
    rotate(1)
    line(0,0,0,20)
    pop();
    
    
    
        
     push();
    
    rotate(2)
  translate(0,x/2)
    ellipse(0,0,5,5)
    line(0,0,0,20)
    rotate(5)
    line(0,0,0,20)
    pop();
    
    pop();
    
    
    
    
}

