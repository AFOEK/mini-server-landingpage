(function (global) {
    if(typeof (global) === "undefined") {
        throw new Error("window is undefined");
    }
    var _hash = "!";
    var noBackPlease = function () {
        global.location.href += "#";
        global.setTimeout(function () {
            global.location.href += "!";
        }, 50);
    };
    global.onhashchange = function () {
        if (global.location.hash !== _hash) {
            global.location.hash = _hash;
        }
    };
    global.onload = function () {
        noBackPlease();
    }
})(window);
$(document).ready(function(){
    $(document).bind("contextmenu", function(e){
        e.preventDefault();
    });
    if(window.devtools.isOpen == true){
        console.clear();
        console.warn("Hey what you want doin here ? get back to your world");
        console.warn("This place is reserved only for wizard...");
        let str1 = "Privacy is the privacy, Why you still try hard to steal something you didn't deserve ?";
        let str2 = "Privacy is sacred thing in this world, Why you destroy it ?";
        let str3 = "Human is not great being, even we created computer but computer have great precision and fast";
        let str4 = "Data is key for greater human future but it can be bullet to kill human"
        random = Math.floor((Math.random()*4)+1);
        if(random == 1){
            str64 = btoa(unescape(encodeURIComponent(str1)))
            console.warn(str64)
            alert(str64)
        }else if(random == 2){
            str64 = btoa(unescape(encodeURIComponent(str2)))
            console.warn(str64)
            alert(str64)
        }else if(random == 3){
            str64 = btoa(unescape(encodeURIComponent(str3)))
            console.warn(str64)
            alert(str64)
        }else if(random == 4){
            str64 = btoa(unescape(encodeURIComponent(str4)))
            console.warn(str64)
            alert(str64)
        }
    }
});