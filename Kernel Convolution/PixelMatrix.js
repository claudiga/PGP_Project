var Getcanvas = function (canvasel, width, height) {
    
     this.el = canvasel;
     this.width = width;
     this.height = height;
     this.context = canvasel.getContext('2d');
}



img = new Image();
img.src= "stat.png";
canvas = new Getcanvas(document.getElementById('canvas1'),400,400);
img.onload = function () {
   
    document.body.appendChild(img);

    img.width = canvas.width;
    img.height = canvas.height;
    
    canvas.context.drawImage(this,0,0,canvas.width,canvas.height);
    
    var pixels = canvas.context.getImageData(0,0,canvas.width,canvas.height);
    
    console.log(pixels);
    
    var data = pixels.data;
        console.log(data[0]);

    
    var pixel = 0;
  var matrix = [];
for(var i=0; i<canvas.width * 2; i++) {
    matrix[i] = [];
    for(var j=0; j<canvas.height * 2; j++) {
        matrix[i][j] = data[pixel];
        
        pixel++;
    }
    
}
var pix = 0;
    var a = 0;
    var ar = [];
    var myarr = new Array();
    
    for(var k = 0; k < 400 * 2; k++){
        
        
        for(var x = 0; x < 400 * 2; x++){
       
        
        
       ar[pix] = matrix[a][x];
            pix++;
            
    }

        a++;
    }
   

    console.log(ar);
    
    
    
   var c = document.getElementById("canvas2");
var ctx = c.getContext("2d");
var imgData = ctx.createImageData(400, 400);
    

var i;
    var co = 0;
for (i = 0; i < imgData.data.length; i++) {
    
    
    if(i < 1600 * 131){
        imgData.data[i] = 0;
        
    }else{
    imgData.data[i] = ar[i];
  co++;
    }
}
    window.alert(co);
ctx.putImageData(imgData, 0, 0);

console.log(ar)

}