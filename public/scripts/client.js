$(document).ready(function() {

  const renderTweets = function(tweets) {
    for (const tweet of tweets) {
      const result = createTweetElement(tweet);
      $('.tweets-container').append(result);
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
    event.preventDefault(); // prevents the default form submission behaviour of sending the post request and reloading the page

    const data = $('form').serialize();  // converts data to query string

    //sends data to the server
    $.ajax({
      type: "POST",
      url: '/tweets',
      data: data
    });
  });

  // Get data from the server using AJAX w/ jQuery
  const loadTweets = (function() {
    const $button = $('.tweet-button');
    $button.click(function() {
      $.ajax({
        url: "/tweets",
        type: 'GET',
        dataType: 'json',
        success: function(res) {
          renderTweets(res);
        }
      });
    });
  });

  loadTweets();
  
});