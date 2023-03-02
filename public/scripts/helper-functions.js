const MAX_CHARACTERS_LIMIT = 140;

const sendErrorMessage = (message) => {
  $('.error-message').text(message);
  $('.error-message').show();
  $('textarea').addClass('red-border');
};

const showDefaultForm = () => {
  $('.error-message').hide();
  $('textarea').removeClass('red-border');
  $('textarea').val('');
  $('.counter').text(140);
};

 