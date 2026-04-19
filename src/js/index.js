document.addEventListener('DOMContentLoaded', () => {
    const sidenavs = document.getElementsByTagName('sidenav');
    if (sidenavs.length === 0) return;

    const sidenav = sidenavs[0];
    const drawer = sidenav.getElementsByTagName('drawer')[0];

    document.querySelectorAll('[data-target="slide-out"]').forEach(button => {
        button.addEventListener('click', () => {
            const isHidden = drawer.getAttribute('aria-hidden') !== 'false';
            drawer.setAttribute('aria-hidden', isHidden ? 'false' : 'true');
        });
    });
});
