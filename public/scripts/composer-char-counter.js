$(document).ready(function() {
  let counter = 140;
  $('.new-tweet form textarea').on('input', function(event){

    let inputLength = $(this).serialize().length - 5;
    let textLeft = counter - inputLength;
    let currentCount = $(this).parent().children('.counter');

    currentCount.text(textLeft);

    if(textLeft <= 0) {
      $(currentCount).removeClass('nCounter');
    } else if(textLeft > 0) {
      $(currentCount).addClass('nCounter');
    }
  });
});




