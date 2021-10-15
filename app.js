import { renderFood } from './food.js';
import { foods } from './food.js';
    
const foodList = document.getElementById('food-list');

for (let food of foods) {
    const foodCard = renderFood(food);
    foodList.append(foodCard);
}

