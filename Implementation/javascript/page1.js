$("#tabs").tabs();
var img2 = new Image();
img2.src = 'graphics/bsquare.png';
var img3 = new Image();
img3.src = 'graphics/psquare.png';

img = new Image();
img.src = 'graphics/bart.jpg';
img.style.display = 'none';


document.body.appendChild(img);

var getpos = function(canvas){

    canvas.addEventListener('mousemove', function(e) {

    var rect = canvas.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;


return [x,y];



});

    var imdat,ctx;

}


var canvas ;
img.onload = function(){
canvas =  document.getElementById('canvas1');
 ctx = canvas.getContext('2d');
    canvas.height =img.height;
    canvas.width =img.width;
ctx.drawImage(img,0,0);
    

 var canH = document.getElementById("hozline");
  var ctxH = canH.getContext("2d");
  ctxH.beginPath();
  ctxH.moveTo(0, 0);
  ctxH.lineTo(200, 115);
  ctxH.stroke();
    
    var canH2 = document.getElementById("hozline2");
  var ctxH2 = canH2.getContext("2d");
  ctxH2.beginPath();
  ctxH2.moveTo(0, 0);
  ctxH2.lineTo(200, 115);
  ctxH2.stroke();
    
    drawColor();

   drawsquare(canvas);
}


var ImageData = function(canvasN,x,y,w,h){

  var  canvas =  document.getElementById(canvasN);


 var ctx = canvas.getContext('2d');

var  imdat = ctx.getImageData(x,y,w,h);

    imdat = imdat.data;



    var matrix = [];
    var pixel = 0;


/**for(var i=0; i<img.width *2; i++) {
    matrix[i] = [];
    for(var j=0; j<img.height*2; j++) {
        matrix[i][j] = imdat[pixel];
        pixel++;
    }
}

 */
 return imdat;
}


var drawsquare = function(canvas){
    var drawn = false;

    var posx, posy;


var savedstate= [];

  //  window.alert(matrix)
     canvas.addEventListener('mousemove', function(e) {

    var rect = canvas.getBoundingClientRect();
    posx = e.clientX - rect.left ;
    posy = e.clientY - rect.top ;




  //console.log('posx' + posx + ' posy' + posy);



// 199 - 8

         var posxx = posx/16
         var tablist = document.getElementById('unlist');
         var tab = tablist.dataset.tselected;

         if(!drawn ){



     ctx.drawImage(img2,Math.floor(posx/16) * 16  ,Math.floor(posy/16) * 16);

             drawn = true;
         }else{


        ctx.drawImage(img,0,0);

             xax = Math.floor(posx/16) * 16 - 32;
             yax = Math.floor(posy/16) * 16 - 80;



     




       //  ctx.fillStyle = 'rgb('+ red.toString()+ ','+green.toString()+',' + blue.toString() + ')';


if(tab.includes('View') && xax > -5 && xax < 330 && yax > -5 && yax < 230){
             ctx.drawImage(img2,xax,yax);

             var  squareCtx =  canvas.getContext('2d');
               var squareData =squareCtx.getImageData(xax  ,yax ,80,176);

               var sq = document.getElementById('sq').getContext('2d').putImageData(squareData,0,0);



             //   window.alert(sqr);


                 var pixels = document.getElementById("rawpixels");
                 var ctxp = pixels.getContext("2d");
                 ctxp.font = "1 Courier New";


                 ctxp.clearRect(0,0,401,401);




                   var xrgb,tx,yrgb,ty;
                 for( xrgb =0, tx = 0; tx <= 401; tx+=68, xrgb+=16){


                   for(yrgb = 0,ty= 0; ty <= 401; ty+= 36, yrgb+=11){


       
       var sq = ImageData('sq',xrgb+4,yrgb+4,1,1);
       console.log(xrgb)
       ctxp.fillText(sq[0] + ','+ sq[1] +','+ sq[2] ,tx,ty)

                   }
                 }










}else if (tab.includes('view')) {





  ctx.drawImage(img3,xax+32,yax+80)
   var matrixx = ImageData('canvas1',xax+40,yax+90,3,1);

            red = matrixx[0];
             green = matrixx[1];

            blue = matrixx[2];

  document.getElementById('rgb').style.backgroundColor = 'rgb('+ red +',' + green +','+ blue;
    
    var inputrgb = document.getElementById('inputRGB');
    
    var elems = inputrgb.getElementsByTagName('input');
    
   elems[0].setAttribute('value',red.toString());
   
    elems[1].setAttribute('value',green.toString());
    
    elems[2].setAttribute('value',blue.toString());
   

                     

    
    
}else{
    drawColor();
    
    
}



}

     });

    
}

var linex = 0;
var tabsel

var drawColor =  function(){
    
    
     canvas.addEventListener('mousedown', function(e) {

    var rect = canvas.getBoundingClientRect();
    posx = e.clientX - rect.left - 200;
    posy = e.clientY - rect.top -150;

         
      var  xax = Math.floor(posx/16) * 16 - 32;
          var  yax = Math.floor(posy/16) * 16 - 80;
         
         
         ctx.fillRect(xax+32,yax+80,16,16);
         
     });}
                             

