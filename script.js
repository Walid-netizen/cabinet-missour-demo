// Cabinet Missour - Modern Script Logic

document.addEventListener('DOMContentLoaded', () => {

    // Initialize AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out',
            once: true,
            offset: 50
        });
    }

    // Modal Logic
    const modal = document.getElementById('booking-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const bookingForm = document.getElementById('booking-form');
    const serviceInput = document.getElementById('service-input');
    const contactForm = document.getElementById('contact-form');

    // Open Modal - Handle both .book-btn and generic buttons with data-service
    const bookButtons = document.querySelectorAll('button[data-service], .book-btn');
    bookButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const serviceName = btn.getAttribute('data-service') || 'Consultation';
            if (serviceInput) serviceInput.value = serviceName;
            if (modal) {
                modal.classList.remove('hidden');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            }
        });
    });

    // Close Modal
    function closeModal() {
        if (modal) {
            modal.classList.add('hidden');
            document.body.style.overflow = ''; // Restore scrolling
        }
    }

    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);

    // Close on simple click outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Booking Form WhatsApp Logic
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name')?.value || '';
            const phone = document.getElementById('phone')?.value || '';
            const service = document.getElementById('service-input')?.value || 'Consultation';
            const date = document.getElementById('date')?.value || '';

            if (!name || !phone || !date) {
                alert('Veuillez remplir tous les champs obligatoires.');
                return;
            }

            const message = `Bonjour, je souhaite prendre rendez-vous.\nService: ${service}\nDate souhaitée: ${date}\nNom: ${name}\nTéléphone: ${phone}`;
            const encodedMessage = encodeURIComponent(message);
            const phoneNumber = '212661234567'; // Replace with real number

            window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');

            setTimeout(() => {
                closeModal();
                bookingForm.reset();
            }, 500);
        });
    }

    // Contact Form WhatsApp Logic
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('form-name')?.value || '';
            const phone = document.getElementById('form-phone')?.value || '';
            const messageText = document.getElementById('form-message')?.value || '';

            if (!name || !phone || !messageText) {
                alert('Veuillez remplir tous les champs obligatoires.');
                return;
            }

            const message = `Bonjour, nouveau message depuis le site web.\nNom: ${name}\nTéléphone: ${phone}\nMessage: ${messageText}`;
            const encodedMessage = encodeURIComponent(message);
            const phoneNumber = '212661234567'; // Replace with real number

            window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');

            // Optional: Show success feedback
            contactForm.reset();
        });
    }
});
