import Component1 from './components/Component1';

import logo from './images/logo.svg';

import './styles/style.css';

const img = document.createElement('img');
img.src = logo;
img.alt = 'logo';
document.body.appendChild(img);

document.body.appendChild(Component1());
