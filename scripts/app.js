import { recipes } from "../data/recipes.js";

const mainSearchInput = document.querySelector("#input_recherche");

mainSearchInput.addEventListener("input", searchSortRecipes);
let inputUser = undefined;

function searchSortRecipes(e) {
  inputUser = e.target.value;
  displayGoodRecipe(inputUser.trim().toLowerCase(), recipes);
}

function displayGoodRecipe(valueInput, recipes) {
  let tabResults = [];

  if (valueInput !== undefined && valueInput.length > 2) {
    for (let i = 0; i < recipes.length; i++) {
      let ifValueFind = false;
      //Checking on name & description
      if (ifValueFind === false) {
        if (recipes[i].name.toLowerCase().includes(valueInput) || recipes[i].description.toLowerCase().includes(valueInput)) {
          tabResults.push(i);
          ifValueFind = true;
        }
      }

      //Checking on ingredients
      if (ifValueFind === false) {
        for (let j = 0; j < recipes[i].ingredients.length; j++) {
          if (recipes[i].ingredients[j].ingredient.toLowerCase().includes(valueInput)) {
            tabResults.push(i);
            ifValueFind = true;
          }
        }
      }
    }

    let articlesRecipes = document.querySelectorAll(".recipe-card article");

    //All the recipes goes hidden
    for (let i = 0; i < articlesRecipes.length; i++) {
      articlesRecipes[i].classList.remove("display-block");
      articlesRecipes[i].classList.add("class", "display-none");
    }

    //Then displaying the searched ones
    for (let i = 0; i < tabResults.length; i++) {
      articlesRecipes[tabResults[i]].classList.replace("display-none","display-block");
    }
  }
  else {
    for (let i = 0; i < recipes.length; i++) {
      tabResults.push(i);
    }
    for (let i = 0; i < document.querySelectorAll(".recipe-card article").length; i++) {
      document.querySelectorAll(".recipe-card article")[i].classList.remove("display-none");
      document.querySelectorAll(".recipe-card article")[i].classList.add("display-block");
    }
  }

  return tabResults;
}