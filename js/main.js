$( document ).ready(function() {

  // added attributes for initializing per step 1
  $("#btn-bottom-button").hide();
  $("#btn-input-container").hide();
  $("#buttonInputPanel").addClass("dimmed");
  $("#buttonValue").hide();

  var buttonFormValue = "";









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

      // businessName
      // businessType
      // userName
      // userAddress
      // businessStreet
      // businessApt
      // businessCity
      // businessState
      // businessZIP

      console.log(businessName);

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
  //
  // submitForms = function(){

  // }

  $("#btn-submit").click(function(event){
    // cancels the form submission
    event.preventDefault();

    // document.getElementById("FormButtons").submit();
    // document.getElementById("FormText").submit();


    console.log("test");
    submitForm();
});


  //
  // $('#FormButtons').ajaxForm(function() {
  //     alert("Thank you for your comment!");
  // });

  // toggle forms -
  // true will display the text input form and hide the button input form
  // false will hide the text input form and show the button input form
  var toggleForms = true;

  // Adding icon to front of input form
  // FIX: DIV is closing itself before wrapping the input field
  $(".form-control").click(function(){
    $(this).prepend("<div class='left-inner-addon'><i class='icon-user'></i>").append("</div>");
  })

  // Print function
  function printValue(value){
    console.log(value);
  }

  // Select single button for "Why do customers choose you over the competition?"
  $(".btn-primary").click(function(){
    $("#btn-input-container button").removeClass("active");
    $(this).addClass("active");
    console.log($(this).text());
    buttonFormValue =  $(this).text();
    console.log(buttonFormValue);
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
      $("#btn-bottom-button").show();
      $("#btn-input-container").show();
      $("#buttonInputPanel").removeClass("dimmed");
      $("#btn-bottom-text").hide();
      $("#txt-input-container").hide();
      $('.first-come-back').text("EDIT SECTION");
      $('.second-come-back').text("COME BACK TO THIS QUESTION");

    } else {
      toggleForms = true;
      $("#btn-bottom-button").hide();
      $("#btn-input-container").hide();
      $("#btn-bottom-text").show();
      $("#txt-input-container").show();
      $('.first-come-back').text("COME BACK TO THIS QUESTION");
      $('.second-come-back').text("EDIT SECTION");
    }
  }
});
