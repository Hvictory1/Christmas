window.onload = function () {
    var oLogin = document.getElementById('login');
    var oOut = document.getElementById('out');
    var oOut1 = document.getElementById('out1');
    var oS = document.getElementById('S');
    var oOff = document.getElementById('off');
    var oBtn = document.getElementById('button');
    var oId = document.getElementById('id');
    var oMm = document.getElementById('mm');
    var oDiv = document.getElementById('bottom');
    var oUl = oDiv.getElementsByTagName('ul')[0];
    var aLi = oUl.getElementsByTagName('li');
    var oPrev = document.getElementById('prev');
    var oNext = document.getElementById('next');
    var oImg = document.getElementById('img1');
    var oldLi = null;
    var oText1 = document.getElementById('text1');
    var oText1In = document.getElementById('text1In');
    var oText2 = document.getElementById('text2');
    var oText2In = document.getElementById('text2In');
    var oText3 = document.getElementById('text3');
    var oText3In = document.getElementById('text3In');
    var oText4 = document.getElementById('text4');
    var oText4In = document.getElementById('text4In');
    arrUrl = ['img/21.jpg', 'img/22.jpg', 'img/23.jpg'];
    var num = 0;
    for (var i = 0; i < arrUrl.length; i++) {
        oUl.innerHTML += '<li></li>';
    }
    oldLi = aLi[num];
    aLi[num].className = 'active';
    for (var i = 0; i < aLi.length; i++) {
        aLi[i].index = i;
        aLi[i].onmouseover = function () {
            oImg.src = arrUrl[this.index];
            oldLi.className = '';
            oldLi = this;
            this.className = 'active';
        };
    }
    oOff.onclick = function () {
        oOut1.style.display = "none";
    };
    oLogin.onclick = function () {
        oOut.style.display = "block";
    };
    oBtn.onclick = function () {
        oOut.style.display = "none";
        if (oId.value == '') {
            alert('哥们输入id吧!');
            oOut.style.display = "block";
        }
        if (oMm.value == '') {
            alert('哥们输入密码吧！');
            oOut.style.display = "block";
        }
    };
    oS.onclick = function () {
        oOut1.style.display = "block";
    };
    function fnTab() {
        oImg.src = arrUrl[num];
        for (var i = 0; i < aLi.length; i++) {
            aLi[i].className = '';
        }
        aLi[num].className = 'active';
    }
    fnTab();
    oPrev.onclick = function () {
        num--;
        if (num == -1) {
            num = arrUrl.length - 1;
        }
        fnTab();
    };
    oNext.onclick = function () {
        num++;
        if (num == arrUrl.length) {
            num = 0;
        }
        fnTab();
    };
    oText1.onmouseover = function () {
        oText1In.style.display = "block";
        oText1.onmouseout = function () {
            oText1In.style.display = "none";
        };
    };
    oText2.onmouseover = function () {
        oText2In.style.display = "block";
        oText2.onmouseout = function () {
            oText2In.style.display = "none";
        };
    };
    oText3.onmouseover = function () {
        oText3In.style.display = "block";
        oText3.onmouseout = function () {
            oText3In.style.display = "none";
        };
    };
    oText4.onmouseover = function () {
        oText4In.style.display = "block";
        oText4.onmouseout = function () {
            oText4In.style.display = "none";
        };
    };

}