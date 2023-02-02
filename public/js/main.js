let s555 = document.getElementById("s555");
// Création de la section 5
let s5 = document.createElement("section");
s5.id = "s5";

// Création de la div et le p OUR MENU
let div1 = document.createElement("div");
let p1 = document.createElement("p");
p1.textContent = "OUR MENU";
div1.appendChild(p1);
s5.appendChild(div1);


// Création de la div 2 et du titre Check Our Menu
let div2 = document.createElement("div");
let h1 = document.createElement("h1");
h1.textContent = "CHECK OUR MAIN MENU";
div2.appendChild(h1);
s5.appendChild(div2);

// Création de la div 3 et des 4 titres 
let div3 = document.createElement("div");
div3.id = "dtitres5";
let p2 = document.createElement("p");
p2.textContent = "Starters";
div3.appendChild(p2);




let p3 = document.createElement("p");
p3.textContent = "Breakfast";
div3.appendChild(p3);




let p4 = document.createElement("p");
p4.textContent = "Lunch";
div3.appendChild(p4);


let p5 = document.createElement("p");
p5.textContent = "Dinner";
div3.appendChild(p5);


p2.addEventListener('click', () => {
    strong.textContent = "Starters";
    dcard1.style.opacity = 0;
    dcard2.style.opacity = 0;
    setTimeout(() => {
        dcard1.style.opacity = 1;
        dcard2.style.opacity = 1;

    }, 500);

})


p3.addEventListener('click', () => {
    strong.textContent = "BreakFast";
    dcard1.style.opacity = 0;
    dcard2.style.opacity = 0;
    setTimeout(() => {
        dcard1.style.opacity = 1;
        dcard2.style.opacity = 1;
    }, 500);
})

p4.addEventListener('click', () => {
    strong.textContent = "Lunch";
    dcard1.style.opacity = 0;
    dcard2.style.opacity = 0;
    setTimeout(() => {
        dcard1.style.opacity = 1;
        dcard2.style.opacity = 1;
    }, 500);
})

p5.addEventListener('click', () => {
    strong.textContent = "Dinner";
    dcard1.style.opacity = 0;
    dcard2.style.opacity = 0;
    setTimeout(() => {
        dcard1.style.opacity = 1;
        dcard2.style.opacity = 1;
    }, 500);
})

s5.appendChild(div3);

// Création de la div 4, des 2 titres et de la balise strong
let div4 = document.createElement("div");
let p6 = document.createElement("p");
p6.id = "pMenu";
p6.textContent = "MENU";
div4.appendChild(p6);
let strong = document.createElement("strong");
strong.id = "str1";
strong.textContent = "Dinner";
div4.appendChild(strong);
s5.appendChild(div4);












//// Cards 1


let dcard1 = document.createElement("div");
dcard1.setAttribute('id', 'dcard1')
s5.appendChild(dcard1);

let dimgCard1 = document.createElement("div");
dimgCard1.setAttribute('id', 'dimgCard');
dcard1.appendChild(dimgCard1);

let img1 = document.createElement("img");
img1.setAttribute('src', '../public/img/menu-item-1.png')
img1.setAttribute('height', '200px');
img1.setAttribute('id', 'iCent');
dimgCard1.appendChild(img1);



let h51 = document.createElement("h5");
h51.setAttribute('id', 'h55')
h51.textContent = "Magnam Tiste";
dimgCard1.appendChild(h51);



let p11 = document.createElement("p");
p11.textContent = "Lorem, deren, tratraro, filede, nerada";
dimgCard1.appendChild(p11);

let prixVert1 = document.createElement("p");
prixVert1.setAttribute('class', 'prixVert');
prixVert1.innerHTML = "<strong>$5.95</strong>";
dimgCard1.appendChild(prixVert1);

// img2


let dimgCard2 = document.createElement("div");
dimgCard2.setAttribute('id', 'dimgCard');
dcard1.appendChild(dimgCard2);

let img2 = document.createElement("img");
img2.setAttribute('src', '../public/img/menu-item-2.png')
img2.setAttribute('height', '200px');
img2.setAttribute('id', 'iCent');
dimgCard2.appendChild(img2);



let h52 = document.createElement("h5");
h52.setAttribute('id', 'h55')
h52.textContent = "Aut Luia";
dimgCard2.appendChild(h52);



let p12 = document.createElement("p");
p12.textContent = "Lorem, deren, tratraro, filede, nerada";
dimgCard2.appendChild(p12);

let prixVert2 = document.createElement("p");
prixVert2.setAttribute('class', 'prixVert');
prixVert2.innerHTML = "<strong>$14.95</strong>";
dimgCard2.appendChild(prixVert2);

//img 3

let dimgCard3 = document.createElement("div");
dimgCard3.setAttribute('id', 'dimgCard');
dcard1.appendChild(dimgCard3);

let img3 = document.createElement("img");
img3.setAttribute('src', '../public/img/menu-item-3.png')
img3.setAttribute('height', '200px');
img3.setAttribute('id', 'iCent');
dimgCard3.appendChild(img3);



let h53 = document.createElement("h5");
h53.setAttribute('id', 'h55')
h53.textContent = "Est Eligendi";
dimgCard3.appendChild(h53);



let p13 = document.createElement("p");
p13.textContent = "Lorem, deren, tratraro, filede, nerada";
dimgCard3.appendChild(p13);

let prixVert3 = document.createElement("p");
prixVert3.setAttribute('class', 'prixVert');
prixVert3.innerHTML = "<strong>$8.95</strong>";
dimgCard3.appendChild(prixVert3);

// --------------Cards 2---------------------

let dcard2 = document.createElement("div");
dcard2.setAttribute('id', 'dcard2')
s5.appendChild(dcard2);
// img4

let dimgCard4 = document.createElement("div");
dimgCard4.setAttribute('id', 'dimgCard');
dcard2.appendChild(dimgCard4);

let img4 = document.createElement("img");
img4.setAttribute('src', '../public/img/menu-item-4.png')
img4.setAttribute('height', '200px');
img4.setAttribute('id', 'iCent');
dimgCard4.appendChild(img4);



let h54 = document.createElement("h5");
h54.setAttribute('id', 'h55')
h54.textContent = "Eos Luibustam";
dimgCard4.appendChild(h54);



let p14 = document.createElement("p");
p14.textContent = "Lorem, deren, tratraro, filede, nerada";
dimgCard4.appendChild(p14);

let prixVert4 = document.createElement("p");
prixVert4.setAttribute('class', 'prixVert');
prixVert4.innerHTML = "<strong>$12.95</strong>";
dimgCard4.appendChild(prixVert4);

// img5


let dimgCard5 = document.createElement("div");
dimgCard5.setAttribute('id', 'dimgCard');
dcard2.appendChild(dimgCard5);

let img5 = document.createElement("img");
img5.setAttribute('src', '../public/img/menu-item-5.png')
img5.setAttribute('height', '200px');
img5.setAttribute('id', 'iCent');
dimgCard5.appendChild(img5);


let h55 = document.createElement("h5");
h55.setAttribute('id', 'h55')
h55.textContent = "Eos Luibustam";
dimgCard5.appendChild(h55);



let p15 = document.createElement("p");
p15.textContent = "Lorem, deren, tratraro, filede, nerada";
dimgCard5.appendChild(p15);

let prixVert5 = document.createElement("p");
prixVert5.setAttribute('class', 'prixVert');
prixVert5.innerHTML = "<strong>$5.95</strong>";
dimgCard5.appendChild(prixVert5);

//img 6

let dimgCard6 = document.createElement("div");
dimgCard6.setAttribute('id', 'dimgCard');
dcard2.appendChild(dimgCard6);

let img6 = document.createElement("img");
img6.setAttribute('src', '../public/img/menu-item-6.png')
img6.setAttribute('height', '200px');
img6.setAttribute('id', 'iCent');
dimgCard6.appendChild(img6);



let h56 = document.createElement("h5");
h56.setAttribute('id', 'h55')
h56.textContent = "Laborio Direva";
dimgCard6.appendChild(h56);



let p16 = document.createElement("p");
p16.textContent = "Lorem, deren, tratraro, filede, nerada";
dimgCard6.appendChild(p16);

let prixVert6 = document.createElement("p");
prixVert6.setAttribute('class', 'prixVert');
prixVert6.innerHTML = "<strong>$9.95</strong>";
dimgCard6.appendChild(prixVert6);


s555.appendChild(s5);

// ---------------------------------------------
// Caroussel 1

let btcar1 = document.getElementById('btcar1');
let btcar2 = document.getElementById('btcar2');
let btcar3 = document.getElementById('btcar3');

let dcom = document.querySelector('.dcom');

btcar1.addEventListener('click', () => {
    dcom.style.transform = "translateX(0%)";
})
btcar2.addEventListener('click', () => {
    dcom.style.transform = "translateX(-1000px)";
})
btcar3.addEventListener('click', () => {
    dcom.style.transform = "translateX(-2000px)";
})

// Caroussel 2

let btcar11 = document.getElementById('btcar11');
let btcar22 = document.getElementById('btcar22');
let btcar33 = document.getElementById('btcar33');

let sousdcom2 = document.querySelector('.sousdcom2');

btcar11.addEventListener('click', () => {
    sousdcom2.style.transform = "translateX(0)";
})
btcar22.addEventListener('click', () => {
    sousdcom2.style.transform = "translateX(-530px)";
})
btcar33.addEventListener('click', () => {
    sousdcom2.style.transform = "translateX(-950px)";
})


let sousdcom22 = document.querySelector('.sousdcom22');



let btcar111 = document.getElementById('btcar111');
let btcar222 = document.getElementById('btcar222');
let btcar333 = document.getElementById('btcar333');
let btcar444 = document.getElementById('btcar444');
let btcar555 = document.getElementById('btcar555');
let btcar666 = document.getElementById('btcar666');
let btcar777 = document.getElementById('btcar777');
let btcar888 = document.getElementById('btcar888');


btcar111.addEventListener('click', () => {
    sousdcom22.style.transform = "translateX(0)";
})
btcar222.addEventListener('click', () => {
    sousdcom22.style.transform = "translateX(-300px)";
})
btcar333.addEventListener('click', () => {
    sousdcom22.style.transform = "translateX(-600px)";
})
btcar444.addEventListener('click', () => {
    sousdcom22.style.transform = "translateX(-900px)";
})
btcar555.addEventListener('click', () => {
    sousdcom22.style.transform = "translateX(-1200px)";
})
btcar666.addEventListener('click', () => {
    sousdcom22.style.transform = "translateX(-1500px)";
})
btcar777.addEventListener('click', () => {
    sousdcom22.style.transform = "translateX(-1800px)";
})
btcar888.addEventListener('click', () => {
    sousdcom22.style.transform = "translateX(-2100px)";
})


let section1 = document.getElementById("s1")
let section2 = document.getElementById("s2")
let section3 = document.getElementById("s3")
let section4 = document.getElementById("s4")
let section5 = document.getElementById("s5")
let section6 = document.getElementById("s6")
let section7 = document.getElementById("s7")
let section8 = document.getElementById("s8")
let section9 = document.getElementById("s9")
let section10 = document.getElementById("s10")
let section11 = document.getElementById("s11")




let navb = document.getElementById('secDiv')

let btDark = document.getElementById('dark');
let body = document.querySelector('body');

let divBl = document.getElementById('divTexte')

btDark.addEventListener('click', () => {
    navb.classList.toggle('noir');
    body.classList.toggle('noir');
    section1.classList.toggle('noir');
    section2.classList.toggle('noir');
    section3.classList.toggle('noir2');
    section4.classList.toggle('noir');
    section5.classList.toggle('noir');
    section6.classList.toggle('noir');
    section7.classList.toggle('noir');
    section8.classList.toggle('noir2');
    section9.classList.toggle('noir');
    section10.classList.toggle('noir');
    section11.classList.toggle('noir2');





})
let titreP = document.querySelectorAll('.hvr-underline-from-left');

titreP.forEach(element => {
    element.classList.toggle('tblanc');
});


//modal  --------------------------------------------------------------------------------------------


let btnOpenModal = document.getElementById("btnOpenModal");
let modal = document.getElementById("modal");
let close = document.getElementsByClassName("close")[0];

// Ouvrir le modal 

btnOpenModal.addEventListener('click',()=>{
    modal.style.display = "block";
})

// Fermer le modal sur la croix
close.addEventListener('click',()=>{
    modal.style.display = "none";

})




