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
        //console.log(intIngredient);
        for(let y = 0; y <= ingredientsTag.length - 1; y++) {
            if (intIngredient === y) {
                if (ingredientsTag[y].classList.contains('display-none')) {
                    ingredientsTag[y].classList.remove('display-none');
                    ingredientsTag[y].classList.add('display-block');
                    //ingredientsTag[y].firstElementChild.setAttribute('class','ingredient selected');
                    //filterByTags();
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
        //console.log(intMachine);
        for(let y = 0; y <= machinesTag.length - 1; y++) {
            if (intMachine === y) {
                if (machinesTag[y].classList.contains('display-none')) {
                    machinesTag[y].classList.remove('display-none');
                    machinesTag[y].classList.add('display-block');
                    // machinesTag[y].firstElementChild.setAttribute('class','machine selected');
                    // filterByTags();
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
        //console.log(intUstensil);
        for(let y = 0; y <= ustensilsTag.length - 1; y++) {
            if (intUstensil === y) {
                if (ustensilsTag[y].classList.contains('display-none')) {
                    ustensilsTag[y].classList.remove('display-none');
                    ustensilsTag[y].classList.add('display-block');
                    // ustensilsTag[y].firstElementChild.setAttribute('class','ustensils selected');
                    // filterByTags();
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

// function filterByTags() {
//     let allRecipes = recipes;
//     let filteredRecipes = [];
//     const selectedSpan = document.querySelectorAll('.selected');
//     console.log(selectedSpan);
//     if(selectedSpan.length !== 0) {
//         selectedSpan.forEach(tag => {
//             let recipeFilter = [];
//             if(tag.classList.contains('ingredient')) {
//                 allRecipes.forEach(recipe => {
//                     recipe.ingredients.forEach(ingredient => {
//                         if(ingredient.ingredient.toLowerCase().includes(tag.innerText.toLowerCase())) {
//                             recipeFilter.push(recipe);
//                             console.log(recipeFilter);
//                             filteredRecipes.push(recipeFilter);
//                             return filteredRecipes;
//                         }
//                     })
//                 })
//             }
//             else if(tag.classList.contains('machine')) {
//                 allRecipes.forEach(recipe => {
//                     if(recipe.appliance.toLowerCase().includes(tag.innerText.toLowerCase())) {
//                         recipeFilter.push(recipe);
//                         console.log(recipeFilter);
//                         filteredRecipes.push(recipeFilter);
//                         return filteredRecipes;
//                     }
//                 })
//             }
//         })
//     }
//     console.log(filteredRecipes);
//     displayGoodRecipe("" , filteredRecipes);
// }
