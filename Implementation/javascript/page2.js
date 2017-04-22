$(window).ready(function() {
	$(".loader").fadeOut("slow");
})
var getxp = function(context){
var imd = context.getImageData(0,80,700,1);
var length = imd.data.length;
   
    var newimArray =   []
    for(var i = 0;i < length; i+=4){
          
    var red = imd.data[i];
        var green = imd.data[i+1];
          var blue = imd.data[i+2];
        
        var grayscale = (red + green + blue) / 3
       
        
        newimArray[i] = grayscale;
        newimArray[i+1] =grayscale;
        newimArray[i+2] = grayscale;
        newimArray[i+3] = grayscale; 
        
        
        
       
      }
  
   newimArray.unshift('x');
    
    
    return newimArray;
}








    
var increase = function( data,increase){
   
 var length = data.data.length;

for(var i = 0; i < length; i+=4){
   
     var red = data.data[i];
    var green = data.data[i+1];
    var blue = data.data[i+2];
   // if(red < 100 && green < 100 && blue < 100){
   
    
    data.data[i]= red- increase;
    data.data[i+1]=green- increase;
  data.data[i+2] =blue-increase;
//}
}
   
    return data;
}


window.onload = function(){
            
    var im = document.getElementById('spatial');
var canvas = document.getElementById('spat');
var context = canvas.getContext('2d');
context.drawImage(im,0,0);
    var imdata = context.getImageData(0,0,700,300);


var xaxis = getxp(context);

          var chart = c3.generate({
    data: {
        
        columns: [
            xaxis
        
        ]
    },
    point: {show: false}
   
});
    
    
$( "#slider" ).slider({
      min: 0,
      max: 90,
      step: 1,
      change: function( event, ui ) {
        var valuee = $( "#slider" ).slider( "value" );
          
          
          var newdata = increase(imdata,valuee)
context.putImageData(newdata,0,0);
          
var xaxis = getxp(context);

      chart.load({
  columns: [
    xaxis

  ]
});    
          
      }
});


$( "#restartP" ).on( "click", function( event, ui ) {
    
    
    $( "#slider" ).slider( "value", 0 );
    context.drawImage(im,0,0);

    chart.load({
  columns: [
    xaxis

  ]
});    
    
    

} );

    $( "#prevBT" ).click(function() {
     window.location.href = "page1.html"; 
    
});
    $( "#nextBT" ).click(function() {
     window.location.href = "page3.html"; 
    
});
      
    
    
}