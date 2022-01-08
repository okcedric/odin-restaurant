import create from "./manipulate/create";
import logo from "./logo.png";
import append from "./manipulate/append";

let header = create('header',"");
const myLogo = new Image();
myLogo.src = logo;
myLogo.classList.add('logo');
let menu = create('ul',"");
let navlink1 = create('li', 'Home', 'navlink');
let navlink2 = create('li', 'Menu', 'navlink');
let navlink3 = create('li', 'Contact', 'navlink');
append(menu,navlink1,navlink2,navlink3);
append(header,myLogo,menu);


export default header ;