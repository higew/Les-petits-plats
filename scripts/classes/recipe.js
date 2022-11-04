export class Recipe {
  constructor(data) {
    this.appliance = data.appliance;
    this.description = data.description;
    this.id = data.id;
    this.ingredients = data.ingredients;
    this.name = data.name;
    this.servings = data.servings;
    this.time = data.time;
    this.ustensils = data.ustensils;
  }

  addHtmlOfRecipe() {
    let ingredientsHtml = "";
    this.ingredients.forEach((ingredient) => {
      let quantity = "";
      let unit = "";

      //Checking every ingredient for different display
      if (ingredient.quantity !== undefined) {
        quantity = `: ${ingredient.quantity}`;
      }

      if (ingredient.unit !== undefined) {
        unit = ingredient.unit;
      }

      ingredientsHtml += `<li><strong>${ingredient.ingredient}</strong> ${quantity} ${unit}</li>`;
    });

    //Creating the HTML for the recipe
    let recipeCard = document.querySelector(".recipe-card");
    recipeCard.innerHTML += `<article id="${this.id}" class="col-md-4 m-3">
          <div class="place-image-recipe"></div>
          <div class="title-time-recipe">
              <p class="title-recipe">${this.name}</p>
              <i class="fa-regular fa-clock"></i>
              <span class="time">${this.time} min</span>
          </div>
          <div class="ingredients-description-recipe">
              <ul class="list-ingredients mr-2">
                  ${ingredientsHtml}
              </ul>
              <p class="description-recipe" title="${this.description}">${this.description}</p>
          </div>
      </article>`;
  }

  static addHtmlSecondaryMenuElements(domMenu, listOfElements, typeOfMenu) {
    listOfElements.forEach((element) => {
      domMenu.innerHTML += `<li class="${typeOfMenu} display-block"><a href="#">${element}</a></li>`;
    });
  }

  static addHtmlOfTags(domElement, listOfElements, typeOfTag) {
    listOfElements.forEach((element) => {
      domElement.innerHTML += `<div class="tag ${typeOfTag} display-none">
                <span>${element}</span>
                <button class="delete-tag-btn">
                    <i class="fa-regular fa-circle-xmark"></i>
                </button>
                </div>`;
    });
  }
}