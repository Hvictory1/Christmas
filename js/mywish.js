window.onload = function(){
    var oText = document.getElementById('text1');
    var oRight=document.getElementById('inn');
    var oBtn2 =document.getElementById('btn2');
    var oOut1 = document.getElementById('out1');
    var oS = document.getElementById('S');
    var oOff = document.getElementById('off');

    oBtn2.onclick=function(){
        oRight.innerHTML='<div class="block">'+'是：'+oText.value+'</div>'+oRight.innerHTML;
        oText.value= "";
    };
    oOff.onclick=function(){
        oOut1.style.display="none";
    };
    oS.onclick = function(){
        oOut1.style.display="block";
    };
};