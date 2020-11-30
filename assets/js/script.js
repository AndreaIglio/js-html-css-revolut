// Opzione deprecata da JQ 3.0
// Codice viene eseguito solo quando documento e' carico
$(document).ready(function () {
  //codice jQuery


  // Variabili con valore

  // Variabili senza valore

  // Functions
});

// Opzione piu recente
// Codice viene eseguito solo quando documento e' carico
$(function () {
  //codice jQuery

  // Variabili con valore

  var features = $(".card_hover_features, .features");
  var features_menu = $(".features_menu .card_hover");

  var plans = $(".plans, .plans_menu > div ");
  var plans_menu = $(".plans_menu > div");

  var aboutUs = $(".about_us, .about_us_menu > .card_hover");
  var aboutUs_menu = $(".about_us_menu > div");

  var help = $(".help , .help_menu > div");
  var help_menu = $(".help_menu > div");

  // Variabili senza valore

  // Functions

  //FEATURES Menu
  features.hover(
    //this function will work on handlerIn
    function () {
      features_menu.removeClass("none");
      features_menu.addClass("active");
    },
    //this function will work on handlerOut
    function () {
      features_menu.removeClass("active");
      features_menu.addClass("none");
    }
  );

  //PLANS Menu
  plans.hover(
    //this function will work on handlerIn
    function () {
      plans_menu.removeClass("none");
      plans_menu.addClass("active");
    },
    //this function will work on handlerOut
    function () {
      plans_menu.removeClass("active");
      plans_menu.addClass("none");
    }
  );

  //ABOUT US Menu
  aboutUs.hover(
    //this function will work on handlerIn
    function () {
      aboutUs_menu.removeClass("none");
      aboutUs_menu.addClass("active");
    },
    //this function will work on handlerOut
    function () {
      aboutUs_menu.removeClass("active");
      aboutUs_menu.addClass("none");
    }
  );

  //HELP Menu
  help.hover(
    //this function will work on handlerIn
    function () {
      help_menu.removeClass("none");
      help_menu.addClass("active");
    },
    //this function will work on handlerOut
    function () {
      help_menu.removeClass("active");
      help_menu.addClass("none");
    }
  );
});
