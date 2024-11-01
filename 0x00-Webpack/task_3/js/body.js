import $ from 'jquery';
import _ from 'lodash';
import '../css/body.css';

$('body').append(`
  <div id="body">
    <button id="clickButton">Click here to get started</button>
    <p id="count">0 clicks on the button</p>
  </div>
`);

let count = 0;
const updateCounter = () => {
  count += 1;
  $('#count').text(`${count} clicks on the button`);
};
$('#clickButton').on('click', _.debounce(updateCounter, 300));
