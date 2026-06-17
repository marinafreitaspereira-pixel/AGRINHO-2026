// Aguarda o HTML da sua página carregar completamente
document.addEventListener('DOMContentLoaded', () => {

    // Seleciona todos os títulos h3 da sua página
    const titulosCards = document.querySelectorAll('main section h3');

    // Configuração inicial de estilos e estados via JavaScript
    titulosCards.forEach(titulo => {
        const explicacao = titulo.nextElementSibling;
        
        // Configura o título h3 como um botão interativo
        titulo.style.cursor = 'pointer';
        titulo.style.userSelect = 'none';
        titulo.style.display = 'flex';
        titulo.style.alignItems = 'center';
        titulo.style.gap = '8px';
        titulo.style.transition = 'color 0.3s ease, transform 0.2s ease';
        
        // Injeta uma seta animada ao lado do título
        titulo.innerHTML = `<span>${titulo.innerHTML}</span> <span class="seta-card" style="transition: transform 0.3s ease; font-size: 0.9rem;">▶</span>`;

        // Prepara o parágrafo de explicação com transições de animação suave
        if (explicacao && explicacao.tagName === 'P') {
            explicacao.style.maxHeight = '0px';
            explicacao.style.opacity = '0';
            explicacao.style.overflow = 'hidden';
            explicacao.style.transition = 'max-height 0.4s ease, opacity 0.3s ease, padding 0.4s ease';
            explicacao.style.backgroundColor = 'var(--primary-light, #e8f5e9)'; 
            explicacao.style.borderRadius = '8px';
            explicacao.style.padding = '0px 1.5rem'; // Começa sem padding vertical para não dar tranco
            explicacao.style.marginTop = '8px';
            explicacao.style.borderLeft = '4px solid var(--primary-vibrant, #2cba42)';
        }

        // Micro-interação de Hover: Dá um leve zoom ao passar o mouse no título
        titulo.addEventListener('mouseenter', () => {
            titulo.style.transform = 'translateX(5px)';
        });
        titulo.addEventListener('mouseleave', () => {
            titulo.style.transform = 'translateX(0px)';
        });
    });

    // Lógica de clique com animações integradas
    titulosCards.forEach(titulo => {
        titulo.addEventListener('click', () => {
            const explicacao = titulo.nextElementSibling;
            const seta = titulo.querySelector('.seta-card');

            if (explicacao && explicacao.tagName === 'P') {
                // Verifica se o card está fechado olhando a altura máxima
                if (explicacao.style.maxHeight === '0px' || explicacao.style.maxHeight === '') {
                    
                    // AÇÃO: ABRIR O CARD
                    explicacao.style.maxHeight = '200px'; // Altura limite suficiente para o texto expandir
                    explicacao.style.opacity = '1';
                    explicacao.style.padding = '1rem 1.5rem'; // Aplica o espaçamento do texto
                    
                    // Animação dos elementos visuais
                    if (seta) seta.style.transform = 'rotate(90deg)'; // Gira a seta para baixo
                    titulo.style.color = 'var(--primary-vibrant, #2cba42)'; // Destaca o título com o verde vivo
                    
                } else {
                    
                    // AÇÃO: FECHAR O CARD
                    explicacao.style.maxHeight = '0px';
                    explicacao.style.opacity = '0';
                    explicacao.style.padding = '0px 1.5rem'; // Remove o espaçamento vertical
                    
                    // Reseta os elementos visuais
                    if (seta) seta.style.transform = 'rotate(0deg)'; // Volta a seta para a posição inicial
                    titulo.style.color = 'var(--secondary-dark, #5d4037)'; // Retorna à cor original
                    
                }
            }
        });
    });

});

