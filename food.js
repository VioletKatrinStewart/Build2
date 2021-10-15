export const foods = [
    { id: 1, name: 'apple', type: 'fruit', img: './assets/apple.png' },
    { id: 2, name: 'avocado', type: 'fruit', img: './assets/avocado.png' },
    { id: 3, name: 'banana', type: 'fruit', img: './assets/banana.png' },
    { id: 4, name: 'broccoli', type: 'vegetable', img: './assets/broccoli.png' },
    { id: 5, name: 'croissant', type: 'pastry', img: './assets/croissant.png' },
    { id: 6, name: 'eggs', type: 'dairy', img: './assets/eggs.png' },
    { id: 7, name: 'fries', type: 'fast food', img: './assets/fries.png' },
    { id: 8, name: 'hamburger', type: 'fast food', img: './assets/hamburger.png' },
    { id: 9, name: 'lemon', type: 'fruit', img: './assets/lemon.png' },
    { id: 10, name: 'pizza', type: 'fast food', img: './assets/pizza.png' },
    { id: 11, name: 'taco', type: 'fast food', img: './assets/taco.png' }
];


export function renderFood(food) {
    const itemCard = document.createElement('ul');
    itemCard.classList.add('food-card');

    const itemName = document.createElement('li');
    itemName.textContent = food.name;

    const itemImg = document.createElement('img');
    itemImg.src = food.img;

    itemCard.append(itemImg, itemName);
    return itemCard;
}

