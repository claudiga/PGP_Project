var ImageData = function(canvasN,x,y,w,h){

  var  canvas =  document.getElementById(canvasN);


 var ctx = canvas.getContext('2d');

var  imdat = ctx.getImageData(x,y,w,h);

   imdat = imdat.data;



  var matrix = [];
   var pixel = 0;


for(var i=0; i<canvas.width *2; i++) {
    matrix[i] = [];
    for(var j=0; j<canvas.height*2; j++) {
        matrix[i][j] = imdat[pixel];
        pixel++;
    }
}

 
 return matrix;
}




img = new Image();



var canvas = function (canvasel) {
    
     this.el = document.getElementById(canvasel);
     this.width = this.el.width;
     this.height = this.el.height;
     this.context = this.el.getContext('2d');
}

  canvass = new canvas('canvas1');

var convolut = function(matrix,imgurl){
    
    
    img.src = imgurl;
    
  img.onload = function(){  canvass.context.drawImage(this,0,0,canvass.width,canvass.height);
    
    editedCanvas = new canvas('editedC');
                          
      var imdataa = ImageData('canvas1',0,0,400,400);  im = canvass.context.getImageData(0,0,canvass.width,canvass.height)
     console.log(im.data[639999])
    window.alert(imdataa[0].length)
           
        
     
     editim = editedCanvas.context.getImageData(0,0,400,400);
    
                          
    epixels = editim.data;
                     
     newpixels = []
     var i =0;
for( x = 0; x < canvass.width * 2; x+=1){
    
 for(y = 0; y < canvass.height * 2; y+=1){
   
     
     //console.log(imdataa)
     
     
  //   console.log(imdataa[x][y]);
     
     
     
    epixels[i] = imdataa[x][y]
      epixels[i+1] =  imdataa[x][y]
      epixels[i+2] =  imdataa[x][y]
      //   epixels[i+3] =
        
     i+=1;
 }
    
    
}                          
        editim.data = epixels;
editedCanvas.context.putImageData(editim,0,0)
        // console.log(epixels[5])    
}
    
}