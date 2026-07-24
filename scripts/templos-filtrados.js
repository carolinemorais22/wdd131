const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

const anoAtual = new Date().getFullYear();
document.getElementById("anoAtual").textContent = anoAtual;

const ultimaModificacao = new Date(document.lastModified);
document.getElementById("ultimaModificacao").textContent = ultimaModificacao;

function toggleActive(element) {
  document.querySelectorAll('a').forEach(link => {
    link.classList.remove('active');
  });

  element.classList.add("active");
}

const templos = [
    {
        nomeDoTemplo: "Aba Nigeria",
        localizacao: "Aba, Nigéria",
        consagracao: "2005-08-07",
        area: 11500,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Manti Utah",
        localizacao: "Manti, Utah, Estados Unidos",
        consagracao: "1888-05-21",
        area: 74792,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Payson Utah",
        localizacao: "Payson, Utah, Estados Unidos",
        consagracao: "2015-06-07",
        area: 96630,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Yigo Guam",
        localizacao: "Yigo, Guam",
        consagracao: "2020-05-02",
        area: 6861,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        nomeDoTemplo: "Washington D.C.",
        localizacao: "Kensington, Maryland, Estados Unidos",
        consagracao: "1974-11-19",
        area: 156558,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        nomeDoTemplo: "Lima Peru",
        localizacao: "Lima, Peru",
        consagracao: "1986-01-10",
        area: 9600,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Cidade do México, México",
        localizacao: "Cidade do México, México",
        consagracao: "1983-12-02",
        area: 116642,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Bahía Blanca Argentina",
        localizacao: "Bahía Blanca, Argentina",
        consagracao: "2025-11-23",
        area: 23400,
        urlDaImagem: "https://churchofjesuschristtemples.org/assets/img/temples/bahia-blanca-argentina-temple/bahia-blanca-argentina-temple-65191-main.jpg"
    },
    {
        nomeDoTemplo: "Winnipeg Manitoba Canadá",
        localizacao: "Winnipeg, Manitoba, Canadá",
        consagracao: "2021-10-31",
        area: 16100,
        urlDaImagem: "https://churchofjesuschristtemples.org/assets/img/temples/winnipeg-manitoba-temple/winnipeg-manitoba-temple-22437-main.jpg"
    },
	{
        nomeDoTemplo: "Antofagasta Chile",
        localizacao: "Antofagasta, Chile",
        consagracao: "2025-06-15",
        area: 26163,
        urlDaImagem: "https://churchofjesuschristtemples.org/assets/img/temples/antofagasta-chile-temple/antofagasta-chile-temple-60193-main.jpg"
    }
];

document.querySelector('#all').addEventListener('click', () => {
    createTempleCard(templos);
});

document.querySelector('#old').addEventListener('click', () => {
    toggleActive(document.querySelector('#old'));
    createTempleCard(templos.filter(temple => new Date(temple.consagracao) < new Date('1950-01-01')));
});

document.querySelector('#new').addEventListener('click', () => {
    toggleActive(document.querySelector('#new'));
    createTempleCard(templos.filter(temple => new Date(temple.consagracao) >= new Date('1950-01-01')));
});

document.querySelector('#large').addEventListener('click', () => {
    toggleActive(document.querySelector('#large'));
    createTempleCard(templos.filter(temple => temple.area >= 90000));
});

document.querySelector('#small').addEventListener('click', () => {
    toggleActive(document.querySelector('#small'));
    createTempleCard(templos.filter(temple => temple.area < 10000));
});

function createTempleCard(templos) {
    document.querySelector('.alinhar').innerHTML = "";

    templos.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.nomeDoTemplo;
        location.innerHTML = `<span class="label">Localização:</span> ${temple.localizacao}`;
        dedication.innerHTML = `<span class="label">Dedicado:</span> ${temple.consagracao}`;
        area.innerHTML = `<span class="label">Tamanho:</span> ${temple.area} pés²`;
        img.setAttribute("src", temple.urlDaImagem);
        img.setAttribute("alt", `Templo ${temple.nomeDoTemplo}`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".alinhar").appendChild(card);
    });
}

createTempleCard(templos);