// Cabinet Missour - Classic Script logic

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

    // Simple Mobile Menu Toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Modal Logic
    const modal = document.getElementById('booking-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const bookingForm = document.getElementById('booking-form');
    const serviceInput = document.getElementById('service-input');

    // Open Modal
    const bookButtons = document.querySelectorAll('.book-btn');
    bookButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const serviceName = btn.getAttribute('data-service') || 'Consultation';
            if (serviceInput) serviceInput.value = serviceName;
            if (modal) modal.classList.remove('hidden');
        });
    });

    // Close Modal
    function closeModal() {
        if (modal) modal.classList.add('hidden');
    }

    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);

    // Close on simple click outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // WhatsApp Logic
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const service = document.getElementById('service-input').value;
            const date = document.getElementById('date').value;

            if (!name || !phone || !date) {
                alert('Veuillez remplir tous les champs obligatoires.');
                return;
            }

            // Classic Professional Message
            // Bonjour, je voudrais prendre rendez-vous pour [Service] le [Date]. Nom: [Nom].
            const message = `Bonjour, je voudrais prendre rendez-vous pour ${service} le ${date}.\nNom: ${name}.\nMerci.`;
            const encodedMessage = encodeURIComponent(message);
            const phoneNumber = '212661234567'; // Realistic dummy

            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

            window.open(whatsappUrl, '_blank');

            setTimeout(() => {
                closeModal();
                bookingForm.reset();
            }, 500);
        });
    }
});
