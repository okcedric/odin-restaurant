export default function switchPage(current) {
    let main = document.querySelector('main');
    main.innerHTML = '';
    main.appendChild(current);
}