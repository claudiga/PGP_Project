jQuery.getScript("Convolution.js", function(data, status, jqxhr) {


mtrx = {"tpl":1,"tpm":0, "tpr":-1,"mdl":0,"mdm":0,"mdr":0,"btl":-1,"btm":0,btr:1}
    
imageurl = "stat.jpeg";    
    
convolut(mtrx,imageurl);

});






    //mask used[ 1  0  -1 ]

            // [ 0   0  0 ]

            // [-1  0   1 ]   
