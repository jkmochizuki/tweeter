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
    return $(`<article class="tweet">${data.content.text}</article>`);
  };

  const $tweet = createTweetElement(tweetData);

  // // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like
  $('#tweets-text').append($tweet);

});