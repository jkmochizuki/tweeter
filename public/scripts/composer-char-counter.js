$(document).ready(function() {

  $('#tweet-text').on('keyup', function() {
    const textLength = $(this).val().length;
    const maxLength = $(this).attr("maxlength");

    const counter = $(this).parent().find('.counter');
    if (textLength <= 140) {
      counter.text(maxLength - textLength);
    } 
  });
  
  console.log("Ready!");
  
});
