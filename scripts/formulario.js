const anoAtual = new Date().getFullYear();
document.getElementById("anoAtual").textContent = anoAtual;

const ultimaModificacao = new Date(document.lastModified);
document.getElementById("ultimaModificacao").textContent = ultimaModificacao;

const produtos = [
  {
    id: "fc-1888",
    nome: "Capacitor de fluxo",
    classificacaomedia: 4.5
  },
  {
    id: "fc-2050",
    nome: "Fios elétricos",
    classificacaomedia: 4.7
  },
  {
    id: "fs-1987",
    nome: "Circuitos de tempo",
    classificacaomedia: 3.5
  },
  {
    id: "ac-2000",
    nome: "Reator de baixa tensão",
    classificacaomedia: 3.9
  },
  {
    id: "jj-1969",
    nome: "Equalizador de distorção",
    classificacaomedia: 5.0
  }
];

document.addEventListener("DOMContentLoaded", () => {
    const selectProduto = document.getElementById("produto");

    if (selectProduto) {
        produtos.forEach(prod => {
            const option = document.createElement("option");
            option.value = prod.id;
            option.textContent = prod.nome;
            selectProduto.appendChild(option);
        });
    }

    setFooterDates();
});