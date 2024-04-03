// <    >  =>

/* Library scroll reveal - javascript */
window.addEventListener('load', () => {

    /* llamamos la librería */
    window.sr = ScrollReveal();

    /* Container - Header */
    sr.reveal('.container-header', {
        origin: 'left',
        interval: 106,
        duration: 3000,
        distance: '50%'
    }); 

    /* Introducing */
    sr.reveal('.container-introducing', {
        origin: 'left',
        interval: 106,
        duration: 3000,
        distance: '50%'
    });
    /* Works */
    sr.reveal('.container-works', {
        origin: 'rigth',
        interval: 106,
        duration: 3000,
        distance: '50%'
    });

    /* Smart */
    sr.reveal('.container-smart', {
        origin: 'left',
        interval: 106,
        duration: 3000,
        distance: '50%'
    });

    /* Community */
    sr.reveal('.container-community', {
        origin: 'rigth',
        interval: 106,
        duration: 3000,
        distance: '50%'
    });

    /* Steps */
    sr.reveal('.steps', {
        origin: 'left',
        interval: 106,
        duration: 3000,
        distance: '50%'
    });

    /* Testimonial */
    sr.reveal('.container-testimonial', {
        origin: 'rigth',
        interval: 106,
        duration: 3000,
        distance: '50%'
    });

    /* Today */
    sr.reveal('.container-today', {
        origin: 'left',
        interval: 106,
        duration: 3000,
        distance: '50%'
    });

    /* Two Page */
    ScrollReveal().reveal('.container-header', {
        delay: 200,
        duration: 1000,
        origin: 'top',
        distance: '50px',
        easing: 'ease',
        reset: true
    });
    
    ScrollReveal().reveal('.container-price .card', {
        delay: 300,
        duration: 1000,
        origin: 'bottom',
        distance: '100px',
        easing: 'ease',
        reset: true,
        interval: 200
    });

    /* Feactures */
    sr.reveal('.container-feactures', {
        origin: 'left',
        interval: 106,
        duration: 3000,
        delay: 300,
        easing: 'ease',
        reset: true,
        distance: '50%',
    });

    /* Container - accordion */
    sr.reveal('.container-accordion', {
        origin: 'rigth',
        interval: 106,
        duration: 3000,
        delay: 300,
        easing: 'ease',
        reset: true,
        distance: '50%',
    });

    /* Three - Page */
    sr.reveal('.container-header', {
        origin: 'left',
        interval: 106,
        duration: 3000,
        distance: '50%'
    });

    /* Container - Working */
    sr.reveal('.container-working', {
        origin: 'left',
        interval: 106,
        duration: 3000,
        distance: '50%'
    });

    /* Container - Profiles */
    sr.reveal('.container-team', {
        origin: 'rigth',
        interval: 106,
        duration: 3000,
        distance: '50%'
    });

    /* Container - Today */
    sr.reveal('.container-today', {
        origin: 'left',
        interval: 106,
        duration: 3000,
        distance: '50%'
    });

    /* Img */
    sr.reveal('.img-contact', {
        origin: 'left',
        interval: 106,
        duration: 6000,
        distance: '70%',
        delay: 100,
        reset: true,
    });

    /* Form */
    sr.reveal('.container-form', {
        origin: 'rigth',
        interval: 106,
        duration: 6000,
        distance: '100%',
        delay: 100,
        reset: true,
    });
});
