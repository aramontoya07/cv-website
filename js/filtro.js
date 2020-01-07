$(function(){
    let habilidades = $('#habilidades').offset().top,
    educacion = $('#educacion').offset().top,
    intereses = $('#intereses').offset().top;

    window.addEventListener('resize', function(){
        let habilidades = $('#habilidades').offset().top,
        educacion = $('#educacion').offset().top,
        intereses = $('#intereses').offset().top;
    });

    $('#enlace-inicio').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 600)
    });

    $('#enlace-habilidades').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: habilidades - 130
        }, 600)
    });

    $('#enlace-educacion').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: educacion - 50
        }, 600)
    });

    $('#enlace-intereses').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: intereses
        }, 600)
    });

    
});