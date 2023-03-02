$(document).ready(function () {

  const showForm = function () {
    $('.write-tweet-button').on('click', function () {
      $(this).parent().parent().parent().find('.new-tweet').slideToggle();
    });
  };

  showForm();
  
  const renderTweets = function (tweets) {
    const $tweets = $('.tweets-container');
    $tweets.text('');
    for (const item of tweets) {
      const tweet = createTweetElement(item);
      $tweets.prepend(tweet);
    }
  };

  const createTweetElement = function (tweets) {
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

  // Form data submission using jQuery
  $('form').on('submit', function (event) {
    event.preventDefault();
    const urlencoded = $(this).serialize();
    const newTweet = $(this).children('#tweet-text').val();

    if (newTweet.length > MAX_CHARACTERS_LIMIT) {
      sendErrorMessage('Your tweet exceeds the maximum character limit.');
      return;
    }

    if (!newTweet.length) {
      sendErrorMessage('Please enter at least 1 character.');
      return;
    }

    showDefaultForm();

    $.ajax('tweets', {
      method: 'POST',
      data: urlencoded
    })
      .then(function () {
        loadTweets();
      });
  });

  // Get data from the server using AJAX w/ jQuery
  const loadTweets = (function () {
    $.ajax('/tweets', {
      method: 'GET',
      dataType: 'json',
    })
      .then(function (tweets) {
        renderTweets(tweets);
      });
  });

  loadTweets();



 

});