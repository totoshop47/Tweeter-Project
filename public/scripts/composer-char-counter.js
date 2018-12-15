$(document).ready(function() {

  const counter = 140;
  $('.new-tweet form textarea').on('input', function(event){

    const inputLength = $(this).serialize().length - 5;
    const textLeft = counter - inputLength;
    const currentCount = $(this).parent().children('.counter');

    currentCount.text(textLeft);

    if(textLeft <= 0) {
      $(currentCount).removeClass('nCounter');
    } else if(textLeft > 0) {
      $(currentCount).addClass('nCounter');
    }
  });
});




