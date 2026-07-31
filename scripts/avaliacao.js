document.addEventListener("DOMContentLoaded", () => {
    const STORAGE_KEY = "numReviewsSubmitted";

    let reviewCount = Number(localStorage.getItem(STORAGE_KEY)) || 0;
    reviewCount++;

    localStorage.setItem(STORAGE_KEY, reviewCount);

    const countDisplay = document.getElementById("review-count");
    if (countDisplay) {
        countDisplay.textContent = reviewCount;
    }

    setFooterDates();
});

const anoAtual = new Date().getFullYear();
document.getElementById("anoAtual").textContent = anoAtual;

const ultimaModificacao = new Date(document.lastModified);
document.getElementById("ultimaModificacao").textContent = ultimaModificacao;