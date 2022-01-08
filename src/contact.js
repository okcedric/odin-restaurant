import create from './manipulate/create';
import append from "./manipulate/append";
import phonePicture from './phone.png';
import uberPicture from './uber.png';
import whatsappPicture from './whatsapp.png';

let page = create('section', "", 'page');
let heroHalf = create('div', '', 'hero-half');
let title = create('h1', "Place your order");
heroHalf.append(title);


let container = create('div','','container')




let uberCard = create('div','','card');
let uberImage = new Image;
uberImage.src = uberPicture;
let uberTitle = create('h3','Uber Eats');
let uberDetail = create('p','Leila Burger','details');
let uberButton = create('button','order','secondary'); 

let phoneCard = create('div','','card');
let phoneImage = new Image;
phoneImage.src = phonePicture;
let phoneTitle = create('h3','Téléphone');
let phoneDetail = create('p','+331 123 123 12','details');
let phoneButton = create('button','order','secondary');  

let whatsappCard = create('div','','card');
let whatsappImage = new Image;
whatsappImage.src = whatsappPicture;
let whatsappTitle = create('h3','WhatApp');
let whatsappDetail = create('p','+331 123 123 12','details');
let whatsappButton = create('button','order','secondary');  

append(phoneCard,phoneImage,phoneTitle,phoneDetail,phoneButton);
append(uberCard,uberImage,uberTitle,uberDetail,uberButton);
append(whatsappCard,whatsappImage,whatsappTitle,whatsappDetail,whatsappButton);
append(container,uberCard,phoneCard,whatsappCard);

append(page, heroHalf, container);

export default page;