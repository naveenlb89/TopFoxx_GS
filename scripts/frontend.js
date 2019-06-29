/*
* DEV USE ONLY - REMOVE IN PRODUCTION
* Loads frontend partial pages
* Loads Jquery
*/

const $ = require('jquery');

window.jquery = $;

$(document).ready(() => {
    // Load navigation
  $("#navigation").load("/partials/nav.html");
    // Load footer
  $("#footer").load("/partials/footer.html");
});
