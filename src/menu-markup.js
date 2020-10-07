import foodCards from "./menu.json";
import foodServiceTemplate from "./food-service.hbs";

const menuGallery = document.querySelector("ul.js-menu");

function createFoodServiceMarkup(foodCards) {
    return foodServiceTemplate(foodCards);
};

const cardsMarkup = createFoodServiceMarkup(foodCards);

menuGallery.insertAdjacentHTML("beforeend", cardsMarkup);