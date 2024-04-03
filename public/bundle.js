'use strict';

window.addEventListener('DOMContentLoaded', () => {
const form = document.getElementById('content-form');
const namee = document.getElementById('name');
const email = document.getElementById('email');
const text = document.getElementById('text');
const nameError = document.getElementById('nameErrror');
const emailError = document.getElementById('emailError');
const textError = document.getElementById('texterror');

// Creamos un evento submit para validar
form.addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid = true;

    // Validamos el campo del name
    if(!namee.value.trim()) {
        nameError.textContent = 'Obligatory field';
        errorInputs();
        isValid = false;
    } else if(!isValidName(namee.value.trim())) {
        nameError.textContent = 'Invalid name';        errorInputs();
    } else {
        nameError.textContent = '';
    }

    // Validamos el campo del email
    if(!email.value.trim()) {
        emailError.textContent = 'Obligatory field';
        errorInputs();
        isValid = false;
    } else if(!isValidEmail(email.value.trim())) {
        emailError.textContent = 'Invalid email';
        errorInputs();
    } else {
        emailError.textContent = '';
    }
    // Validamos el campo del message
    if(!text.value.trim()) {
        textError.textContent = 'Obligatory field';
        errorInputs();
        isValid = false;
    } else if(!isValidText(text.value.trim())) {
        textError.textContent = 'Message incorrect';
        errorInputs();
    } else {
        textError.textContent = '';
    }
    if (isValid) {
        resetErrors(); 
        form.reset(); 
    }
});

    // Error inputs 
    const errorInputs = () => {
        namee.style.border = '1px solid red';
        email.style.border = '1px solid red';
        text.style.border = '1px solid red';
    };

    const resetErrors = () => {
        namee.style.border = ''; 
        email.style.border = ''; 
        text.style.border = ''; 
        nameError.textContent = ''; 
        emailError.textContent = ''; 
        textError.textContent = '';
    };

    namee.addEventListener('change', resetErrors);
    email.addEventListener('change', resetErrors);
    text.addEventListener('change', resetErrors);

    function isValidName(namee) {
        const nameRegex =  /^[a-zA-Z0-9\s.,!?'"()&$%]+$/;
        return nameRegex.test(namee);
    }
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    function isValidText(text) {
        const textRegex = /^[a-zA-Z0-9\s.,!?'"()&$%]+$/;
        return textRegex.test(text);
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Seleccionamos todos los enlaces
    var links = document.querySelectorAll('.link-animation');

    // Iteramos
    links.forEach(function(link) {

        link.addEventListener('click', function(event) {
            event.preventDefault();

            var container = document.querySelector('.container-header');
            container.classList.add('animate-out');

            setTimeout(function() {
                window.location.href = link.getAttribute('href');
            },600);
        });
    });
});

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
