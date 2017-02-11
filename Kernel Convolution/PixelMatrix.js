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
    
    var ar2 = new Array();
        
        for(var b = 164* 1; b < 400 * 2; b++){
            
            for(var c = 0; c < 400; c++ ){
                
                ar2.push(matrix[b][c]) 
                
            }
            
        }
    
    
    
      jQuery.getScript("jquery.js", function(data, status, jqxhr) {

          
console.log('get a sub matrix');
var h = math.diag(math.range(1,4));
window.alert(h);                                    
          
        //[[1, 0, 0],
  //      [0, 2, 0], 
      //  [0, 0, 3]]

          
          window.alert(h.subset( math.index([1, 2], [1, 2]))); // [[2, 0], [0, 3]]
var i = math.range(1,6);
window.alert(i);                                     // [1, 2, 3, 4, 5]
window.alert(i.subset(math.index(math.range(1,4)))); // [2, 3, 4]
console.log();
      });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
   var c = document.getElementById("canvas2");
var ctx = c.getContext("2d");
var imgData = ctx.createImageData(400, 400);
    

var i;
    var co = 0;
for (i = 0; i < imgData.data.length; i++) {
    
    
    if(i < 1600 * 131){
        imgData.data[i] = 100;
        
    }else{
    imgData.data[i] = ar2[i];
  co++;
    }
}
   // window.alert(co);
ctx.putImageData(imgData, 0, 0);

console.log(ar2)

}