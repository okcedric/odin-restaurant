import './main.css';
import create from './manipulate/create';
import append from './manipulate/append';
import header from './header';
import menu from './menu';
import contact from './contact';
import status from './page-status';
import switchPage from './switch';

let content = document.querySelector('#content');

let home= create('div','','hero');
let overtitle = create('h2','When the night hungers the awaken souls,');
let title = create('h1','Leila delivers fresh burgers in Yourtown!');
let cta = create('button','see the menu','main');
let main = create('main');
append(home,overtitle,title,cta);
append(content,header,main);

switchPage(home);

let navlinks = document.querySelectorAll('.navlink');
navlinks.forEach(function(link){
    link.addEventListener('click',function(){
        let content = link.textContent;
        if (content == 'home') switchPage(home);
        if (content == 'menu') switchPage(menu);
        if (content == 'contact') switchPage(contact);
    });
})