import _ from 'lodash';
import myName from './myName';
import {drinkOne, drinkDislike} from './drinks';


function component() {
    const element = document.createElement('div');

    element.innerHTML= _.join(['Hello', 'webpack'], ' ');
    element.textContent = myName('TOFI!');


    return element;
    
}

function alsoAnComponent() {
    const secondElement = document.createElement('div');

    secondElement.textContent = drinkOne("🍺") + " and " + drinkDislike("🥛");


    return secondElement;

}

document.body.appendChild(component());
document.body.appendChild(alsoAnComponent());


