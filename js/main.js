$( document ).ready(function() {

  // added attributes for initializing per step 1
  $("#btn-bottom-button").hide();
  $("#btn-input-container").hide();
  $("#buttonInputPanel").addClass("dimmed");
  $("#buttonValue").hide();


  // toggle forms -
  // true will display the text input form and hide the button input form
  // false will hide the text input form and show the button input form
  var toggleForms = true;

  // variable used to store the value for which button is clicked
  var buttonFormValue = "";


  // ************************
  //  AJAX FUNCTION
  // ************************

      // collect the current values stored in inputs
      // sent to process.php [STATUS - echo success"
      function submitForm(){
          // Initiate Variables With Form Content
          var businessName = $("#BusinessName").val();
          var businessType = $("#BusinessType").val();
          var userName  = $("#UserName").val();
          var userAddress = $("#UserAddress").val();
          var businessStreet = $("#BusinessStreet").val();
          var businessApt = $("#BusinessApt").val();
          var businessCity = $("#BusinessCity").val();
          var businessState = $("#BusinessState").val();
          var businessZIP = $("#BusinessZIP").val();

          $.ajax({
              type: "POST",
              url: "process.php",
              data: "businessName=" + businessName + "&businessType=" + businessType + "&userName=" + userName + "&userName=" + userName + "&userAddress=" + userAddress + "&businessStreet=" + businessStreet + "&businessApt=" + businessApt + "&businessCity=" + businessCity + "&businessState=" + businessState + "&businessZIP=" + businessZIP + "&buttonFormValue" + buttonFormValue,
              success : function(text){
                  if (text == "success"){
                      console.log("ajax success");;
                  }
              }
          });
      }

      // Go time!
      // Cancel the form submision and load submitForm (ajax)
      $("#btn-submit").click(function(event){
        event.preventDefault();
        submitForm();
      });

  // End AJAX FUNCTION


  // Adding icon to front of input form
  // FIX: DIV is closing itself before wrapping the input field
  $(".form-control").keyup(function(e){
    if ($(this).val()!==""){
      $(this).addClass('validFormEntry');
    } else {
      $(this).removeClass('validFormEntry');
    }
  })




  // Select single button for "Why do customers choose you over the competition?"
  $(".btn-primary").click(function(){
    $("#btn-input-container button").removeClass("active");
    $(this).addClass("active");
    buttonFormValue =  $(this).text();
  })



  // Toggles input forms between btn-input-container & txt-input-container
  $(".bottom-panel-button").click(function(){
    event.preventDefault();
    toggleInputForms();
  })

  // Toggles input forms between btn-input-container & txt-input-container
  $(".btn-come-back").click(function(){
    event.preventDefault();
    toggleInputForms();
  })

  // Navbar annimation
  $(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $('nav').addClass('shrink');
      $('.main-logo').addClass('shrink');;
    } else {
      $('nav').removeClass('shrink');
      $('.main-logo').removeClass('shrink');
    }
  });

  // Hides and displays elements per Step 1 & Step 2
  // Updates come-back buttons w/ specific text
  function toggleInputForms(){
    if (toggleForms){
      toggleForms = false;
      $("#btn-bottom-button").slideDown();
      $("#btn-input-container").slideDown();
      $("#btn-bottom-text").slideUp();
      $("#txt-input-container").slideUp();
      $("#buttonInputPanel").removeClass("dimmed");
      $('.first-come-back').prepend('<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>');
      $('.first-come-back').text("EDIT SECTION");
      $('.second-come-back').text("COME BACK TO THIS QUESTION");

    } else {
      toggleForms = true;
      $("#btn-bottom-button").slideUp();
      $("#btn-input-container").slideUp();
      $("#btn-bottom-text").slideDown();
      $("#txt-input-container").slideDown();
      $('.first-come-back').text("COME BACK TO THIS QUESTION");
      $('.second-come-back').text("EDIT SECTION");
    }
  }
});
