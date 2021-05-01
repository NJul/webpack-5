import Component1 from './components/Component1';
import ElvenRecipe from './components/ElvenRecipe';

import logo from './images/logo.svg';

import './styles/index.scss';

const div = document.createElement('div');
const img = document.createElement('img');
img.src = logo;
img.alt = 'logo';

document.body.appendChild(img);
document.body.appendChild(Component1());
document.body.appendChild(div);
div.classList.add('column');
div.append(ElvenRecipe());
