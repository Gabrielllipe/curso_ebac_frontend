$(document).ready(function(){
    $("form").submit(function(e){
        e.preventDefault();

        const valor = $("input").val();

        $("ul").append(`<li>${valor}</li>`);

        $("li").click(function(){
            $(this).toggleClass('lineThrough');
        });
        /* $("li").click(function(){
            if ($(this).hasClass('lineThrough')) {
                $(this).removeClass('lineThrough');
            } else {
                $(this).addClass('lineThrough');
            }
        }); */
    });
});