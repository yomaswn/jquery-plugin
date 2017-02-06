$.fn.checkhMail = function(){
  var pattern = /^[A-Z0-9._-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
  return pattern.test(this.val())
}

$(document).ready(function(){
    $("#email").keyup(function(){
      if ($("#email").checkhMail()) {
        $("#email").addClass("true")
      }
      else {
        $("#email").removeClass("true")
      }
    });
});
