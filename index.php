<!DOCTYPE html>
<html>
  <head>
    <title>Targeted Analysis</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <link href='https://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
    <link href="css/bootstrap.css" rel="stylesheet">
    <link href="css/styles.css" rel="stylesheet" media="screen">

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="../../assets/js/html5shiv.js"></script>
      <script src="../../assets/js/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>

    <!--Navbar -->
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class ="container">
          <a href=""><img class="main-logo" src="img/logo.png" alt="" /></a>
      </div>
    </nav><!-- End navbar -->

    <!--Brand name & Brand motto -->
    <div class="HeroImage">
      <h1>Targeted Analysis</h1>
      <h6>The path to your Targeted Media Plan starts here!</h6>
    </div><!-- End Brand name -->

    <div>
      <div class="down-arrow-container">
        <span class="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span>
      </div>
    </div>



  <!-- Input customer informaion PANEL / Input text field -->
  <div id="textInputPanel" class="panel panel-default container">
    <div class="row">
      <form action="" method="post" id="FormText" class="clearfix" id="text-input-form">
        <div class="container-fluid">
          <div class="col-sm-12">
            <div class="clearfix">
              <h1 class="panel-title pull-left">Your Information</h1>
              <p class="first-come-back btn-come-back pull-right hidden-xs">COME BACK TO THIS QUESTION</p>
            </div>
            <p class="panel-subtitle">Information about you and your business.</p>
          </div>
        </div>
        <div id="txt-input-container" class="container-fluid">
          <div class="form-group ">
            <div class="col-sm-6">
                  <label class="sr-only">Business Name</label>
                  <input type="text" class="form-control" id="BusinessName" required=true placeholder="Business Name">
                  <label class="sr-only">Business Type</label>
                  <input type="text" class="form-control" id="BusinessType" required=true placeholder="Business Type">
                  <label class="sr-only">Your Name</label>
                  <input type="text" class="form-control" id="UserName" required=true placeholder="Your Name">
                  <label class="sr-only">Your Address</label>
                  <input type="text" class="form-control" id="UserAddress" required=true placeholder="Your Address">
            </div>
            <div class="col-sm-6">
                <label class="sr-only">Business Street Address</label>
                <span class="usericon">
                  <input type="text" class="form-control" id="BusinessStreet" required=true placeholder="Business Street Address">
                </span>
                <label class="sr-only">Business Suite Aptartment Number Optional</label>
                <input type="text" class="form-control" id="BusinessApt" required=false placeholder="Business Suite/Apt Number (Optional)">
                <label class="sr-only">Business City</label>
                <input type="text" class="form-control" id="BusinessCity" required=true  placeholder="Business City">
                <div class="row">
                  <div class="col-md-6">
                    <label class="sr-only">Business State</label>
                    <input type="text" class="form-control" id="BusinessState" required=true  placeholder="Business State">
                  </div>
                  <div class="col-md-6">
                    <label class="sr-only">ZIP Code</label>
                    <input type="text" class="form-control" id="BusinessZIP" required=true placeholder="ZIP Code">
                  </div>
                </div>
            </div>
          </div>
        </div>
      </form>
      <a href="#" id="btn-bottom-text"><div class="container bottom-panel-button">
        <p> NEXT QUESTION &#187</p>
      </div></a>
    </div>

  </div>   <!--End Input customer informaion PANEL / Input text field-->


  <!--Input customer informaion PANEL / BUTTONs-->
  <div id="buttonInputPanel" class="panel panel-default container">
    <div class="row">
      <form action="action_page.php" id="FormButtons" method="post" class="clearfix">
        <div class="container-fluid">
          <div class="col-sm-12">
            <div class="clearfix">
              <h1 class="panel-title pull-left">Why You?</h1>
              <p class="second-come-back btn-come-back pull-right hidden-xs"></p>
            </div>
            <p class="panel-subtitle">Why do customers choose you over the competition?</p>
          </div>
        </div>
        <div id="btn-input-container" class="container-fluid">
          <div class="col-sm-6">
            <button type="button" class="btn btn-primary btn-lg btn-block" name="customerservice">BEST CUSTOMER SERVICE</button>
            <button type="button" class="btn btn-primary btn-lg btn-block" name="bestPrice">BEST PRICE</button>
            <button type="button" class="btn btn-primary btn-lg btn-block" name="qualityProduct">QUALITY PRODUCT</button>
          </div>
          <div class="col-sm-6">
            <button type="button" class="btn btn-primary btn-lg btn-block" name="reputationTrust">REPUTATION/TRUST</button>
            <button type="button" id="btn-othr" class="btn btn-primary btn-lg btn-block" name="other">OTHER</button>
          </div>
        </div>
        <input id="buttonValue" type="text" name="ButtonValue" placeholder="">
      </form>
      <a href="#" id="btn-bottom-button"><div  class="container bottom-panel-button">
        <p> PREVIOUS QUESTION &#187;</p>
      </div></a>
    </div>
  </div>

  <div>
    <input type="button" class="btn btn-submit" id="btn-submit" value="SUBMIT" />
  </div>

  <footer> &copy; 2015 Charter Communications  </footer>

  <script src="js/jquery-2.2.4.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script src="js/main.js"></script>

  </body>
</html>
