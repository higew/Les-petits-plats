import { getSelectedTags, deleteSelectedTag } from "../scripts/app.js";

const ingredientsLi = document.querySelectorAll('.ingredient a');
const machinesLi = document.querySelectorAll('.machine a');
const ustensilsLi = document.querySelectorAll('.ustensil a');
const ingredientsTag = document.querySelectorAll('.ingredient-tag');
const machinesTag = document.querySelectorAll('.machine-tag');
const ustensilsTag = document.querySelectorAll('.ustensil-tag');
const deleteTag = document.querySelectorAll('.delete-tag-btn');

//Delete selected tag
for(let i = 0; i <= deleteTag.length - 1; i++) {
    deleteTag[i].addEventListener("click", (event) => {
        event.preventDefault();
        deleteSelectedTag();
        let parentDiv = deleteTag[i].closest('div');
        parentDiv.classList.remove('display-block');
        parentDiv.classList.add('display-none');
    })
}


//Tag display in container for ingredients
for(let i = 0; i <= ingredientsLi.length - 1; i++) {
    ingredientsLi[i].addEventListener("click", (event) => {
        event.preventDefault();
        let intIngredient = i;
        for(let y = 0; y <= ingredientsTag.length - 1; y++) {
            if (intIngredient === y) {
                if (ingredientsTag[y].classList.contains('display-none')) {
                    ingredientsTag[y].classList.remove('display-none');
                    ingredientsTag[y].classList.add('display-block');
                    getSelectedTags();
                }
                else {
                    ingredientsTag[y].firstElementChild.classList.remove('selected');
                    ingredientsTag[y].classList.remove('display-block');
                    ingredientsTag[y].classList.add('display-none');
                    
                }
            }
        }
    });
}

//Tag display in container for machines
for(let i = 0; i <= machinesLi.length - 1; i++) {
    machinesLi[i].addEventListener("click", (event) => {
        event.preventDefault();
        let intMachine = i;
        for(let y = 0; y <= machinesTag.length - 1; y++) {
            if (intMachine === y) {
                if (machinesTag[y].classList.contains('display-none')) {
                    machinesTag[y].classList.remove('display-none');
                    machinesTag[y].classList.add('display-block');
                    getSelectedTags();
                }
                else {
                    machinesTag[y].firstElementChild.classList.remove('selected');
                    machinesTag[y].classList.remove('display-block');
                    machinesTag[y].classList.add('display-none');
                }
            }
        }
    });
}

//Tag display in container for ustensils
for(let i = 0; i <= ustensilsLi.length - 1; i++) {
    ustensilsLi[i].addEventListener("click", (event) => {
        event.preventDefault();
        let intUstensil = i;
        for(let y = 0; y <= ustensilsTag.length - 1; y++) {
            if (intUstensil === y) {
                if (ustensilsTag[y].classList.contains('display-none')) {
                    ustensilsTag[y].classList.remove('display-none');
                    ustensilsTag[y].classList.add('display-block');
                    getSelectedTags();
                }
                else {
                    ustensilsTag[y].firstElementChild.classList.remove('selected');
                    ustensilsTag[y].classList.remove('display-block');
                    ustensilsTag[y].classList.add('display-none');
                }
            }
        }
    });
}