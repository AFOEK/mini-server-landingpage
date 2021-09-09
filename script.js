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
    $(".question_1").click(function(){
        $(".answere1").show(1000);
        setTimeout(function(){
            $(".answere1").hide(1500);
        }, 3000);
    });
    $(".question_2").click(function(){
        $(".answere2").show(1000);
        setTimeout(function(){
            $(".answere2").hide(1500);
        }, 3000);
    });
    $(".question_3").click(function(){
        $(".answere3").show(1000);
        setTimeout(function(){
            $(".answere3").hide(1500);
        }, 3000);
    });
    $(".question_4").click(function(){
        $(".answere4").show(1000);
        setTimeout(function(){
            $(".answere4").hide(1500);
        }, 3000);
    });
    $(".question_5").click(function(){
        $(".answere5").show(1000);
        setTimeout(function(){
            $(".answere5").hide(1500);
        }, 3000);
    });
    $(".question_6").click(function(){
        $(".answere6").show(1000);
        setTimeout(function(){
            $(".answere6").hide(1500);
        }, 3000);
    });
    $(".dark").click(function(){
        $(".dark_answere").show(1000);
        setTimeout(function(){
            $(".dark_answere").hide(2500);
        }, 3000);
        $(".portal_gif").show(1500);
        setTimeout(function(){
            $(".portal_gif").hide(2500);
        }, 2500);
    });
    $(".thing_gif").click(function(){
        $(".thingy_question_1").toggle(1000);
        $(".thingy_question_2").toggle(1000);
        $(".thingy_question_3").toggle(1000);
        $(".thingy_question_4").toggle(1000);
        $(".thingy_question_5").toggle(1000);
    });
    $(".thingy_question_1").click(function(){
        $(".answere_thingy_1").show(1000);
        setTimeout(function(){
            $(".answere_thingy_1").hide(3500);
        }, 3000);
    });
    $(".thingy_question_2").click(function(){
        $(".answere_thingy_2").show(1000);
        $(".hidden_answere").show(1000);
        setTimeout(function(){
            $(".answere_thingy_2").hide(2500);
            $(".hidden_answere").hide(3500);
        }, 3000);
    });
    $(".thingy_question_3").click(function(){
        $(".answere_thingy_3").show(1000);
        setTimeout(function(){
            $(".answere_thingy_3").hide(3500);
        }, 3000);
    });
    $(".thingy_question_4").click(function(){
        $(".answere_thingy_4").show(1000);
        setTimeout(function(){
            $(".answere_thingy_4").hide(3500);
        }, 3000);
    });
    $(".thingy_question_5").click(function(){
        $(".answere_thingy_5").show(1000);
        setTimeout(function(){
            $(".answere_thingy_5").hide(3500);
        }, 3000);
    });
    $(".content_core").lettering('words');
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
    $(".question_place_1").click(function(){
        $(".answere_place_1").show(1000);
        setTimeout(function(){
            $(".answere_place_1").hide(3500);
        }, 4500);
    });
    $(".question_place_2").click(function(){
        $(".answere_place_2").show(1000);
        setTimeout(function(){
            $(".answere_place_2").hide(3500);
        }, 4500);
    });
    $(".question_place_3").click(function(){
        $(".answere_place_3").show(1000);
        setTimeout(function(){
            $(".answere_place_3").hide(3500);
        }, 4500);
    });
    $(".question_place_4").click(function(){
        $(".answere_place_4").show(1000);
        setTimeout(function(){
            $(".answere_place_4").hide(3500);
        }, 4500);
    });
    $(".answere_place_1").lettering('words');
    $(".answere_place_2").lettering('words');
    $(".answere_place_3").lettering('words');
    $(".answere_place_4").lettering('words');
});