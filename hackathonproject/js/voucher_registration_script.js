$(document).ready(function(){
    Parse.initialize("yCot7DiqPN7MLHrmceO3kR5C8FzxPFLqynLBgc4A", "ffJ4m7XXPcVpQAJL3Jw212KbNn06Lp098Fl468Tx");

     // var title         = document.getElementById("InputVoucher");
     // var quantity      = document.getElementById("InputQuantity");
     // var enddate       = document.getElementById("InputEndDate");
     // var description   = document.getElementById("InputDescription");
     // var price         = document.getElementById("InputPrice");

      var Vouchers = Parse.Object.extend("Vouchers");
       var vouchers = new Vouchers();      
      // var Codes = Parse.Object.extend("Codes");
      // var codes = new Codes();
      


    $("#submit").click(function(){

          vouchers.set("voucherTitle", InputVoucher.value); 
          vouchers.set("voucherQuantity", InputQuantity.value);
          vouchers.set("voucherEnddate", InputEndDate.value);
          vouchers.set("voucherDescription", InputDescription.value);
          vouchers.set("voucherPrice", InputPrice.value);
          vouchers.save({
              success: function(results){
                alert("Funciono!");
              },
              error: function(model, error) {
                // This will be called.
                // error is an instance of Parse.Error with details about the error
                if (error.code === Parse.Error.CONNECTION_FAILED) {
                  alert("Uh oh, we couldn't even connect to the Parse Cloud!");
                }     else if (error.code === Parse.Error.OBJECT_NOT_FOUND) {
                  alert("Uh oh, we couldn't find the object!");
                }
          }


          // null,{
          //   success: function(Object){
          //       for(var i=0 ; i<InputQuantity.value; i++){
          //         cupon.set("parentID", InputVoucher.value);
          //         cupon.set("cuponID", cuponID[i]);
          //         console.log(i);
          //       }
          //          cupon.save();
          //     }});
    
      });
  
    });
});