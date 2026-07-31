const anoAtual = new Date().getFullYear();
document.getElementById("anoAtual").textContent = anoAtual;

const ultimaModificacao = new Date(document.lastModified);
document.getElementById("ultimaModificacao").textContent = ultimaModificacao;