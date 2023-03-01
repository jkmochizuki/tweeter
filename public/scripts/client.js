$(document).ready(function() {

  const renderTweets = function(tweets) {
    const $tweets = $('.tweets-container');
    $tweets.text('');
    for (const tweet of tweets) {
      const result = createTweetElement(tweet);
      $tweets.append(result);
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
    <h4 id="tweets-text">${tweets.content.text}</h4>
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
  $('form').on('submit', function(event) {
    event.preventDefault();
    const data = $(this).serialize();  // converts data to query string
    const dataIsValid = data.length <= 145 && data.length > 5;

    if (dataIsValid) {
      $.ajax('tweets', {
        method: "POST",
        data: data
      })
        .then(function(res) {
          loadTweets();
          $('#tweet-text').val('');
          $('.counter').text(140);
        });
    }
    if (data.length > 145) {
      alert('Your tweet exceeds maximum character limit.');
    }
    if (data.length === 5) {
      alert('Tweet invalid.');
    }

  });

  // Get data from the server using AJAX w/ jQuery
  const loadTweets = (function() {

    $.ajax('/tweets', {
      method: 'GET',
      dataType: 'json',
    })
      .then(function(res) {
        renderTweets(res);
      });
  
  });

  loadTweets();
  
});