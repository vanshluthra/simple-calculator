"use strict";

var ans = "";
var n = "";
var opt = document.getElementsByClassName("evaluate");
var res = document.getElementById("result");
var ac = document.getElementById("ac");
var recip = document.getElementById("recip");

function show(val){
    res.innerHTML = val;
}

recip.addEventListener("click", function(){
    var c = eval(ans);
    if(c==0){
        show("Error");
        n = "";
        ans = "";
        return;
    }
    var x = eval("1/"+c);
    show(x);
    n = x;
    ans = x;
})

ac.addEventListener("click", function(){
    ans = "";
    n = "";
    show(0);
})

opt[0].addEventListener("click", function(){
    ans += "%";
    n += "%";
    show(n);
})
opt[1].addEventListener("click", function(){
    ans += "/";
    n += "/";
    show(n);
})
opt[2].addEventListener("click", function(){
    ans += "7";
    n += "7";
    show(n);
})
opt[3].addEventListener("click", function(){
    ans += "8";
    n += "8";
    show(n);
})
opt[4].addEventListener("click", function(){
    ans += "9";
    n += "9";
    show(n);
})
opt[5].addEventListener("click", function(){
    ans += "*";
    n += "*";
    show(n);
})
opt[6].addEventListener("click", function(){
    ans += "4";
    n += "4";
    show(n);
})
opt[7].addEventListener("click", function(){
    ans += "5";
    n += "5";
    show(n);
})
opt[8].addEventListener("click", function(){
    ans += "6";
    n += "6";
    show(n);
})
opt[9].addEventListener("click", function(){
    ans += "-";
    n += "-";
    show(n);
})
opt[10].addEventListener("click", function(){
    ans += "1";
    n += "1";
    show(n);
})
opt[11].addEventListener("click", function(){
    ans += "2";
    n += "2";
    show(n);
})
opt[12].addEventListener("click", function(){
    ans += "3";
    n += "3";
    show(n);
})
opt[13].addEventListener("click", function(){
    ans += "+";
    n += "+";
    show(n);
})
opt[14].addEventListener("click", function(){
    ans += "0";
    n += "0";
    show(n);
})
opt[15].addEventListener("click", function(){
    ans += ".";
    n += ".";
    show(n);
})

var eq = document.getElementById("eq");
eq.addEventListener("click", function(){
    if(ans.length < 3){
        show("Error");
        ans = "";
        n = "";
        return;
    }

    function sideCheck(operat){
        if(operat=="%" || operat=="/" || operat=="*" || operat=="+" || operat=="-"){
            return true;
        }
        else{
            return false;
        }
    }

    for(var i=0; i<ans.length; i++){
        if(sideCheck(ans[i]) && (sideCheck(ans[i-1]) || sideCheck(ans[i+1]))){
            show("Error");
            ans = "";
            n = "";
            return;
        }
    }

    var t = eval(ans);
    if(t==Infinity || t==NaN){
        show("Error");
        ans = "";
        n = "";
        return;
    }
    show(t);
    ans = t;
    n = t;
})

//console.log(opt);