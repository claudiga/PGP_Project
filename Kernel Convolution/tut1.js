var img2 = new Image();
img2.src = 'square.png';

img = new Image();
img.src = 'bart.png';





document.body.appendChild(img);

var getpos = function(canvas){
    
    canvas.addEventListener('click', function(e) {  

    var rect = canvas.getBoundingClientRect(); 
    var x = e.clientX - rect.left;              
    var y = e.clientY - rect.top;               

    alert('Mouse position: ' + x + ',' + y);
    
});
    
    var imdat,ctx; 
    
}

img.onload = function(){
var canvas =  document.getElementById('canvas1');
 ctx = canvas.getContext('2d');
    canvas.height =img.height;
    canvas.width =img.width;
ctx.drawImage(img,0,0);
    getpos(canvas);
    
 imdat = ctx.getImageData(0,0,314,472);

   
   
 

}
var matrix = [];
function setup(){
  var pixel = 0;
  
for(var i=0; i<img.width *2; i++) {
    matrix[i] = [];
    for(var j=0; j<img.height*2; j++) {
        matrix[i][j] = imdat[pixel];
        
        pixel++;
    }
    
}
  
   

}

function draw(){
    
     
 for(var x = 0; x < img.width * 2; x+=14){
     
     for(var y = 0; y < img.height * 2; y+=14){
         
         ctx.drawImage(img2,x,y)
         
     }
     
     
 }
    
    
}




