var newQuote = document.getElementById("newQuote");
var twitter = document.getElementById("twitter");
var h1 = document.getElementById("quote");
var quoteSpace = document.getElementById("quoteSpace");
var authorSpace = document.getElementById("authorSpace");

function randomColor() {
  var r = Math.floor(Math.random() * (230 - 25 + 1)) + 25;
  var g = Math.floor(Math.random() * (230 - 25 + 1)) + 25;
  var b = Math.floor(Math.random() * (230 - 25 + 1)) + 25;
  var color = "rgb(" + r + ", " + g + ", " + b + ")";
  return color;
}

function getQuote() {
  $.getJSON("https://quotes.stormconsultancy.co.uk/random.json", function(data) {
    $.each(data, function(key, val) {
      if (key === "author") {
        authorSpace.textContent = val;
      } else if (key === "quote") {
        quoteSpace.textContent = val;
      }
    });
  });

}

function changeStyling() {
  var color = randomColor();
  document.body.style.background = color;
  newQuote.style.background = color;
  twitter.style.background = color;
  h1.style.color = color;
}

$(function() {
  $("#newQuote").click(function() {
    getQuote();
    changeStyling();
  });
});

$(function() {
  $("#link").click(function() {
    $(this).attr("href", 'https://twitter.com/intent/tweet?text=' + quoteSpace.textContent + " -" + authorSpace.textContent);
  });
});

getQuote();
changeStyling();