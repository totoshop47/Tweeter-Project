$(document).ready(function() {
  $('.compose').on('click', function(event) {
    $('.new-tweet').slideToggle();
    $('.new-tweet textarea').select();
  });
});
