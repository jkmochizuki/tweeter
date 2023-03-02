$(document).ready(function () {

  $('.bottom-button').hide();

  const scrollWindow = function () {
    const lastScroll = 0;
    $(window).scroll(function() {
      const currentScroll = $(this).scrollTop();
      if (currentScroll > lastScroll) {
        $('.bottom-button').show();
        $('.write-tweet-button').hide();
      } else {
        $('.bottom-button').hide();
        $('.write-tweet-button').show();
      }
    });
  };

  scrollWindow();

  const goToTopOfPage = function () {
    $('.bottom-button').click(function () {
      $('.new-tweet').slideDown();
      $('#tweet-text').focus();
      $("html, body").animate({ scrollTop: 0 }, "slow");
    })
  };
  
  goToTopOfPage();
  
});