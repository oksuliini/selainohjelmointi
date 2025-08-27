// Scroll to top -nappulan toiminto
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    const myBtn = document.getElementById("myBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myBtn.style.display = "block";
    } else {
        myBtn.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE ja Opera
}
const colors = [
    { name: "Fiesta", hex: "#DD4132" },
    { name: "Jester Red", hex: "#9E1030" },
    { name: "Turmeric", hex: "#FE840E" },
    { name: "Living Coral", hex: "#FF6F61" },
    { name: "Pink Peacock", hex: "#C62168" },
    { name: "Pepper Stem", hex: "#8D9440" },
    { name: "Aspen Gold", hex: "#FFD662" },
    { name: "Princess Blue", hex: "#00539C" },
    { name: "Toffee", hex: "#755139" },
    { name: "Mango Mojito", hex: "#D69C2F" },
    { name: "Terrarium Moss", hex: "#616247" },
    { name: "Sweet Lilac", hex: "#E8B5CE" },
    { name: "Soybean", hex: "#D2C29D" },
    { name: "Eclipse", hex: "#343148" },
    { name: "Sweet Corn", hex: "#F0EAD6" },
    { name: "Brown Granite", hex: "#615550" }
];

const vari1 = document.getElementById('vari1');
const vari2 = document.getElementById('vari2');
const tausta1Nimi = document.getElementById('tausta1Nimi');
const tausta2Nimi = document.getElementById('tausta2Nimi');
const taustaValinta = document.getElementById('taustaValinta');

colors.forEach(color => {
    const button = document.createElement('button');
    button.style.backgroundColor = color.hex;
    button.style.width = '80px';
    button.style.height = '80px';
    button.style.margin = '5px';
    button.style.border = 'none';
    button.style.borderRadius = '50%';
    button.title = color.name;
    button.onclick = () => vaihdaVari(color.hex);
    document.getElementById('varinapit').appendChild(button);
});

function vaihdaVari(vari) {
    const selectedTausta = taustaValinta.value;
    document.getElementById(selectedTausta).style.backgroundColor = vari;
    if (selectedTausta === "vari1") {
        tausta1Nimi.textContent = colors.find(c => c.hex === vari).name;
    } else {
        tausta2Nimi.textContent = colors.find(c => c.hex === vari).name;
    }
}

function nollaaVari() {
    vari1.style.backgroundColor = 'bisque';
    vari2.style.backgroundColor = 'bisque';
    tausta1Nimi.textContent = "Tausta 1";
    tausta2Nimi.textContent = "Tausta 2";
}