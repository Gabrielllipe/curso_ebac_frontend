$(document).ready(function(){
    const form = $('form');

    $(form).submit(function(e){
        e.preventDefault();

        const valor = $("input").val();

        $("ul").append(`<li>${valor}</li>`);
    });
    
    $('ul').on('click', 'li', function() {
        $(this).toggleClass('lineThrough');
    });
});