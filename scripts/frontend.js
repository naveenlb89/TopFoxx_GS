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
  $("#plphero").load("/partials/plp/plp-hero.html");
  // Load PLP Grid
  $("#plpgrid").load("/partials/plp/plp-grid.html");
});
