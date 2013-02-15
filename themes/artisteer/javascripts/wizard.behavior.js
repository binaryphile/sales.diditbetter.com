  $(document).ready(function(){
        // Smart Wizard         
        $('#wizard').smartWizard({includeFinishButton: false, onShowStep:showAStepCallback});
 
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

      $("#agree").click(function() { $(".buttonNext").toggleClass("buttonDisabled", !this.checked); });
      $("#agree2").click(function() { $(".buttonNext").toggleClass("buttonDisabled", !this.checked); });
  });

