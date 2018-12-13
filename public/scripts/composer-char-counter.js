$(document).ready(function() {
  console.log('DOM is Ready!');

  $('.new-tweet form textarea').on('input', function(event){
    let counter = 140;
    let inputLength = this.value.length;
    let textLeft = counter - inputLength;
    let currentCount = $(this).parent().children('.counter');

    currentCount.text(textLeft);

    if(textLeft < 0) {
      $(currentCount).removeClass('nCounter');
    }
  });
});




