const MAX_CHARACTERS_LIMIT = 140;

const escape = (str) => {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

const sendErrorMessage = (message) => {
  $('.error-message').html(`<i class="fa-solid fa-triangle-exclamation"></i>&nbsp${message}`);
  $('.error-message').show();
  $('textarea').addClass('red-border');
};

const showDefaultForm = () => {
  $('.error-message').hide();
  $('textarea').removeClass('red-border');
  $('textarea').val('');
  $('.counter').text(140);
};

 