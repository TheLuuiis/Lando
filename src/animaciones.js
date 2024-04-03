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
