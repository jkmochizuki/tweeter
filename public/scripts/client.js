$(document).ready(function() {

  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const renderTweets = function(tweets) {
    const $tweets = $('.tweets-container');
    $tweets.text('');
    for (const item of tweets) {
      const tweet = createTweetElement(item);
      $tweets.prepend(tweet);
    }
  };

  const createTweetElement = (tweets) => {
    const $tweet = $(`<article class="tweet">
    <header>
      <div class="user">
        <img src=${tweets.user.avatars}>
        <p>${tweets.user.name}</p>
      </div>
      <div class="username">${tweets.user.handle}</div>
    </header>
    <h4 id="tweets-text">${escape(tweets.content.text)}</h4>
    <footer>
      <span class="timeago">${timeago.format(tweets.created_at)}</span>
      <span class="right-corner-icons">
        <i class="fa-sharp fa-solid fa-flag"></i> 
        <i class="fa-solid fa-retweet"></i> 
        <i class="fa-solid fa-heart"></i>
      </span>
    </footer>
  </article>`);
    return $tweet;
  };

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
  }

  // Form data submission using jQuery
  $('form').on('submit', (event) => {
    
    event.preventDefault();
    const urlencoded = $('form').serialize();  // converts data to string of url coded information
    const newTweet = (urlencoded).split("=")[1];
    const dataIsValid = newTweet.length <= 140 && newTweet.length > 0;

    if (dataIsValid) {
      $.ajax('tweets', {
        method: 'POST',
        data: urlencoded
      })
        .then(function(tweets) {
          loadTweets();
          showDefaultForm();
        });
    }
    if (newTweet.length > 140) {
      sendErrorMessage('Your tweet exceeds the maximum character limit.');
    }
    if (!newTweet.length) {
      sendErrorMessage('Please enter at least 1 character.');
    }
  });

  // Get data from the server using AJAX w/ jQuery
  const loadTweets = (function() {

    $.ajax('/tweets', {
      method: 'GET',
      dataType: 'json',
    })
      .then(function(tweets) {
        renderTweets(tweets);
      });
  
  });

  loadTweets();
  
});