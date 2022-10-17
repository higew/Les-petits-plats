import { recipes } from "../data/recipes.js";

const mainSearchInput = document.querySelector("#input-search");

mainSearchInput.addEventListener("input", searchSortRecipes);
let inputUser = undefined;

function searchSortRecipes(e) {
  inputUser = e.target.value;
  displayGoodRecipe(inputUser.trim().toLowerCase(), recipes);
}

let ingredientsFromSearchedRecipe = new Set();
let machinesFromSearchedRecipe = new Set();
let ustensilsFromSearchedRecipe = new Set();

let ingredientsItems = document.querySelectorAll(".ingredient");
let machinesItems = document.querySelectorAll(".machine");
let ustensilsItems = document.querySelectorAll(".ustensil");
let ingredientsItemsLinks = document.querySelectorAll(".ingredient a");
let machinesItemsLinks = document.querySelectorAll(".machine a");
let ustensilsItemsLinks = document.querySelectorAll(".ustensil a");

function displayGoodRecipe(valueInput, recipes) {
  let tabResults = [];
  //let tabIngredients = [];

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
            //tabIngredients.push(j);
            //console.log(tabIngredients[j]);
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
    refreshGoodItems(tabResults);
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

function refreshGoodItems(indexOfGoodRecipes) {
  //Ingredients part

  //Clearing the ingredients tab
  ingredientsFromSearchedRecipe.clear();

  //Then adding all the ingredients to the tab from the primal search
  for(let i = 0; i < indexOfGoodRecipes.length; i++) {
    for(let y = 0; y < recipes[indexOfGoodRecipes[i]].ingredients.length; y++) {
      ingredientsFromSearchedRecipe.add(recipes[indexOfGoodRecipes[i]].ingredients[y].ingredient);
    }
  }

  //Hiding the ingredients who aren't in the tab from the primal search
  for(let i = 0; i < ingredientsItems.length; i++) {
    ingredientsItems[i].classList.replace("display-block", "display-none");
  };

  //Then displaying only the ingredients from the searched recipe
  for (let i = 0; i < Array.from(ingredientsFromSearchedRecipe).length; i++) {
    for(let y = 0; y < ingredientsItemsLinks.length; y++) {
      if (ingredientsItemsLinks[y].innerHTML === Array.from(ingredientsFromSearchedRecipe)[i]) {
        ingredientsItems[y].classList.replace("display-none", "display-block");
      }
    }
  }

  //Machine part

  //Clearing the machines tab
  machinesFromSearchedRecipe.clear();

  //Then adding all the machines to the tab from the primal search
  for(let i = 0; i < indexOfGoodRecipes.length; i++) {
    machinesFromSearchedRecipe.add(recipes[indexOfGoodRecipes[i]].appliance);
  }

  //Hiding the machines who aren't in the tab from the primal search
  for(let i = 0; i < machinesItems.length; i++) {
    machinesItems[i].classList.replace("display-block", "display-none");
  };

  //Then displaying only the machines from the searched recipe
  for (let i = 0; i < Array.from(machinesFromSearchedRecipe).length; i++) {
    for(let y = 0; y < machinesItemsLinks.length; y++) {
      if (machinesItemsLinks[y].innerHTML === Array.from(machinesFromSearchedRecipe)[i]) {
        machinesItems[y].classList.replace("display-none", "display-block");
      }
    }
  }

  //Ustensils part

  //Clearing the ustensils tab
  ustensilsFromSearchedRecipe.clear();

  //Then adding all the ustensils to the tab from the primal search
  for(let i = 0; i < indexOfGoodRecipes.length; i++) {
    for(let y = 0; y < recipes[indexOfGoodRecipes[i]].ustensils.length; y++) {
      ustensilsFromSearchedRecipe.add(recipes[indexOfGoodRecipes[i]].ustensils[y]);
    }
  }

  //Hiding the ustensils who aren't in the tab from the primal search
  for(let i = 0; i < ustensilsItems.length; i++) {
    ustensilsItems[i].classList.replace("display-block", "display-none");
  };

  //Then displaying only the ustensils from the searched recipe
  for (let i = 0; i < Array.from(ustensilsFromSearchedRecipe).length; i++) {
    for(let y = 0; y < ustensilsItemsLinks.length; y++) {
      if (ustensilsItemsLinks[y].innerHTML === Array.from(ustensilsFromSearchedRecipe)[i]) {
        ustensilsItems[y].classList.replace("display-none", "display-block");
      }
    }
  }
}