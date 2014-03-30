$(document).ready(function(){  
    Parse.initialize("yCot7DiqPN7MLHrmceO3kR5C8FzxPFLqynLBgc4A", "ffJ4m7XXPcVpQAJL3Jw212KbNn06Lp098Fl468Tx");


  var Vouchers = Parse.Object.extend("Vouchers");
  var query = new Parse.Query(Vouchers);
      query.get("0yE9PVkN8v", {
          success: function(object) {
            $(".title1").append(object.get("voucherTitle"));
            $(".price1").append(object.get("voucherPrice"));
            $(".1").append("<button type='button' class='btn btn-primary btn-lg btn-block' onClick='storeID(" +object.get("voucherId")+ ")'>Block level button</button>");  
          },            
          error: function(error) {
                  console.log("An error occured :(");
              }
        });

      query.get("n5KrMatqSm", {
          success: function(object) {
            $(".title2").append(object.get("voucherTitle"));
            $(".price2").append(object.get("voucherPrice"));
            $(".2").append("<button type='button' class='btn btn-primary btn-lg btn-block' onClick='storeID(" +object.get("voucherId")+ ")'>Block level button</button>");
          },            
          error: function(error) {
                  console.log("An error occured :(");
              }
        });

      query.get("9WiyTWeYjB", {
          success: function(object) {
            $(".title3").append(object.get("voucherTitle"));
            $(".price3").append(object.get("voucherPrice"));
            $(".3").append("<button type='button' class='btn btn-primary btn-lg btn-block' onClick='storeID(" +object.get("voucherId")+ ")'>Block level button</button>");  
          },            
          error: function(error) {
                  console.log("An error occured :(");
              }
        });

      query.get("cIqORi1cDg", {
          success: function(object) {
            $(".title4").append(object.get("voucherTitle"));
            $(".price4").append(object.get("voucherPrice"));
            $(".4").append("<button type='button' class='btn btn-primary btn-lg btn-block' onClick='storeID(" +object.get("voucherId")+ ")'>Block level button</button>");  
          },            
          error: function(error) {
                  console.log("An error occured :(");
              }
        });

      query.get("vQ1AsaASF8", {
          success: function(object) {
            $(".title5").append(object.get("voucherTitle"));
            $(".price5").append(object.get("voucherPrice"));
            $(".5").append("<button type='button' class='btn btn-primary btn-lg btn-block' onClick='storeID(" +object.get("voucherId")+ ")'>Block level button</button>");  
          },            
          error: function(error) {
                  console.log("An error occured :(");
              }
        });



 });
      
function storeID(index){
  console.log(index);
  localStorage.setItem("ID",index);
  window.location="voucher_view_form.html";
  
  
  
}
