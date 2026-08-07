/* ===========================================
   Projeto: Elas Seguras
   Curso: WDD 131 - Fundamentos da Web Dinâmica
   Autor: Caroline Marques Morais Cardoso
============================================= */

"use strict";


const awarenessData = [
    {
        id: "art1",
        title: "Lei Maria da Penha",
        category: "direitos",
        tag: "Legislação",
        description: "A Lei nº 11.340/2006 estabelece que a violência doméstica é crime e prevê medidas protetivas de urgência para salvar vidas."
    },
    {
        id: "art2",
        title: "Atendimento no SUS",
        category: "direitos",
        tag: "Saúde",
        description: "Vítimas de violência têm direito a atendimento médico profilático e acompanhamento psicológico gratuito na rede pública."
    },
    {
        id: "art3",
        title: "Central Ligue 180",
        category: "dados",
        tag: "Estatística",
        description: "A Central de Atendimento registra milhares de chamados por mês, sendo o principal canal público de denúncia e acolhimento."
    },
    {
        id: "art4",
        title: "Violência Psicológica",
        category: "dados",
        tag: "Alerta",
        description: "Estudos apontam que a violência psicológica precede a maioria dos casos de agressão física. Identificar os sinais é vital."
    }
];


const violenceTypesData = [
    {
        name: "Violência Física",
        icon: "🩹",
        keywords: ["empurrões, socos, chutes, tapas, queimaduras, machucados"],
        description: "A violência física acontece quando uma mulher sofre qualquer agressão que cause dor, lesão ou coloque sua saúde e integridade física em risco."
    },
    {
        name: "Violência Psicológica",
        icon: "🧠",
        keywords: ["ameaças, humilhações, manipulação, isolamento, ciúmes, controle"],
        description: "É toda atitude que provoca sofrimento emocional, abala a autoestima ou busca controlar as decisões e comportamentos da mulher."
    },
    {
        name: "Violência Sexual",
        icon: "🚫",
        keywords: ["forçar", "preservativo", "estupro", "assédio", "chantagem"],
        description: "Ocorre quando a mulher é obrigada, pressionada ou constrangida a participar de qualquer ato sexual contra a sua vontade, ou quando não pode decidir livremente sobre sua vida sexual."
    },
    {
        name: "Violência Patrimonial",
        icon: "💳",
        keywords: ["dinheiro", "bens", "documentos", "cartão", "quebrar", "salário"],
        description: "Acontece quando alguém controla, retém, destrói ou toma os bens, documentos, dinheiro ou outros recursos da mulher, prejudicando sua autonomia financeira."
    },
    {
        name: "Violência Moral",
        icon: "🗣️",
        keywords: ["calúnia", "difamação", "injúria", "mentira", "xingamento", "fofoca"],
        description: "É qualquer comportamento que atinja a honra ou a reputação da mulher, por meio de ofensas, acusações falsas ou exposição que prejudique sua imagem."
    },
    {
        name: "Violência Vicária",
        icon: "👩‍👧‍👦",
        keywords: ["família", "parente", "vicária", "amigo", "dependente"],
        description: "É entendida como qualquer forma de violência praticada contra descendente, parente ou pessoa próxima da mulher, com o objetivo de causar-lhe sofrimento, punição ou controle, no contexto de violência doméstica e familiar."
    }
];


function renderAwarenessCards(itemsList, targetElement) {
    if (!targetElement) return;

    if (itemsList.length === 0) {
        targetElement.innerHTML = `<p class="no-results">Nenhum registro encontrado para essa categoria.</p>`;
        return;
    }

    const htmlContent = itemsList.map(item => {
        return `
            <article class="card">
                <span class="card-tag">${item.tag}</span>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </article>
        `;
    }).join('');

    targetElement.innerHTML = htmlContent;
}


function renderTypesCards(typesList, targetElement, filterText = "") {
    if (!targetElement) return;

    const query = filterText.toLowerCase().trim();

    const filtered = typesList.filter(type => {
        const matchesName = type.name.toLowerCase().includes(query);
        const matchesDesc = type.description.toLowerCase().includes(query);
        const matchesKeyword = type.keywords.some(kw => kw.toLowerCase().includes(query));
        return matchesName || matchesDesc || matchesKeyword;
    });

    if (filtered.length === 0) {
        targetElement.innerHTML = `<p class="no-results">Nenhum tipo de violência correspondente ao termo "${filterText}".</p>`;
        return;
    }

    const htmlContent = filtered.map(type => {
        return `
            <article class="type-card">
                <div class="card-header" style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.8rem;">
                    <span style="font-size: 1.8rem;">${type.icon}</span>
                    <h3 style="margin: 0;">${type.name}</h3>
                </div>
                <p>${type.description}</p>
                <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.8rem;">
                    <strong>Palavras-chave:</strong> ${type.keywords.join(', ')}
                </p>
            </article>
        `;
    }).join('');

    targetElement.innerHTML = htmlContent;
}


function setupFooterInfo() {
    const anoSpan = document.getElementById("anoAtual");
    const modSpan = document.getElementById("ultimaModificacao");

    if (anoSpan) {
        anoSpan.textContent = new Date().getFullYear();
    }
    if (modSpan) {
        modSpan.textContent = document.lastModified;
    }
}


function setupLocalStorageSupport() {
    const saveBtn = document.getElementById("saveChannelBtn");
    const statusBoxText = document.getElementById("supportStatusText");
    const clearStorageBtn = document.getElementById("clearStorageBtn");

    updateStorageDisplay();


    function updateStorageDisplay() {
        const storedData = localStorage.getItem("savedSupportChannel");
        if (storedData) {
            const parsed = JSON.parse(storedData);
            if (statusBoxText) {
                statusBoxText.innerHTML = `<strong>Canal Salvo:</strong> ${parsed.title} (Salvo em: ${parsed.dateSaved})`;
            }
            if (clearStorageBtn) {
                clearStorageBtn.style.display = "inline-block";
            }
        } else {
            if (statusBoxText) {
                statusBoxText.textContent = "Você ainda não salvou nenhum contato de apoio na sua sessão.";
            }
            if (clearStorageBtn) {
                clearStorageBtn.style.display = "none";
            }
        }
    }
}


function setupFormHandling() {
    const form = document.getElementById("contactForm");
    const feedbackBox = document.getElementById("formFeedback");

    if (!form) return;

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const nameInput = document.getElementById("userName").value.trim();
        const emailInput = document.getElementById("userEmail").value.trim();
        const subjectInput = document.getElementById("subjectType").value;
        const termsChecked = document.getElementById("termsConsent").checked;

        if (!nameInput || !emailInput || !subjectInput || !termsChecked) {
            if (feedbackBox) {
                feedbackBox.style.display = "block";
                feedbackBox.style.backgroundColor = "#ffebee";
                feedbackBox.style.borderColor = "#f44336";
                feedbackBox.style.color = "#c62828";
                feedbackBox.innerHTML = `<p>Por favor, preencha todos os campos obrigatórios (*).</p>`;
            }
            return;
        }

        if (feedbackBox) {
            feedbackBox.style.display = "block";
            feedbackBox.style.backgroundColor = "#e8f5e9";
            feedbackBox.style.borderColor = "#4caf50";
            feedbackBox.style.color = "#1b5e20";
            feedbackBox.innerHTML = `
                <h3>Obrigado(a), ${nameInput}!</h3>
                <p>Sua mensagem sobre <strong>${getSubjectLabel(subjectInput)}</strong> foi recebida com sucesso.</p>
                <p>Responderemos com discrição para o e-mail: <em>${emailInput}</em>.</p>
            `;
        }

        form.reset();
    });
}

function getSubjectLabel(value) {
    switch (value) {
        case "orientacao": return "Orientação Geral";
        case "medida_protetiva": return "Informações sobre Medida Protetiva";
        case "apoio_psicologico": return "Apoio Psicológico";
        default: return "Solicitação Geral";
    }
}


function setupNavigation() {
    const hamburgerBtn = document.getElementById("hamburgerBtn");
    const navMenu = document.getElementById("navMenu");

    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });
    }
}


document.addEventListener("DOMContentLoaded", () => {
    setupFooterInfo();
    setupNavigation();
    setupLocalStorageSupport();
    setupFormHandling();

    const cardsGrid = document.getElementById("cardsGrid");
    if (cardsGrid) {
        renderAwarenessCards(awarenessData, cardsGrid);

        const filterBtns = document.querySelectorAll(".btn-filter");
        filterBtns.forEach(btn => {
            btn.addEventListener("click", (e) => {
                filterBtns.forEach(b => b.classList.remove("active"));
                e.target.classList.add("active");

                const filterValue = e.target.getAttribute("data-filter");
                if (filterValue === "todos") {
                    renderAwarenessCards(awarenessData, cardsGrid);
                } else {
                    const filteredData = awarenessData.filter(item => item.category === filterValue);
                    renderAwarenessCards(filteredData, cardsGrid);
                }
            });
        });
    }

    const typesGrid = document.getElementById("typesGrid");
    const searchInput = document.getElementById("searchInput");

    if (typesGrid) {
        renderTypesCards(violenceTypesData, typesGrid);

        if (searchInput) {
            searchInput.addEventListener("input", (e) => {
                renderTypesCards(violenceTypesData, typesGrid, e.target.value);
            });
        }
    }
});