const anoAtual = new Date().getFullYear();
document.getElementById("anoAtual").textContent = anoAtual;

const ultimaModificacao = new Date(document.lastModified);
document.getElementById("ultimaModificacao").textContent = ultimaModificacao;

document.addEventListener("DOMContentLoaded", () => {

    const tempElement = document.getElementById("temp");
    const windElement = document.getElementById("wind");
    const windChillElement = document.getElementById("windchill");

    if (tempElement && windElement && windChillElement) {
        const temperatura = parseFloat(tempElement.textContent);
        const velocidadeVento = parseFloat(windElement.textContent);

        if (temperatura <= 10 && velocidadeVento > 4.8) {
            const resultado = calcularSensacaoTermica(temperatura, velocidadeVento);
            windChillElement.textContent = `${resultado.toFixed(1)} °C`;
        } else {
            windChillElement.textContent = "N/A";
        }
    }
});

function calcularSensacaoTermica(temp, vento) {
    return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(vento, 0.16)) + (0.3965 * temp * Math.pow(vento, 0.16));
}