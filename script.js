document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("subscription-form");
    const submitButton = document.querySelector("button[type='submit']");
    if (submitButton) {
        submitButton.addEventListener("click", function () {
            gtag('event', 'submit_form', {
                'event_category': 'Subscription',
                'event_label': 'Landing Page Form',
            });
        });
    }

       if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();

            if (!name || !email) {
                alert("Будь ласка, заповніть усі поля!");
                return;
            }

            if (!validateEmail(email)) {
                alert("Введіть дійсну адресу електронної пошти!");
                return;
            }

            // Відправлення події до Google Analytics
            gtag('event', 'submit_form', {
                'event_category': 'Subscription',
                'event_label': 'Landing Page Form',
                'value': 1
            });

            alert(`Дякуємо за підписку, ${name}! Ми надішлемо вам найсвіжіші новини.`);
            form.reset(); // Очистка форми
        });
    }
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});

