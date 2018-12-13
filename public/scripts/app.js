
$(document).ready(function() {

// const tweetData = [
//   {
//     "user": {
//       "name": "Newton",
//       "avatars": {
//         "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
//         "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
//         "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
//       },
//       "handle": "@SirIsaac"
//     },
//     "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//     "created_at": 1461116232227
//   },
//   {
//     "user": {
//       "name": "Descartes",
//       "avatars": {
//         "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
//         "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
//         "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
//       },
//       "handle": "@rd" },
//     "content": {
//       "text": "Je pense , donc je suis"
//     },
//     "created_at": 1461113959088
//   },
//   {
//     "user": {
//       "name": "Johann von Goethe",
//       "avatars": {
//         "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
//         "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
//         "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
//       },
//       "handle": "@johann49"
//     },
//     "content": {
//       "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
//     },
//     "created_at": 1461113796368
//   }
// ];

function renderTweets(tweets) {
  for(var arr of tweets) {
    $('#tweets-container').append(createTweetElement(arr));
  }
}

function createTweetElement(tweets) {
  var twName = tweets.user.name;
  var avatar = tweets.user.avatars.small;
  var at = tweets.user.handle;
  var cont = tweets.content.text;
  var footer = tweets.created_at;

  var $tweet = $("<article>").addClass('content').html(`

      <header><img src=${avatar}><span class="tweetname">${twName}</span><span class="at">${at}</span>
      </header>
        <p>${cont}</p>
      <footer><span class="content">${footer}</span><img class=icon src="/images/flag.png"><img class=icon src="/images/refresh.png"><img class=icon src="/images/heart.png">
      </footer>

    `);
  return $tweet;
}

// var $form = $('#create-puppy-form').submit(function(event){
//   event.preventDefault();
//   $.post('/api/puppies', $form.serialize())
//     .then(function(puppy){
//       $puppies.append(renderPuppy(puppy));
//     });
// })

$(".new-tweet form").on("submit", function(event) {
  event.preventDefault();
  var textTyped = $(this).serialize();
  console.log(textTyped.length - 5);
  if(textTyped.length - 5 <= 140 && textTyped.length -5 !== 0) {
    $.ajax({
      type: "POST",
      url: '/tweets',
      data: textTyped,
      success: console.log("success")
    });
  } else {
    alert('Tweet cannot exceed 140 character or empty :(');
  }
});

function success(data) {
  console.log("success");
  renderTweets(data);
}

// function loadTweets() {
//   $.ajax('/tweets')
//     .then(function(data) {
//       success(data);
//     });
// }
  // function getPuppies(){
  //   $.ajax('/api/puppies')
  //     .then(function(puppies){
  //       puppies.forEach(function(puppy){
  //         $puppies.append(renderPuppy(puppy));
  //       });
  //     });
  // }


function loadTweets() {
  $.ajax({
  type: "GET",
  url: '/tweets',
  success: success
  });
}

loadTweets();
// renderTweets(tweetData);
});










