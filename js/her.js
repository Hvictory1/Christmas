window.onload = function(){  
    var oOut1 = document.getElementById('out1');
    var oS = document.getElementById('S');
    var oOff = document.getElementById('off');
    oOff.onclick=function(){
        oOut1.style.display="none";
    };
    oS.onclick = function(){
        oOut1.style.display="block";
    };
};