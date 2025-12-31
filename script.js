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

    // =========================================
    // MOBILE NAVIGATION
    // =========================================
    const headerContainer = document.querySelector('header .container');
    if (headerContainer) {
        // 1. Create Hamburger Button
        const burgerBtn = document.createElement('button');
        burgerBtn.className = 'mobile-menu-btn hidden text-slate-800 p-2'; // hidden by default, shown by CSS media query
        burgerBtn.innerHTML = `<i data-lucide="menu" class="w-8 h-8"></i>`;
        headerContainer.appendChild(burgerBtn);

        // 2. Create Mobile Menu Overlay
        const mobileMenu = document.createElement('div');
        mobileMenu.className = 'fixed inset-0 bg-white/95 backdrop-blur-xl z-[60] flex flex-col items-center justify-center gap-8 transition-transform duration-300 translate-x-full';
        mobileMenu.innerHTML = `
            <button class="absolute top-6 right-6 text-slate-800 p-2" id="close-mobile-menu">
                <i data-lucide="x" class="w-8 h-8"></i>
            </button>
            <nav class="flex flex-col items-center gap-6 text-2xl font-bold text-slate-800">
                <a href="index.html" class="hover:text-blue-600 transition">Accueil</a>
                <a href="services.html" class="hover:text-blue-600 transition">Nos Services</a>
                <a href="about.html" class="hover:text-blue-600 transition">Le Docteur</a>
                <a href="contact.html" class="hover:text-blue-600 transition">Contact</a>
            </nav>
            <a href="services.html" class="btn-modern mt-4">Prendre Rendez-vous</a>
        `;
        document.body.appendChild(mobileMenu);

        // 3. Logic
        burgerBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('translate-x-full');
            document.body.style.overflow = 'hidden';
            if (window.lucide) lucide.createIcons(); // Refresh icons inside menu
        });

        const closeBtn = mobileMenu.querySelector('#close-mobile-menu');
        closeBtn.addEventListener('click', () => {
            mobileMenu.classList.add('translate-x-full');
            document.body.style.overflow = '';
        });

        // Close on link click
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('translate-x-full');
                document.body.style.overflow = '';
            });
        });

        // Refresh icons for new elements
        if (window.lucide) {
            setTimeout(() => lucide.createIcons(), 100);
        }
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
