import './main.css';
import create from './manipulate/create';
import append from './manipulate/append';
import header from './header';
import menu from './menu';
import burgers from './burger';

let content = document.querySelector('#content');

let hero = create('div','','hero');
let overtitle = create('h2','When the night hungers the awaken souls,');
let title = create('h1','Leila delivers fresh burgers in Yourtown!');
let cta = create('button','see the menu','main');
console.table(burgers);

append(hero,overtitle,title,cta);
append(content,header,menu);
