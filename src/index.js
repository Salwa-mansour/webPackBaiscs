import _ from 'lodash';
import './style.css';
import './myName';
import myName from './myName';

function component(){
    const element = document.createElement('div');

  //  element.innerHTML = _.join(['Hello','webpack'], ' ');
   element.classList.add('hello');
   element.textContent = myName('Salwa');
    return element;
}
window.onload=function(){
    // console.log(component());
    document.body.appendChild(component());
}