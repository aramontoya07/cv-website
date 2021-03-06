let nav = document.getElementById('nav');
let menu = document.getElementById('enlaces');
let abrir = document.getElementById('open');
let botones = document.getElementsByClassName('btn-header');
let cerrado = true;

/* Funcion que permite que el nav se haga grande y no transparente */
function menus(){
    let Desplazamiento_Actual = window.pageYOffset;
    if(Desplazamiento_Actual <= 101){
        nav.classList.remove('nav2');
        nav.className = ('nav1');
        nav.style.transition = '1s';
        abrir.style.color = '#fff';
        
    } else{
        nav.classList.remove('nav1');
        nav.className = ('nav2');
        nav.style.transition = '1s';
        nav.style.color = '#000000';
    }
}

function apertura(){
    
    if(cerrado){
        menu.style.width = '70vw';
        cerrado = false;
        
    }else{
        menu.style.width = '0%';
        menu.style.overflow = hidden;
        cerrado = true;
    }
}
window.addEventListener('load', function(){
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
    menus();

});

window.addEventListener('click', function(e){ //para que se cierre al hacer click en cualquier otro lado de la pantalla que no sea el hamburguesa
    if(cerrado == false){
        let span = document.querySelector('span');
        if(e.target !== span && e.target !== abrir){
            menu.style.width = '0%';
            menu.style.overflow = "hidden";
            cerrado = true;
        }
    }
});

window.addEventListener('scroll', function(){
    this.console.log(window.pageYOffset);
    menus();
});

window.addEventListener('resize', function(){
    if(screen.width >= 700){
        cerrado = true;
        menu.style.removeProperty('overflow');
        menu.style.removeProperty('width');
    }
});

abrir.addEventListener('click', function(){
    apertura();
});

