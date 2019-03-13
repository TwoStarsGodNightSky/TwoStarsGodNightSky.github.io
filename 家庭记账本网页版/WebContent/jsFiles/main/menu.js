window.onload = function () {
    var flag = true;
    var liC = document.querySelectorAll(".navBox li h2");
    // 涓诲鑸猲av鐐瑰嚮浜嬩欢
    for (var i = 0; i < liC.length; i++) {
        liC[i].onclick = function () {
            if (flag) {
                // 鑺傛祦闃�
                flag = false;
                setTimeout(function () {
                    flag = true;
                }, 500);
                // 鑷偣
                if (this.className === "obFocus") {
                    this.querySelector("i").classList.remove("arrowRot");
                    getNext(this).style.height = "0";
                    this.classList.add("obtain");
                    this.classList.remove("obFocus");
                    return
                }

                var sec = getNext(this);
                var sib = siblings(sec.parentNode);
                var otherArr = [];
                var arrowClass = [];
                // 鎺掍粬 secondary arrowRot obFocus
                for (var j = 0; j < sib.length; j++) {
                    var sibSec = sib[j].getElementsByTagName('*');
                    for (var i = 0; i < sibSec.length; i++) {
                        if (sibSec[i].className == "secondary") {
                            otherArr.push(sibSec[i]);
                        }
                        if (sibSec[i].className == "arrowRot") {
                            arrowClass.push(sibSec[i]);
                        }
                        if (sibSec[i].className == "obFocus") {
                            sibSec[i].classList.remove("obFocus");
                            sibSec[i].classList.add("obtain");

                        }
                    }
                }
                for (var i = 0; i < otherArr.length; i++) {
                    otherArr[i].style.height = "0";
                }
                if (arrowClass[0]) {
                    arrowClass[0].classList.remove("arrowRot");
                }

                // 鐣欒嚜宸�
                sec.style.height = 2.5078 + "rem";
                this.getElementsByTagName("i")[0].classList.add("arrowRot");
                this.classList.remove("obtain");
                this.classList.add("obFocus");
            }

        };
    }

    // 瀛愬鑸偣鍑讳簨浠�
    var seconC = document.querySelectorAll(".secondary h3");
    for (var i = 0; i < seconC.length; i++) {
        seconC[i].onclick = function () {
            for (var i = 0; i < seconC.length; i++) {
                seconC[i].classList.remove("seconFocus");
            }
            this.classList.add("seconFocus");
        };
    }
    
    // 闅愯棌鑿滃崟
    var obscure = document.querySelector(".navH span");
    var open = document.querySelector("#open");
    var ensconce = document.querySelector("#ensconce");
    obscure.onclick = function () {
        open.style.marginLeft = "-300px";
        setTimeout(function () {
            ensconce.style.display = "block";
        }, 350);

    };
    //鏄剧ず鑿滃崟
    var showC = document.querySelector("#ensconce h2");
    showC.onclick = function () {
        open.style.marginLeft = "0px";
        setTimeout(function () {
            ensconce.style.display = "none";
        }, 100);

    };
};

function getByClass(clsName, parent) {
    var oParent = parent ? document.getElementById(parent) : document,
        boxArr = new Array(),
        oElements = oParent.getElementsByTagName('*');
    for (var i = 0; i < oElements.length; i++) {
        if (oElements[i].className == clsName) {
            boxArr.push(oElements[i]);
        }
    }
    return boxArr;
}
// 鑾峰彇涓嬩竴涓厔寮熷厓绱�
function getNext(node) {
    if (!node.nextSibling) return null;
    var nextNode = node.nextSibling;
    if (nextNode.nodeType == 1) {
        return nextNode;
    }
    return getNext(node.nextSibling);
}

// 鑾峰彇闄や簡鑷繁浠ュ鐨勫叾浠栦翰鍏勫紵鍏冪礌
function siblings(elem) {
    var r = [];
    var n = elem.parentNode.firstChild;
    for (; n; n = n.nextSibling) {
        if (n.nodeType === 1 && n !== elem) {
            r.push(n);
        }
    }
    return r;
}