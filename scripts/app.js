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
let globalTag = document.querySelectorAll(".tag");

export function displayGoodRecipe(valueInput, recipes) {
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

    refreshGoodItems(tabResults);
  }

  else {
    for (let i = 0; i < recipes.length; i++) {
      tabResults.push(i);
    }
    for (let i = 0; i < document.querySelectorAll(".recipe-card article").length; i++) {
      document.querySelectorAll(".recipe-card article")[i].classList.replace("display-none", "display-block");
    }
    for(let i = 0; i < document.querySelectorAll(".ingredient").length; i++) {
      document.querySelectorAll(".ingredient")[i].classList.replace("display-none", "display-block");
    }
    for(let i = 0; i < document.querySelectorAll(".machine").length; i++) {
      document.querySelectorAll(".machine")[i].classList.replace("display-none", "display-block");
    }
    for(let i = 0; i < document.querySelectorAll(".ustensil").length; i++) {
      document.querySelectorAll(".ustensil")[i].classList.replace("display-none", "display-block");
    }
  }

  if (tabResults.length === 0) {
    document.querySelector("#messageRecipeNotFound").classList.replace("display-none", "display-flex");
  }
  else {
    document.querySelector("#messageRecipeNotFound").classList.replace("display-flex", "display-none");
  }

  filterWithTagsOn(tabResults);
  return tabResults;
}

const searchIngredient = document.querySelector("#inpt_ingr");
const searchMachine = document.querySelector("#inpt_appr");
const searchUstensil = document.querySelector("#inpt_ustensil");
searchIngredient.addEventListener("input", ingredientMenuSearch);
searchMachine.addEventListener("input", machineMenuSearch);
searchUstensil.addEventListener("input", ustensilMenuSearch);

function ingredientMenuSearch(value) {
  //Input search for the ingredient
  let inputUser = value.target.value.trim().toLowerCase();

  //Hiding every ingredients
  for (let i = 0; i < ingredientsItems.length; i++) {
    ingredientsItems[i].classList.replace("display-block", "display-none");
  }

  //Displaying only ingredients who match the input search
  for (let i = 0; i < ingredientsItems.length; i++) {
    if (ingredientsItems[i].firstChild.textContent.toLowerCase().includes(inputUser)) {
      ingredientsItems[i].classList.replace("display-none", "display-block");
    }
  }
}

function machineMenuSearch(value) {
  //Input search for the machine
  let inputUser = value.target.value.trim().toLowerCase();

  //Hiding every machines
  for (let i = 0; i < machinesItems.length; i++) {
    machinesItems[i].classList.replace("display-block", "display-none");
  }

  //Displaying only machines who match the input search
  for (let i = 0; i < machinesItems.length; i++) {
    if (machinesItems[i].firstChild.textContent.toLowerCase().includes(inputUser)) {
      machinesItems[i].classList.replace("display-none", "display-block");
    }
  }
}

function ustensilMenuSearch(value) {
  //Input search for the ustensil
  let inputUser = value.target.value.trim().toLowerCase();

  //Hiding every ustensils
  for (let i = 0; i < ustensilsItems.length; i++) {
    ustensilsItems[i].classList.replace("display-block", "display-none");
  }

  //Displaying only ustensils who match the input search
  for (let i = 0; i < ustensilsItems.length; i++) {
    if (ustensilsItems[i].firstChild.textContent.toLowerCase().includes(inputUser)) {
      ustensilsItems[i].classList.replace("display-none", "display-block");
    }
  }
}

let tabIngredients = new Set();
let tabMachines = new Set();
let tabUstensils = new Set();

export function getSelectedTags() {
  //Getting selected Tags and add them to the right tab
  for (let i = 0; i < globalTag.length; i++) {
    if (globalTag[i].classList.contains("display-block")) {
      if (globalTag[i].classList.contains("ingredient-tag")) {
        tabIngredients.add(globalTag[i].firstElementChild.textContent);
      }
      else if (globalTag[i].classList.contains("machine-tag")) {
        tabMachines.add(globalTag[i].firstElementChild.textContent);
      }
      else if (globalTag[i].classList.contains("ustensil-tag")){
        tabUstensils.add(globalTag[i].firstElementChild.textContent);
      }
    }
  }
  displayGoodRecipe(inputUser, recipes);
}

export function deleteSelectedTag() {
  //Getting all the selected tags and removing the one who got clicked on
  for (let i = 0; i < globalTag.length; i++) {
    if (globalTag[i].classList.contains("display-block")) {
      if (globalTag[i].classList.contains("ingredient-tag")) {
        tabIngredients.delete(globalTag[i].firstElementChild.textContent);
      }
      else if (globalTag[i].classList.contains("machine-tag")) {
        tabMachines.delete(globalTag[i].firstElementChild.textContent);
      }
      else if (globalTag[i].classList.contains("ustensil-tag")) {
        tabUstensils.delete(globalTag[i].firstElementChild.textContent);
      }
    }
  }
  displayGoodRecipe(inputUser, recipes);
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

function filterForItems(activeRecipes, typeOfFilter, selectedTypeOfItem) {
  if (selectedTypeOfItem.size !== 0) {
    let badRecipes = [];
    
    //Checking on every recipe
    for(let i = 0; i < activeRecipes.length; i++) {
      const recipe = recipes[activeRecipes[i]];
      let control = true;
      let activeFilter = "";

      //Checking every type of tags selected
      for(let y = 0; y < Array.from(selectedTypeOfItem).length; y++) {
        const selectedActiveItem = Array.from(selectedTypeOfItem)[y];

        if (typeOfFilter === "ingredient") {
          activeFilter = recipe.ingredients.reduce((accumulator, currentValue) => {
              return accumulator + currentValue.ingredient;
          },"");
        } 
        else if (typeOfFilter === "machine") {
          activeFilter += recipe.appliance;
        } 
        else if (typeOfFilter === "ustensil") {
          for(let y = 0; y < recipe.ustensils.length; y++) {
            activeFilter += recipe.ustensils[y];
          }
        }

        if (!activeFilter.includes(selectedActiveItem)) {
          //If the tag isn't included then the control is set to false
          control = false;
        }
        activeFilter = "";
      };
      //Recipe to hide on the dropdown menu
      if (control === false) {
        document.getElementById(recipe.id).classList.remove("display-block");
        document.getElementById(recipe.id).classList.add("display-none");
        badRecipes.push(recipe.id - 1);
      }
    };

    //Delete wrong recipe from the tab for the dropdown menu
    for (let i = 0; i < activeRecipes.length; i++) {
      for (let z = 0; z < badRecipes.length; z++) {
        if (activeRecipes[i] === badRecipes[z]) {
          activeRecipes.splice(i, 1);
        }
      }
    }
    if (activeRecipes.length === 0) {
      document.querySelector("#messageRecipeNotFound").classList.replace("display-none", "display-flex");
    }
    else {
      document.querySelector("#messageRecipeNotFound").classList.replace("display-flex", "display-none");
    }
  }
  return activeRecipes;
}

function filterWithTagsOn(activeRecipes) {
  activeRecipes = filterForItems(activeRecipes, "ingredient", tabIngredients);
  activeRecipes = filterForItems(activeRecipes, "machine", tabMachines);
  activeRecipes = filterForItems(activeRecipes, "ustensil", tabUstensils);

  refreshGoodItems(activeRecipes);
}