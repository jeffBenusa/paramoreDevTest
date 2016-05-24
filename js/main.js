$( document ).ready(function() {

  $("#btn-bottom-button").hide();
  $("#btn-input-container").hide();
  $("#buttonInput").addClass("dimmed");



  // toggle forms -
  // true will display the text input form and hide the button input form
  // false will hide the text input form and show the button input form
  var toggleForms = true;



  $(".btn-primary").click(function(){
    $("#btn-input-container button").removeClass("active");
    $(this).addClass("active");
  })

  $(".bottom-panel-button").click(function(){
    event.preventDefault();
    toggleInputForms();
  })

  // Navbar annimation
  $(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $('nav').addClass('shrink');
      $('.main-logo').addClass('shrink');
    } else {
      $('nav').removeClass('shrink');
      $('.main-logo').removeClass('shrink');
    }
  });


  function toggleInputForms(){
    if (toggleForms){
      toggleForms = false;
      $("#btn-bottom-button").show();
      $("#btn-input-container").show();
      $("#buttonInput").removeClass("dimmed");
      $("#btn-bottom-text").hide();
      $("#txt-input-container").hide();
      console.log(toggleForms);
    } else {
      toggleForms = true;
      $("#btn-bottom-button").hide();
      $("#btn-input-container").hide();
      $("#btn-bottom-text").show();
      $("#txt-input-container").show();
      console.log(toggleForms);
    }
  }





});
