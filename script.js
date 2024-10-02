document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const serviceID = 'service_eejqq7p'; // Your EmailJS service ID
        const templateID = 'template_vvvgpbh'; // Your EmailJS template ID

        // Send the email
        emailjs.sendForm(serviceID, templateID, contactForm)
            .then(() => {
                formMessage.textContent = 'Thank you for your message! I will get back to you soon.';
                formMessage.style.color = 'green';
                contactForm.reset();
            }, (err) => {
                formMessage.textContent = 'Oops! Something went wrong.';
                formMessage.style.color = 'red';
                console.error('EmailJS error:', err);
            });
    });
});
