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
    recipes.forEach((recipe, index) => {
      let ifValueFind = false;
      //Checking on name & description
      if (ifValueFind === false) {
        if (recipe.name.toLowerCase().includes(valueInput) || recipe.description.toLowerCase().includes(valueInput)) {
          tabResults.push(index);
          ifValueFind = true;
        }
      }

      //Checking on ingredients
      if (ifValueFind === false) {
        recipe.ingredients.forEach((ingredients) => {
          if (ingredients.ingredient.toLowerCase().includes(valueInput)) {
            tabResults.push(index);
            ifValueFind = true;
          }
        })
      }
    })

    let articlesRecipes = document.querySelectorAll(".recipe-card article");

    //All the recipes goes hidden
    articlesRecipes.forEach((articleRecipe) => {
      articleRecipe.classList.remove("display-block");
      articleRecipe.classList.add("display-none");
    })

    //Then displaying the searched ones
    tabResults.forEach((result) => {
      articlesRecipes[result].classList.replace("display-none","display-block");
    })

    refreshGoodItems(tabResults);
  }

  else {
    recipes.forEach((recipe, index) => {
      tabResults.push(index);
    })

    document.querySelectorAll(".recipe-card article").forEach((article) => {
      article.classList.replace("display-none", "display-block");
    })

    document.querySelectorAll(".ingredient").forEach((ingredient) => {
      ingredient.classList.replace("display-none", "display-block");
    })

    document.querySelectorAll(".machine").forEach((machine) => {
      machine.classList.replace("display-none", "display-block");
    })

    document.querySelectorAll(".ustensil").forEach((ustensil) => {
      ustensil.classList.replace("display-none", "display-block");
    })
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
  ingredientsItems.forEach((ingredient) => {
    ingredient.classList.replace("display-block", "display-none");
  })

  //Displaying only ingredients who match the input search
  ingredientsItems.forEach((ingredient) => {  
    if(ingredient.textContent.toLowerCase().includes(inputUser)){
      ingredient.classList.replace("display-none", "display-block");
    }
  })
}

function machineMenuSearch(value) {
  //Input search for the machine
  let inputUser = value.target.value.trim().toLowerCase();

  //Hiding every machines
  machinesItems.forEach((machine) => {
    machine.classList.replace("display-block", "display-none");
  })

  //Displaying only machines who match the input search
  machinesItems.forEach((machine) => {  
    if(machine.textContent.toLowerCase().includes(inputUser)){
      machine.classList.replace("display-none", "display-block");
    }
  })
}

function ustensilMenuSearch(value) {
  //Input search for the ustensil
  let inputUser = value.target.value.trim().toLowerCase();

  //Hiding every ustensils
  ustensilsItems.forEach((ustensil) => {
    ustensil.classList.replace("display-block", "display-none");
  })

  //Displaying only ustensils who match the input search
  ustensilsItems.forEach((ustensil) => {  
    if(ustensil.textContent.toLowerCase().includes(inputUser)){
      ustensil.classList.replace("display-none", "display-block");
    }
  })
}

let tabIngredients = new Set();
let tabMachines = new Set();
let tabUstensils = new Set();

export function getSelectedTags() {
  //Getting selected Tags and add them to the right tab
  globalTag.forEach((tag) => {
    if (tag.classList.contains("display-block")) {
      if (tag.classList.contains("ingredient-tag")) {
        tabIngredients.add(tag.firstElementChild.textContent);
      }
      else if (tag.classList.contains("machine-tag")) {
        tabMachines.add(tag.firstElementChild.textContent);
      }
      else if (tag.classList.contains("ustensil-tag")){
        tabUstensils.add(tag.firstElementChild.textContent);
      }
    }
  })
  displayGoodRecipe(inputUser, recipes);
}

export function deleteSelectedTag() {
  //Getting all the selected tags and removing the one who got clicked on
  globalTag.forEach((tag) => {
    if (tag.classList.contains("display-block")) {
      if (tag.classList.contains("ingredient-tag")) {
        tabIngredients.delete(tag.firstElementChild.textContent);
      }
      else if (tag.classList.contains("machine-tag")) {
        tabMachines.delete(tag.firstElementChild.textContent);
      }
      else if (tag.classList.contains("ustensil-tag")) {
        tabUstensils.delete(tag.firstElementChild.textContent);
      }
    }
  })
  displayGoodRecipe(inputUser, recipes);
}

function refreshGoodItems(indexOfGoodRecipes) {
  //Ingredients part

  //Clearing the ingredients tab
  ingredientsFromSearchedRecipe.clear();

  //Then adding all the ingredients to the tab from the primal search
  indexOfGoodRecipes.forEach((goodRecipe) => {
    recipes[goodRecipe].ingredients.forEach((ingredients) => {
      ingredientsFromSearchedRecipe.add(ingredients.ingredient);
    })
  })

  //Hiding the ingredients who aren't in the tab from the primal search
  ingredientsItems.forEach((ingredient) => {
    ingredient.classList.replace("display-block", "display-none");
  })

  //Then displaying only the ingredients from the searched recipe
  Array.from(ingredientsFromSearchedRecipe).forEach((ingredient) => {
    ingredientsItems.forEach((item, index) => {
      if (ingredientsItemsLinks[index].innerHTML === ingredient) {
        item.classList.replace("display-none", "display-block");
      }
    })
  })

  //Machine part

  //Clearing the machines tab
  machinesFromSearchedRecipe.clear();

  //Then adding all the machines to the tab from the primal search
  indexOfGoodRecipes.forEach((goodRecipe) => {
    machinesFromSearchedRecipe.add(recipes[goodRecipe].appliance);
  })

  //Hiding the machines who aren't in the tab from the primal search
  machinesItems.forEach((machine) => {
    machine.classList.replace("display-block", "display-none");
  })

  //Then displaying only the machines from the searched recipe
  Array.from(machinesFromSearchedRecipe).forEach((machine) => {
    machinesItems.forEach((item, index) => {
      if (machinesItemsLinks[index].innerHTML === machine) {
        item.classList.replace("display-none", "display-block");
      }
    })
  })

  //Ustensils part

  //Clearing the ustensils tab
  ustensilsFromSearchedRecipe.clear();

  //Then adding all the ustensils to the tab from the primal search
  indexOfGoodRecipes.forEach((goodRecipe) => {
    recipes[goodRecipe].ustensils.forEach((ustensils) => {
      ustensilsFromSearchedRecipe.add(ustensils);
    })
  })

  //Hiding the ustensils who aren't in the tab from the primal search
  ustensilsItems.forEach((ustensil) => {
    ustensil.classList.replace("display-block", "display-none");
  })

  //Then displaying only the ustensils from the searched recipe
  Array.from(ustensilsFromSearchedRecipe).forEach((ustensil) => {
    ustensilsItems.forEach((item, index) => {
      if (ustensilsItemsLinks[index].innerHTML === ustensil) {
        item.classList.replace("display-none", "display-block");
      }
    })
  })
}

function filterForItems(activeRecipes, typeOfFilter, selectedTypeOfItem) {
  if (selectedTypeOfItem.size !== 0) {
    let badRecipes = [];
    
    //Checking on every recipe
    activeRecipes.forEach((activeRecipe) => {
      const recipe = recipes[activeRecipe];
      let control = true;
      let activeFilter = "";

      //Checking every type of tags selected
      Array.from(selectedTypeOfItem).forEach((selectedItem) => {
        const selectedActiveItem = selectedItem;

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
      })
      //Recipe to hide on the dropdown menu
      if (control === false) {
        document.getElementById(recipe.id).classList.remove("display-block");
        document.getElementById(recipe.id).classList.add("display-none");
        badRecipes.push(recipe.id - 1);
      }
    })

    //Delete wrong recipe from the tab for the dropdown menu
    let varTab = [];
    activeRecipes.forEach((activeRecipe) => {
      if(!badRecipes.includes(activeRecipe)){
        varTab.push(activeRecipe);
      }
    })
    activeRecipes = varTab;
    
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