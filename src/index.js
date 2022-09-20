import _ from 'lodash';
import myName from './myName';
import {drinkOne, drinkDislike} from './drinks';
import './style.css';
import Icon from './images/megaphone.png';


function component() {
    const element = document.createElement('div');

    element.innerHTML= _.join(['Hello', 'webpack'], ' ');
    element.textContent = myName('Hen6!');
    const megap = new Image();
    megap.classList.add("megaphone");
    megap.src = Icon;
    element.appendChild(megap);


    return element;
    
}

function alsoAnComponent() {
    const secondElement = document.createElement('div');

    secondElement.textContent = drinkOne("🍺") + " and " + drinkDislike("🥛");


    return secondElement;

}

function helloWorld() {
    const helloWorld = document.createElement('div');

    helloWorld.textContent = "Hello World!";
    helloWorld.classList.add('hello');


    return helloWorld;

}

document.body.appendChild(component());
document.body.appendChild(alsoAnComponent());
document.body.appendChild(helloWorld());

