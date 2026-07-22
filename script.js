/* ==========================================================================
   AGRINHO 2026 - COMPORTAMENTO, FLASHCARDS E VALIDAÇÃO (SCRIPT.JS)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. ROLAGEM SUAVE AO CLICAR NOS LINKS --- */
    const navLinks = document.querySelectorAll('.nav-menu a, .btn');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            const targetId = link.getAttribute('href');

            if (targetId && targetId.startsWith('#') && targetId.length > 1) {
                event.preventDefault();
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    const headerOffset = 80;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    /* --- 2. DESTACAR HEADER AO ROLAR --- */
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });

    /* --- 3. INTERATIVIDADE DOS FLASHCARDS --- */
    const flashcards = document.querySelectorAll('.flashcard');

    flashcards.forEach(card => {
        card.addEventListener('click', () => {
            // Alterna a classe 'flipped' para disparar o giro 3D do CSS
            card.classList.toggle('flipped');
        });
    });

   /* --- 4. ANIMAÇÕES DE ENTRADA AO ROLAR (EXCETO FLASHCARDS PARA NÃO CONFLITAR) --- */
    const cardsAndTitles = document.querySelectorAll('.card, .alert-card');

    cardsAndTitles.forEach(element => {
        element.classList.add('animated-element');
    });

    const observerOptions = {
        root: null,
        threshold: 0.15
    };

    const elementObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    cardsAndTitles.forEach(element => {
        elementObserver.observe(element);
    });

    /* --- 5. VALIDAÇÃO INTELIGENTE DO FORMULÁRIO DE CONTATO --- */
    const contactForm = document.querySelector('#contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const nameInput = document.querySelector('#input-name');
            const emailInput = document.querySelector('#input-email');
            const messageInput = document.querySelector('#input-message');

            let isValid = true;

            // Validação de Nome
            if (!nameInput || nameInput.value.trim() === '') {
                isValid = false;
                nameInput.classList.add('input-error');
            } else {
                nameInput.classList.remove('input-error');
            }

            // Validação de E-mail por RegEx
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailInput || !emailPattern.test(emailInput.value.trim())) {
                isValid = false;
                emailInput.classList.add('input-error');
            } else {
                emailInput.classList.remove('input-error');
            }

            // Validação de Mensagem
            if (!messageInput || messageInput.value.trim() === '') {
                isValid = false;
                messageInput.classList.add('input-error');
            } else {
                messageInput.classList.remove('input-error');
            }

            // Ação pós-validação
            if (isValid) {
                alert('Mensagem enviada com sucesso! Obrigado pelo contato com o projeto AGRINHO 2026.');
                contactForm.reset();
            } else {
                alert('Por favor, preencha corretamente os campos em destaque vermelho.');
            }
        });
    }

});
