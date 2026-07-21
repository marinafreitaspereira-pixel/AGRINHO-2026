/* ==========================================================================
   AGRINHO 2026 - COMPORTAMENTO, INTERATIVIDADE E VALIDAÇÕES (SCRIPT.JS)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. RESPOSTA AOS CLIQUES E ROLAGEM SUAVE --- */
    const navLinks = document.querySelectorAll('.nav-menu a, .btn');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            const targetId = link.getAttribute('href');

            // Verifica se o clique foi para uma seção interna da página
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

    /* --- 2. AÇÃO NO HEADER (SOMBRA AO ROLAR A PÁGINA) --- */
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });

    /* --- 3. ANIMAÇÕES DE ENTRADA (EXPERIÊNCIA VIVA) --- */
    const animatableElements = document.querySelectorAll('.card, .alert-card, .section-title');

    const observerOptions = {
        root: null,
        threshold: 0.15
    };

    const elementObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona a classe que ativa a animação configurada no CSS
                entry.target.classList.add('animated-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatableElements.forEach(element => {
        elementObserver.observe(element);
    });

    /* --- 4. VALIDAÇÃO INTELIGENTE DE FORMULÁRIO --- */
    const form = document.querySelector('#contact-form');

    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            // Captura os campos
            const nameInput = document.querySelector('#input-name');
            const emailInput = document.querySelector('#input-email');
            const messageInput = document.querySelector('#input-message');

            let isValid = true;

            // Validação simples de nome
            if (!nameInput || nameInput.value.trim() === '') {
                isValid = false;
                nameInput.classList.add('input-error');
            } else {
                nameInput.classList.remove('input-error');
            }

            // Validação de e-mail com Expressão Regular (Regex)
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailInput || !emailPattern.test(emailInput.value.trim())) {
                isValid = false;
                emailInput.classList.add('input-error');
            } else {
                emailInput.classList.remove('input-error');
            }

            // Validação do campo de mensagem
            if (!messageInput || messageInput.value.trim() === '') {
                isValid = false;
                messageInput.classList.add('input-error');
            } else {
                messageInput.classList.remove('input-error');
            }

            // Ação com base na validação
            if (isValid) {
                alert('Mensagem enviada com sucesso! Agradecemos o seu contato com o projeto AGRINHO 2026.');
                form.reset();
            } else {
                alert('Por favor, preencha corretamente todos os campos destacados.');
            }
        });
    }

});
