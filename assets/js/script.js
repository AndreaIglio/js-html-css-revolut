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

  var features = $('.features');
  var plans = $('.plans');
  var aboutUs = $('.about_us');
  var help = $(".help");

  // Variabili senza valore
  




  // Functions

  $('.plans').hover(
    function () {
     
     $(".plans_menu > div").removeClass('none');
     $('.plans_menu > div').addClass('active');
    },

    function () {
       $(".plans_menu > div").removeClass("active");
       $(".plans_menu > div").addClass("none");
      }
    
    )





});
