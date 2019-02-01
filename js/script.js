/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing



// Generates random quote
function getRandomQuote(arr) {
  var item = arr[Math.floor(Math.random()*arr.length)];
  return item; //This returns an object */
}

// Sends string to html file to print to page
function showQuote () {
  var randomQuote = getRandomQuote(quotes);
  var html = '<p class="quote">' + randomQuote.quote + '</p>' + '<p class="source">' + randomQuote.source;

  // Optional object property 'citation'
  if ('citation' in randomQuote) {
    html += '<span class="citation">' + randomQuote.citation + '</span>';
  }

  // Optional object property 'year'
  if ('year' in randomQuote) {
    html += '<span class="year">' + randomQuote.year + '</span></p>';
  }

  document.getElementById("quote-box").innerHTML = html;
}

showQuote();

// Button to show another quote
document.getElementById('loadQuote').addEventListener("click", showQuote, false);
