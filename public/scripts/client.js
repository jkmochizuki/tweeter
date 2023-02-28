$(document).ready(function() {

  // Test / driver code (temporary). Eventually will get this from the server.
  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  };

  const createTweetElement = (data) => {
    const result = $(`<article class="tweet">
    <header>
      <div class="user">
        <img src=${data.user.avatars}>
        <p>${data.user.name}</p>
      </div>
      <div class="username">${data.user.handle}</div>
    </header>
    <h4 id="tweets-text">${data.content.text}</h4>
    <footer>
      <span class="">${data.created_at}</span>
      <span class="right-corner-icons">
        <i class="fa-sharp fa-solid fa-flag"></i> 
        <i class="fa-solid fa-retweet"></i> 
        <i class="fa-solid fa-heart"></i>
      </span>
    </footer>
  </article>`);
    return result;
  };

  const $tweet = createTweetElement(tweetData);

  // // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like
  $('.tweets-container').append($tweet);

});