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
   // Load Module 1 Sunglasses page (Hero)
  $("#footer").load("/partials/demo.html"); 
});
