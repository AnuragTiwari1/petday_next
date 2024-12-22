<!DOCTYPE html>
<html lang="zxx">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1,shrink-to-fit=no"
    />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <title>SignUp - Petday</title>
    <link rel="shortcut icon" href="assets/images/logo/favourite_icon.svg" />
    <link rel="stylesheet" type="text/css" href="assets/css/all.css" />
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>
  </head>
  <body>
    <div class="body_wrap">
      <div class="backtotop">
        <a href="#" class="scroll"><i class="far fa-arrow-up"></i></a>
      </div>
     <?php include "header.php" ?>
      
      
      
      
      <?php
		session_start();
		include 'conn.php';
if (isset($_POST['btnsignup']))
    {  
                    
					$name=$_POST['name'];
                    $lname=$_POST['lname'];                 
                    $email=$_POST['email'];
                    $mobile=$_POST['mobile'];
                    $password=$_POST['password'];
                    

 $sql="select * from customer where email='$email';";

      $res=mysqli_query($conn,$sql);

      if (mysqli_num_rows($res) > 0) {
        
        $row = mysqli_fetch_assoc($res);
        if($email==$row['email'])
        {
            		
        echo "<script> Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Email Id Already Exists',
  footer: '<b>Please Try Again</b>'
}).then(function() {
    window.location.href='signup';
}); </script>";
        }
	  }
		else
		{
			$sql = "INSERT INTO customer (name, lname, email, mobile, password) VALUES ('$name', '$lname', '$email', '$mobile','$password')";
            
if (mysqli_query($conn, $sql)) {
    
    $_SESSION['user_email']=$email;
    
// Redirect browser 
 echo "<script> Swal.fire(
  'Good job!',
  'Registered  Successfully!  Login Now to Continue',
  'success'
).then(function() {
    window.location.href='profile';
}); </script>";
} else {

	
	
  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
		}
		

	}

            
	
?>

      <main style="margin-top: 100px">
        <section class="breadcrumb_section">
          <div class="container">
            <div class="row">
              <div class="col col-lg-4 col-md-7 col-sm-9">
                <ul class="breadcrumb_nav">
                  <li><a href="index">Home</a></li>
                  <li>SignUp</li>
                </ul>
                <h1 class="page_title">SignUp</h1>
                <p class="page_description mb-0">
                  Tristique nulla aliquet enim tortor at auctor urna nunc. Massa
                  enim nec dui nunc mattis enim ut tellus
                </p>
              </div>
            </div>
          </div>
          <div class="breadcrumb_img">
            <img
              src="assets/images/breadcrumb/breadcrumb_img_10.png"
              alt="Pet Care Service"
            />
          </div>
        </section>
        <section class="contact_section section_space_lg pb-0">
          <div class="container">
            <div class="row">
              <div class="col col-lg-6 offset-md-3 mb-5">
                <div class="section_title">
                  <h2 class="title_text">
                    <span class="sub_title">SignUp</span> User SignUp
                  </h2>
                  <p class="mb-0">
                    Massa enim nec dui nunc mattis enim ut tellus. Auctor augue
                    mauris augue neque gravida in fermentum
                  </p>
                </div>
                <div class="contact_form">
                  <form action="#" method="POST">
                    <div class="row">
                      <div class="col col-md-6 col-sm-6">
                        <div class="form_item mb-0">
                          <label class="input_title" for="input_name"
                            >First Name<sup>*</sup></label
                          >
                          <input
                            id="input_name"
                            type="text"
                            name="name"
                            placeholder="First Name"
                            required
                          />
                        </div>
                      </div>
                      <div class="col col-md-6 col-sm-6">
                        <div class="form_item mb-0">
                          <label class="input_title" for="input_name"
                            >Last Name<sup>*</sup></label
                          >
                          <input
                            id="input_name"
                            type="text"
                            name="lname"
                            placeholder="Type Your Last Name"
                             required
                          />
                        </div>
                      </div>
                      <div class="col col-md-6 col-sm-6">
                        <div class="form_item mb-0">
                          <label class="input_title" for="input_email"
                            >Email<sup>*</sup></label
                          >
                          <input
                            id="input_email"
                            type="email"
                            name="email"
                            placeholder="Type Your Email"
                             required
                          />
                        </div>
                      </div>
                      <div class="col col-md-6 col-sm-6">
                        <div class="form_item mb-0">
                          <label class="input_title" for="input_email"
                            >Mobile No<sup>*</sup></label
                          >
                          <input
                            id="input_email"
                            type="text"
                            name="mobile"
                            placeholder="Type Your Mobile No"
                             required
                          />
                        </div>
                      </div>
                        <div class="col col-md-6 col-sm-6">
                        <div class="form_item mb-0">
                          <label class="input_title" for="input_email"
                            >Password<sup>*</sup></label
                          >
                          <input
                            id="input_email"
                            type="password"
                            name="password"
                            placeholder="Type Your Password"
                             required
                          />
                        </div>
                      </div>
                      <div class="col col-md-6 col-sm-6 mt-4">
                        <button type="submit" name="btnsignup" class="btn btn_primary">
                          <i class="fas fa-paw"></i> SignUp
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div class="section_space_lg pt-0 mt-5">
              <div class="row justify-content-center">
                <div class="col col-lg-3 col-md-6 col-sm-6">
                  <div class="iconbox_item iconbox_overicon">
                    <div class="item_icon"><i class="fas fa-phone"></i></div>
                    <div class="item_content">
                      <h3 class="item_title">Phone</h3>
                      <ul class="item_info_list unorder_list_block">
                        <li>(913) 756-3126</li>
                        <li>(921) 557-1203</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col col-lg-3 col-md-6 col-sm-6">
                  <div class="iconbox_item iconbox_overicon">
                    <div class="item_icon"><i class="fas fa-envelope"></i></div>
                    <div class="item_content">
                      <h3 class="item_title">Email</h3>
                      <ul class="item_info_list unorder_list_block">
                        <li>petopia@example.com</li>
                        <li>petopia@email.com</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col col-lg-3 col-md-6 col-sm-6">
                  <div class="iconbox_item iconbox_overicon">
                    <div class="item_icon">
                      <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <div class="item_content">
                      <h3 class="item_title">Address</h3>
                      <ul class="item_info_list unorder_list_block">
                        <li>17 Parkman Place, 2122</li>
                        <li>United States</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col col-lg-3 col-md-6 col-sm-6">
                  <div class="iconbox_item iconbox_overicon">
                    <div class="item_icon"><i class="fas fa-clock"></i></div>
                    <div class="item_content">
                      <h3 class="item_title">Open Hours</h3>
                      <ul class="item_info_list unorder_list_block">
                        <li>Mon - Fri: 7am - 6pm</li>
                        <li>Saturday: 9am - 4pm</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <?php include "footer" ?>
    </div>
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/js/popper.min.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>
    <script src="assets/js/bootstrap-dropdown-ml-hack.js"></script>
    <script src="assets/js/slick.min.js"></script>
    <script src="assets/js/magnific-popup.min.js"></script>
    <script src="assets/js/nice-select.min.js"></script>
    <script src="assets/js/jquery-ui.js"></script>
    <script src="assets/js/vanilla-calendar.min.js"></script>
    <script src="assets/js/countdown.js"></script>
    <script src="assets/js/main.js"></script>
    
  </body>
</html>
