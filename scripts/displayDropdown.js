const btnIngredient = document.querySelector("#btn_ingredient");
const searchIngredient = document.querySelector("#inpt_ingr");
const areaIngredient = document.querySelector(".grp_ingredient");
const btnMachine = document.querySelector("#btn_appareil");
const searchMachine = document.querySelector("#inpt_appr");
const areaMachine = document.querySelector(".grp_appareil");
const btnUstensil = document.querySelector("#btn_ustensil");
const searchUstensil = document.querySelector("#inpt_ustensil");
const areaUstensil = document.querySelector(".grp_ustensil");

btnIngredient.addEventListener("click", displayAreaIngredient);
btnMachine.addEventListener("click", displayAreaMachine);
btnUstensil.addEventListener("click", displayAreaUstensil);

function displayAreaIngredient() {
    if (areaIngredient.classList.contains('display-none')) {
        areaIngredient.classList.replace("display-none", "display-flex");
        searchIngredient.classList.replace("display-none", "display-flex");
        areaMachine.classList.replace("display-flex", "display-none");
        searchMachine.classList.replace("display-flex", "display-none");
        areaUstensil.classList.replace("display-flex", "display-none");
        searchUstensil.classList.replace("display-flex", "display-none");
    }
    else {
        areaIngredient.classList.replace("display-flex", "display-none");
        searchIngredient.classList.replace("display-flex", "display-none");
    }
}

function displayAreaMachine() {
    if (areaMachine.classList.contains('display-none')) {
        areaIngredient.classList.replace("display-flex", "display-none");
        searchIngredient.classList.replace("display-flex", "display-none");
        areaUstensil.classList.replace("display-flex", "display-none");
        searchUstensil.classList.replace("display-flex", "display-none");
        areaMachine.classList.replace("display-none", "display-flex");
        searchMachine.classList.replace("display-none", "display-flex");
    }
    else {
        areaMachine.classList.replace("display-flex", "display-none");
        searchMachine.classList.replace("display-flex", "display-none");
    }
}

function displayAreaUstensil() {
    if (areaUstensil.classList.contains('display-none')) {
        areaIngredient.classList.replace("display-flex", "display-none");
        searchIngredient.classList.replace("display-flex", "display-none");
        areaUstensil.classList.replace("display-none", "display-flex");
        searchUstensil.classList.replace("display-none", "display-flex");
        areaMachine.classList.replace("display-flex", "display-none");
        searchMachine.classList.replace("display-flex", "display-none");
    }

    else {
        areaUstensil.classList.replace("display-flex", "display-none");
        searchUstensil.classList.replace("display-flex", "display-none");
    }
}