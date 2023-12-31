// API //
const randomURL = "https://api.quotable.io/quotes/random";
const baseURL = "https://api.quotable.io";
const authorURL = "https://api.quotable.io/quotes?author=";

//Functions

// Function that grabs random quote
function generateRandomQuote() {
  fetch(randomURL)
    .then((res) => res.json())
    .then((data) => {
      //where we can work weith data recieved from the API
      renderQuote(data);
    });
}

// function that renders the quote from the dom
//function renderQuote(quote){
generateRandomQuote((quote) => {
  console.log("Random Quote:", quote).then((data) => {
    if (data.length > 0) {
      const quote = data[0];
      callback(quote.content, quote.author);
    }
    console.log(quote.author);
  });
});

fetch(randomURL)
  .then((res) => res.json())
  .then((data) => {
    console.log(data[0].author); // Logs the author's name
    console.log(data[0].content);
  });

// function that render the movie to the dom
function renderQuote(quote) {
  // grab the div.quote
  const quotediv = document.querySelector(".quote");
  console.log(quote);
  // alter the HTML inside the div
  quotediv.innerHTML = `
        <h4>${quote[0].content}</h4>
        <h3>${quote[0].author}</h3>`;
}

// function that allows the generate random button to generate random quotes
document
  .getElementById("RandomQuote")
  .addEventListener("click", generateRandomQuote);

// Search Quote By Author
function getQuote(authorName) {
  const url = `${authorURL}${authorName}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      //where we can work weith data recieved from the API
      renderAuthorQuote(data);
    });
}
getQuote("elon-musk");

// function that render the author quote to the dom
function renderAuthorQuote(quote) {
  // grab the div.quote
  const quotediv = document.querySelector(".quote");
  console.log(quote);
  // Check if the quote data is available
  if (quote.results && quote.results.length > 0) {
    // alter the HTML inside the div
    quotediv.innerHTML = `
            <h4>${quote.results[0].content}</h4>
            <h3>${quote.results[0].author}</h3>`;
  } else {
    // Display a message if no author or quote is found
    quotediv.innerHTML = `<p>No author found, please include the authors full name.</p>`;
  }
}

// function to handle the form submission
function handleSubmit(event) {
  // prevent the refreshing of the page from the form submission
  event.preventDefault();
  // grab the form from the event
  const form = event.target;
  // create a formData to access the form data
  const formData = new FormData(form);
  // grab the movieTitle
  const authorName = formData.get("authorName");
  // fetch the specified
  getQuote(authorName);
  // Reset the form after submission
  document.querySelector("form").reset();
}

// add the function to the form submission
document.querySelector("form").addEventListener("submit", handleSubmit);

// trying to use jquery 
$(document).ready(function () {
  $.ajax({
    url: "https://api.quotable.io/authors?sortBy=quoteCount&order=desc",
    type: "GET",
    success: function (response) {
      // Check if the response has results
      if (response.results && response.results.length > 0) {
        var authorsHtml = "";
        response.results.forEach(function (author) {
          authorsHtml +=
            "<p>" + author.name + " - Quotes: " + author.quoteCount + "</p>";
        });
        $("#authors-list").html(authorsHtml);
      } else {
        $("#authors-list").html("<p>No authors found.</p>");
      }
    },
    error: function () {
      $("#authors-list").html("<p>Error loading authors.</p>");
    },
  });
});

//const url2 = "https://api.quotable.io/quotes?limit:50"

//fetch(url2)
//.then((res) => res.json())
//.then((data) => console.log(data))
