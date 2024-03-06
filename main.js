init();

function init() {
    gombokLetrehoz();
    const btnLISTA = document.querySelectorAll(".szamok button");
    for (let i = 0; i < btnLISTA.length; i++) {
        btnLISTA[i].addEventListener("click", szamKiir);
    }

}

function szamKiir(event) {
    // Eseménykezelő
    const SZAMOLOELEM = document.querySelector(".kijelzo .kifejezes");
    SZAMOLOELEM.innerHTML += event.target.innerHTML;
    // console.log(event.target)
}

function gombokLetrehoz(){
    const ELEM = document.getElementsByClassName("szamok");
    for (let i = 0; i < 10; i++) {
        let sor = `
        <button id=\"szam${i}\">${i}</button>
        `;
        ELEM[0].innerHTML += sor;
    }
}
