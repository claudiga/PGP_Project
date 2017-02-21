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
    
}

img.onload = function(){
var canvas =  document.getElementById('canvas1');
var ctx = canvas.getContext('2d');
    canvas.height =img.height;
    canvas.width =img.width;
ctx.drawImage(img,0,0);
    getpos(canvas);
    
var imdat = ctx.getImageData(0,0,314,472);
    
    ctx.drawImage(img2,0,0);
 
    console.log(imdat);

}

