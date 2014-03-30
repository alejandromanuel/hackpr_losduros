 $(document).ready(function(){
    Parse.initialize("yCot7DiqPN7MLHrmceO3kR5C8FzxPFLqynLBgc4A", "ffJ4m7XXPcVpQAJL3Jw212KbNn06Lp098Fl468Tx");

     var name   = document.getElementById("InputName");
     var email  = document.getElementById("InputEmail");
     var phone  = document.getElementById("InputPhone");


    var Users = Parse.Object.extend("Users");
      var users = new Users();

    $("#submit").click(function(){

          users.set("InputName", InputName.value); 
          users.set("Phone", InputPhone.value);
          users.set("Email", InputEmail.value)
          users.save();
  }); 
});