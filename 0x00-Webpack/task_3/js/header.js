import $ from 'jquery';
import '../css/header.css';

console.log('Init header');

$('body').prepend(`
  <div id="header">
    <img src="../assets/holberton-logo.jpg" alt="Holberton Logo" width="200" height="200">
    <h1>Holberton Dashboard</h1>
  </div>
`);
