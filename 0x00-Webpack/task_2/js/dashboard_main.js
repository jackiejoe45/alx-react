import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css';

// Adding elements to the body
$('body').prepend('<div id="logo"></div>');
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

// Initialize counter
let count = 0;

// Update the counter and display it
function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`);
}

// Attach the debounce function to button click
$('button').on('click', _.debounce(updateCounter, 300));
