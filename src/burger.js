class Burger{
    constructor(title, price, ingredients) {
        this.title = title,
        this.price = price,
        this.ingredients = ingredients;
    }
}


let burger1= new Burger('Cheese Burger', 7, ['buns','1 grounded beef steak patty', 'cheddar', 'onions', ' pickles', 'ketchup']);
let burger2= new Burger('Vegan Burger', 5, ['buns','1 falafel steak', 'onions', ' pickles', 'ketchup']);
let burger3= new Burger('Double Cheese Burger', 11, [' buns','2 grounded beef steak', 'cheddar', 'onions', ' pickles', 'ketchup']);


let burgers = [burger1,burger2,burger3];

export default burgers;