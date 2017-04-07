jQuery.getScript("kConvolution.js", function(data, status, jqxhr) {


mtrx = {"tpl":-1,"tpm":-1, "tpr":-1,"mdl":-1,"mdm":8,"mdr":-1,"btl":-1,"btm":-1,btr:-1}
    
imageurl = "cat.jpeg";    
    
convolut(mtrx,imageurl);

});






    //mask used[ 1  0  -1 ]

            // [ 0   0  0 ]

            // [-1  0   1 ]   
