document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm()) {
            console.log('Formularz został poprawnie wypełniony i jest gotowy do wysłania.');
            form.submit(); // Wysyłanie formularza
        } else {
            console.log('Formularz zawiera błędy.');
        }
    });

    function validateForm() {
        const firstName = document.getElementById('firstname').value.trim();
        const lastName = document.getElementById('lastname').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (firstName === '') {
            alert('Pole "First Name" jest wymagane.');
            return false;
        }

        if (lastName === '') {
            alert('Pole "Last Name" jest wymagane.');
            return false;
        }

        if (email === '') {
            alert('Pole "E-mail" jest wymagane.');
            return false;
        }

        if (!validateEmail(email)) {
            alert('Podaj poprawny adres e-mail.');
            return false;
        }

        if (message === '') {
            alert('Pole "Message" jest wymagane.');
            return false;
        }

        return true;
    }

    function validateEmail(email) {
        // Wyrażenie regularne do walidacji adresu e-mail
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
