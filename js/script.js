/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
By Andre Otte
******************************************/
// Script fail

// Generates random quote
function getRandomQuote(arr) {
  var item = arr[Math.floor(Math.random()*arr.length)];
  return item; //This returns an object */
}

// Sends string to html file to print to page
function printQuote () {
  var randomQuote = getRandomQuote(quotes);
  var html = '<p class="quote">' + randomQuote.quote + '</p>' + '<p class="source">' + randomQuote.source;

  // Optional 'citation' property to add to string
  if ('citation' in randomQuote) {
    html += '<span class="citation">' + randomQuote.citation + '</span>';
  }

  // Optional 'year' property to add to string
  if ('year' in randomQuote) {
    html += '<span class="year">' + randomQuote.year + '</span></p>';
  }

  // Optional 'category' property to add to the string
  if ('category' in randomQuote) {
    html += '<p class="category">' + randomQuote.category +  '</p>';
  }

  document.getElementById("quote-box").innerHTML = html;

  // Set random background color - random hex generator from css-tricks.com
  // https://css-tricks.com/snippets/javascript/random-hex-color/
  var randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = '#' + randomColor;
}

printQuote();

// Button to show another quote
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
