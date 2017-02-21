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

function setup(){
 
   

}

function draw(){
    
    for(var x = 0; x < imdat.widthhy; x++){
        log(x)
    }
    
 for(var i = 0; i < imdat.data.length; i+=12.6){
    ctx.drawImage(img2,i,12.5);     
    }      
}




