const btnIngredient = document.querySelector("#btn_ingredient");
const areaIngredient = document.querySelector(".grp_ingredient");
const btnMachine = document.querySelector("#btn_appareil");
const areaMachine = document.querySelector(".grp_appareil");
const btnUstensil = document.querySelector("#btn_ustensil");
const areaUstensil = document.querySelector(".grp_ustensil");

btnIngredient.addEventListener("click", displayAreaIngredient);
btnMachine.addEventListener("click", displayAreaMachine);
btnUstensil.addEventListener("click", displayAreaustensil);

// function displayAreaIngredient() {
//     if (areaIngredient.classList.contains('display-none')) {
//         if (areaMachine.classList.contains('display-flex') || areaUstensil.classList.contains('display-flex')) {
//             areaMachine.classList.remove("display-flex");
//             areaMachine.classList.add("class", "display-none");
//             areaUstensil.classList.remove("display-flex");
//             areaUstensil.classList.add("class", "display-none");
//             areaIngredient.classList.remove("display-none");
//             areaIngredient.classList.add("class", "display-flex");
//         }
//         else {
//             areaIngredient.classList.remove("display-none");
//             areaIngredient.classList.add("class", "display-flex");
//         }
//     }
//     else {
//         areaIngredient.classList.remove("display-flex");
//         areaIngredient.classList.add("class", "display-none");
//     }
// }

function displayAreaIngredient() {
    if (areaIngredient.classList.contains('display-none')) {
        areaIngredient.classList.remove("display-none");
        areaMachine.classList.remove("display-flex");
        areaUstensil.classList.remove("display-flex");
        areaIngredient.classList.add("class", "display-flex");
        areaMachine.classList.add("class", "display-none");
        areaUstensil.classList.add("class", "display-none");
    }
    else {
        areaIngredient.classList.remove("display-flex");
        areaIngredient.classList.add("class", "display-none");
    }
}

function displayAreaMachine() {
    if (areaMachine.classList.contains('display-none')) {
        if (areaIngredient.classList.contains('display-flex') || areaUstensil.classList.contains('display-flex')) {
            areaIngredient.classList.remove("display-flex");
            areaIngredient.classList.add("class", "display-none");
            areaUstensil.classList.remove("display-flex");
            areaUstensil.classList.add("class", "display-none");
            areaMachine.classList.remove("display-none");
            areaMachine.classList.add("class", "display-flex");
        }
        else {
            areaMachine.classList.remove("display-none");
            areaMachine.classList.add("class", "display-flex");
        }
    }
    else {
        areaMachine.classList.remove("display-flex");
        areaMachine.classList.add("class", "display-none");
    }
}

function displayAreaustensil() {
    if (areaUstensil.classList.contains('display-none')) {
        if (areaIngredient.classList.contains('display-flex') || areaMachine.classList.contains('display-flex')) {
            areaIngredient.classList.remove("display-flex");
            areaIngredient.classList.add("class", "display-none");
            areaMachine.classList.remove("display-flex");
            areaMachine.classList.add("class", "display-none");
            areaUstensil.classList.remove("display-none");
            areaUstensil.classList.add("class", "display-flex");
        }
        else {
            areaUstensil.classList.remove("display-none");
            areaUstensil.classList.add("class", "display-flex");
        }
    }
    else {
        areaUstensil.classList.remove("display-flex");
        areaUstensil.classList.add("class", "display-none");
    }
}