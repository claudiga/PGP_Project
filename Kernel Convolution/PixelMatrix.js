var canvas = function (canvasel, width, height) {
    
     this.el = canvasel;
     this.width = width;
     this.height = height;
     this.context = canvasel.getContext('2d');
}



img = new Image();
img.src= "stat.png";
canvas = new canvas(document.getElementById('canvas1'),400,400);
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
for(var i=0; i<canvas.width; i++) {
    matrix[i] = [];
    for(var j=0; j<canvas.height; j++) {
        matrix[i][j] = data[pixel];
        
        pixel++;
    }
    
}
    var b = 0;
    var a = 164;
    var ar = [];
    
    for(var k = 0; k < 400; k++){
        
        
        for(var x = 0; x < 400; x++){
       
        
        
        ar[b] =  matrix[a][x]
      
    }
      //  document.write("\n");
        b++;
        a++;
    }
   
    pixels.data = data;
    
    canvas.context.putImageData(pixels,0,0);
    
    
console.log(matrix[125]);
console.log(matrix[125][162], matrix[125][163], matrix[125][164]);

}