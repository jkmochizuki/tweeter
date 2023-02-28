$(document).ready(function() {

  $('#tweet-text').on('keyup', function() {
    const textLength = $(this).val().length;
    const maxLength = 140;
    const counter = $(this).parent().find('.counter');
    const remainingLength = maxLength - textLength;
    counter.text(remainingLength);

    if (remainingLength < 0) {
      counter.addClass('red-color');
    } else {
      counter.removeClass('red-color');
    }
  });
  
});
