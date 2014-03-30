$(document).ready(function(){      
  Parse.initialize("yCot7DiqPN7MLHrmceO3kR5C8FzxPFLqynLBgc4A", "ffJ4m7XXPcVpQAJL3Jw212KbNn06Lp098Fl468Tx")

     var title         = document.getElementById("InputVoucher");
     var quantity      = document.getElementById("InputQuantity");
     var enddate       = document.getElementById("InputEndDate");
     var description   = document.getElementById("InputDescription");
     var price         = document.getElementById("InputPrice");
     var voucher_ID;

      var Vouchers = Parse.Object.extend("Vouchers");
      var vouchers = new Vouchers();      
      var query = new Parse.Query("Vouchers");
      var Codes = Parse.Object.extend("Codes");
      var codes = new Codes();
      


    $("#submit").click(function(){

          vouchers.set("voucherTitle", InputVoucher.value); 
          vouchers.set("voucherQuantity", InputQuantity.value);
          vouchers.set("voucherEnddate", InputEndDate.value);
          vouchers.set("voucherDescription", InputDescription.value);
          vouchers.set("voucherPrice", InputPrice.value);
          vouchers.save();

           query.descending("createAt"); 
           query.limit(1);
           query.get({
           success: function(voucher_ID) {
           alert(voucher_ID);
           codes.set("voucherCode",voucher_ID[0].id); 
           codes.save();
           }});
           

  }); 
});