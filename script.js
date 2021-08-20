$(document).ready(function(){
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
    });
    $(".thing_gif").click(function(){
        $(".thingy_question_1").toggle(1000);
        $(".thingy_question_2").toggle(1000);
        $(".thingy_question_3").toggle(1000);
        $(".thingy_question_4").toggle(1000);
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
});