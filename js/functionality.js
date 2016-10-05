(function() {
  $('#contactForm').on('submit', function(e) {
    e.preventDefault();
    var $form = $(this).serialize();
    console.log($form);
    if(validateForm()){$('#contactForm').html("Form Successfully Submited");}
  });
})(jQuery);

function validateForm() {
  var x = document.forms["contactForm"]["fname"].value;
  var y = document.forms["contactForm"]["fname"].name;
  if (x == null || x == "") {
    alert(y+" (first name) must be filled out");
    return false;
  }
  var x = document.forms["contactForm"]["lname"].value;
  var y = document.forms["contactForm"]["lname"].name;
  if (x == null || x == "") {
    alert(y+" (last name) must be filled out");
    return false;
  }
  var x = document.forms["contactForm"]["email"].value;
  var y = document.forms["contactForm"]["email"].name;
  if (x == null || x == "") {
    alert(y+" (email) must be filled out");
    return false;
  }
  var x = document.forms["contactForm"]["phone"].value;
  var y = document.forms["contactForm"]["phone"].name;
  if (x == null || x == "") {
    alert(y+" (phone number) must be filled out");
    return false;
  }
  return true;
}
