$(document).ready(function(){
  // Smart Wizard
  if (!$("#art-resp").is(":visible")) {
    $('#wizard').smartWizard({onShowStep:showAStepCallback, onFinish: finish});
    $('input[type="submit"]').hide();
  }

  function showAStepCallback(obj){
    var step_num= obj.attr('rel'); // get the current step number
    if (step_num === "1") {
      $('.buttonNext').toggleClass("buttonDisabled", !$('#nda-agree')[0].checked);
    }
    if (step_num === "2") {
      $('.buttonNext').toggleClass('buttonDisabled', !$('#raa-agree')[0].checked);
    }
    return true;
  }

  function finish(obj){
    $('input[type="submit"]').click();
  }

  $("#nda-agree").click(function() { $(".buttonNext").toggleClass("buttonDisabled", !this.checked); });
  $("#raa-agree").click(function() { $(".buttonNext").toggleClass("buttonDisabled", !this.checked); });
  
  $("#yes").toggle();
  $("#no").toggle();
  $("#hidden").toggle();
  $("#yes").parent().nextUntil("dt").toggle();
  $("#no").parent().nextUntil("dt").toggle();
  $("input[name='create-account']").change(function() {
    $(this).parent().siblings("dt").nextUntil("dt").hide(400);
    $(this).parent().nextUntil("dt").show(400);
  });
  $(".show-hidden").click(function () {
    $("#all").hide();
    $("#hidden").show();
  });
});

