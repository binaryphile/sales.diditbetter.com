  $(document).ready(function(){
        // Smart Wizard         
        $('#wizard').smartWizard({onShowStep:showAStepCallback, onFinish: finish});
 
      function showAStepCallback(obj){
        var step_num= obj.attr('rel'); // get the current step number
        if (step_num === "2") {
          $('.buttonNext').toggleClass("buttonDisabled", !$('#agree').checked);
        }
        if (step_num === "3") {
          $('.buttonNext').toggleClass('buttonDisabled', !$('#agree2').checked);
        }
        return true;
      }

      function finish(obj){
        window.location.href = '/whats_next'
      }

      $("#agree").click(function() { $(".buttonNext").toggleClass("buttonDisabled", !this.checked); });
      $("#agree2").click(function() { $(".buttonNext").toggleClass("buttonDisabled", !this.checked); });
  });

