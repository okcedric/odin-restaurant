let helloWorld = document.createElement('div');
const content = document.querySelector('#content');


helloWorld.innerHTML = 'Hello World';
console.log(content);
content.appendChild(helloWorld);