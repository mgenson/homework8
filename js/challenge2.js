$(document).ready(function(){
  $("#sameAddress").change(function(){
    if (this.checked)
    {
      $("#home").val($("#bill").val());

      $("#home").attr("disabled", true);
    }
    else{
      $("#home").val("");
      $("#home").attr("disabled", false);
    }
  })
})
