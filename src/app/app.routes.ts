// src/app/routes.ts
import {Home} from './components/home/home';
import {About} from './components/about/about';

export default [
    {path: '/', component: Home, name: 'Home'},
    // Async load a component using Webpack's require with es6-promise-loader
    {path: '/about', component: About, name: 'About'}
];
