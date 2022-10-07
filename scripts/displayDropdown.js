const btnIngredient = document.querySelector("#btn_ingredient");
const areaIngredient = document.querySelector(".grp_ingredient");

btnIngredient.addEventListener("click", displayAreaIngredient);

function displayAreaIngredient() {
    if (areaIngredient.classList.contains('display-none')) {
        areaIngredient.classList.remove("display-none");
        areaIngredient.classList.add("class", "display-flex");
    }
    else {
        areaIngredient.classList.remove("display-flex");
        areaIngredient.classList.add("class", "display-none");
    }
}

const btnMachine = document.querySelector("#btn_appareil");
const areaMachine = document.querySelector(".grp_appareil");

btnMachine.addEventListener("click", displayAreaMachine);

function displayAreaMachine() {
    if (areaMachine.classList.contains('display-none')) {
        areaMachine.classList.remove("display-none");
        areaMachine.classList.add("class", "display-flex");
    }
    else {
        areaMachine.classList.remove("display-flex");
        areaMachine.classList.add("class", "display-none");
    }
}

const btnUtensil = document.querySelector("#btn_ustensil");
const areaUtensil = document.querySelector(".grp_ustensil");

btnUtensil.addEventListener("click", displayAreaUtensil);

function displayAreaUtensil() {
    if (areaUtensil.classList.contains('display-none')) {
        areaUtensil.classList.remove("display-none");
        areaUtensil.classList.add("class", "display-flex");
    }
    else {
        areaUtensil.classList.remove("display-flex");
        areaUtensil.classList.add("class", "display-none");
    }
}