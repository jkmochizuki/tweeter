$(document).ready(function() {

  $('#tweet-text').on('keyup', function() {
    const textLength = $(this).val().length;
    const counter = $(this).parent().find('.counter');
    const remainingLength = MAX_CHARACTERS_LIMIT - textLength;
    counter.text(remainingLength);

    if (remainingLength < 0) {
      counter.addClass('red-color');
    } else {
      counter.removeClass('red-color');
    }
  });
  
});
