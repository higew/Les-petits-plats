import { recipes } from "../data/recipes.js";
import { Recipe } from "./classes/recipe.js";

let collectionOfIngredients = new Set();
let tabOfIngredients = [];
let collectionOfMachines = new Set();
let tabOfMachines = [];
let collectionOfUtensils = new Set();
let tabOfUtensils = [];

recipes.forEach((recipe) => {
  const objRecipe = new Recipe(recipe);
  objRecipe.addHtmlOfRecipe();

  recipe.ingredients.forEach((ingredient) => {
    collectionOfIngredients.add(ingredient.ingredient);
  });
  tabOfIngredients = Array.from(collectionOfIngredients);

  collectionOfMachines.add(recipe.appliance);
  tabOfMachines = Array.from(collectionOfMachines);

  recipe.ustensils.forEach((ustensil) => {
    collectionOfUtensils.add(ustensil);
  });
  tabOfUtensils = Array.from(collectionOfUtensils);
});

const ingredientsMenu = document.querySelector("#ingredients-menu-items");
Recipe.addHtmlSecondaryMenuElements(ingredientsMenu, tabOfIngredients, "ingredient");

const machinesMenu = document.querySelector("#machines-menu-items");
Recipe.addHtmlSecondaryMenuElements(machinesMenu, tabOfMachines, "machine");

const utensilsMenu = document.querySelector("#utensils-menu-items");
Recipe.addHtmlSecondaryMenuElements(utensilsMenu, tabOfUtensils, "utensil");

const tagsContainer = document.querySelector(".tags-container");
Recipe.addHtmlOfTags(tagsContainer, tabOfIngredients, "ingredient-tag");
Recipe.addHtmlOfTags(tagsContainer, tabOfMachines, "machine-tag");
Recipe.addHtmlOfTags(tagsContainer, tabOfUtensils, "utensil-tag");