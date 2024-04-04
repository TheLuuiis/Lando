'use strict'

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
        nameError.textContent = 'Invalid name';;
        errorInputs();
    } else {
        nameError.textContent = '';
    };

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
    };

    // Validamos el campo del message
    if(!text.value.trim()) {
        textError.textContent = 'Obligatory field';
        errorInputs();
        isValid = false;
    } else if(!isValidText(text.value.trim())) {
        textError.textContent = 'Message incorrect'
        errorInputs();
    } else {
        textError.textContent = '';
    };

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
    };

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    function isValidText(text) {
        const textRegex = /^[a-zA-Z0-9\s.,!?'"()&$%]+$/;
        return textRegex.test(text);
    };
});