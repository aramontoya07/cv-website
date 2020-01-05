let nav = document.getElementById('nav');
let menu = document.getElementById('enlaces');

/* Funcion que permite que el nav se haga grande y no transparente */
function menus(){
    let Desplazamiento_Actual = window.pageYOffset;
    if(Desplazamiento_Actual <= 101){
        nav.classList.remove('nav2');
        nav.className = ('nav1');
        nav.style.transition = '1s';
    } else{
        nav.classList.remove('nav1');
        nav.className = ('nav2');
        nav.style.transition = '1s';
    }
}

window.addEventListener('scroll', function(){
    this.console.log(window.pageYOffset);
    menus();
});

window.addEventListener('load', function(){
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
    menus();

});