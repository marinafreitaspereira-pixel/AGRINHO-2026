
alert("JavaScript carregado com sucesso!");
document.addEventListener("DOMContentLoaded", () => {

    // Seleciona todas as seções
    const sections = document.querySelectorAll("section");

    // Efeito inicial
    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(40px)";
        section.style.transition = "all 0.8s ease";
    });

    // Revelar ao rolar
    function revealSections() {
        sections.forEach(section => {
            const top = section.getBoundingClientRect().top;

            if (top < window.innerHeight - 100) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    }

    revealSections();
    window.addEventListener("scroll", revealSections);

    // Clique nos títulos para expandir/recolher
    const titulos = document.querySelectorAll("h2");

    titulos.forEach(titulo => {
        titulo.style.cursor = "pointer";

        titulo.addEventListener("click", () => {

            const conteudo = Array.from(titulo.parentElement.children)
                .filter(el => el.tagName !== "H2");

            conteudo.forEach(item => {
                item.style.display =
                    item.style.display === "none"
                    ? "block"
                    : "none";
            });
        });
    });

    // Destacar seção ao passar o mouse
    sections.forEach(section => {

        section.addEventListener("mouseenter", () => {
            section.style.transform = "scale(1.02)";
            section.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
        });

        section.addEventListener("mouseleave", () => {
            section.style.transform = "scale(1)";
            section.style.boxShadow = "0 4px 6px rgba(0,0,0,0.05)";
        });

    });

})
