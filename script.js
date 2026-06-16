document.addEventListener("DOMContentLoaded", () => {

    // MENU MOBILE
    const menuBtn = document.querySelector("#menu-btn");
    const menu = document.querySelector("#menu");

    if (menuBtn && menu) {
        menuBtn.addEventListener("click", () => {
            menu.classList.toggle("ativo");
        });
    }

    // ANIMAÇÃO DAS SEÇÕES
    const secoes = document.querySelectorAll(".secao");

    function revelarSecoes() {
        secoes.forEach(secao => {
            const topo = secao.getBoundingClientRect().top;

            if (topo < window.innerHeight - 100) {
                secao.classList.add("mostrar");
            }
        });
    }

    window.addEventListener("scroll", revelarSecoes);
    revelarSecoes();

    // CARDS EXPANSÍVEIS
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            card.classList.toggle("aberto");
        });
    });

    // CONTADOR DO PIB
    const contador = document.querySelector("#contador-pib");

    if (contador) {
        let valor = 0;

        const animar = setInterval(() => {
            valor++;

            contador.textContent = valor + "%";

            if (valor >= 25) {
                clearInterval(animar);
            }
        }, 60);
    }

    // FORMULÁRIO
    const formulario = document.querySelector("#contato");

    if (formulario) {
        formulario.addEventListener("submit", (e) => {
            e.preventDefault();

            const nome = document.querySelector("#nome").value.trim();
            const email = document.querySelector("#email").value.trim();

            if (!nome || !email) {
                alert("Preencha todos os campos.");
                return;
            }

            alert("Mensagem enviada com sucesso!");
            formulario.reset();
        });
    }

    // BOTÃO VOLTAR AO TOPO
    const topoBtn = document.querySelector("#topo");

    if (topoBtn) {

        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                topoBtn.style.display = "block";
            } else {
                topoBtn.style.display = "none";
            }
        });

        topoBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

});
