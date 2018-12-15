$(document).ready(function() {

  function success(tweets) {
    renderTweets(tweets);
  }

  function loadTweets() {
    $.ajax({
    type: "GET",
    url: '/tweets',
    success: success
    });
  }

  function escape(str) {
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  function renderTweets(tweets) {
    $('#tweets-container').empty();
    for(var arr of tweets) {
      $('#tweets-container').prepend(createTweetElement(arr));
    }
  }

  function createTweetElement(tweets) {
    const twName = tweets.user.name;
    const avatar = tweets.user.avatars.small;
    const at = tweets.user.handle;
    const cont = tweets.content.text;
    let footer = tweets.created_at;
    footer = moment(footer).fromNow();

    const $tweet = $("<article>").addClass('content').html(`

        <header><img src=${avatar}><span class="tweetname">${twName}</span><span class="at">${at}</span>
        </header>
          <p>${cont}</p>
        <footer><span class="content">${footer}</span><img class=icon src="/images/flag.png"><img class=icon src="/images/refresh.png"><img class=icon src="/images/heart.png">
        </footer>

      `);
    return $tweet;
  }


  $(".new-tweet form").on("submit", function(event) {
    event.preventDefault();
    $('.new-tweet .err').hide();
    const text = event.target[0].value;
    event.target[0].value = escape(text);
    const textTyped = $(this).serialize();

    if(textTyped.length - 5 <= 140 && textTyped.length -5 !== 0) {
      $.ajax({
        type: "POST",
        url: '/tweets',
        data: textTyped,
        success: function(result){
          loadTweets();
          $('#testCounter').text('140');
        }
      });
      this.reset();
    } else {
      $('.new-tweet .err').slideToggle();
    }
  });
  loadTweets();
});










