import create from './manipulate/create';
import append from "./manipulate/append";
import burgers from './burger';
import burgerPhoto from './burger-photo.png';

let page = create('section',"",'page');
let menu = create('div','','menu');
let heroHalf = create('div','','hero-half');
let title = create('h1',"Our menu");

heroHalf.append(title);
append(page,heroHalf,menu);
burgers.forEach(function(burger){
    let card = create('div','','card');
    let image = new Image;
    image.src = burgerPhoto;
    let title = create('h3',burger.title,'title');
    let price = create('div',`£${burger.price}`,'price');
    let ingredients = create('div',burger.ingredients.join(', '),'ingredients');
    append(card,image,title,price,ingredients);
    append(menu,card);
})

export default page