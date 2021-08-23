$(document).ready(function(){
    (function (global) {
        if(typeof (global) === "undefined") {
            throw new Error("window is undefined");
        }
        var _hash = "!";
        var noBackPlease = function () {
            global.location.href += "#";
            // Making sure we have the fruit available for juice (^__^)
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
});