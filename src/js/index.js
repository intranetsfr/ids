//sidenav
document.addEventListener('DOMContentLoaded', () => {
    
    const sidenavs = document.getElementsByTagName('sidenav');
    if(sidenavs.length === 0) return;
    const sidenav = document.getElementsByTagName('sidenav')[0];
    const drawer = sidenav.getElementsByTagName('drawer')[0];
    //appliquer du css au drawer
    drawer.style.width = '250px';
    drawer.style.height = '100%';
    drawer.style.position = 'fixed';
    drawer.style.top = '0';
    drawer.style.left = '0';
    drawer.style.overflowX = 'hidden';
    drawer.style.transition = '1.5s';
    //transition plus forte : 
    drawer.style.transitionTimingFunction = 'cubic-bezier(0.25, 0.1, 0.25, 1)';
    drawer.style.boxShadow = '2px 0 5px rgba(0,0,0,0.5)';
    //ajout d'un z-index pour que le drawer soit au dessus des autres elements

    drawer.style.zIndex = '1000';

    const buttonsSlideOut = document.querySelectorAll('[data-target="slide-out"]');
    buttonsSlideOut.forEach(button => {
        
    button.addEventListener('click', () => {
        if(drawer.hasAttribute('hidden')) {
            drawer.removeAttribute('hidden');
        }
        else {
            drawer.setAttribute('hidden', 'true');
        }
    });
    });

});
