// API //
const randomURL = "https://api.quotable.io/quotes/random"
const baseURL = "https://api.quotable.io"



//Functions


// Function that grabs random quote
function generateRandomQuote()
    {fetch(randomURL)
    .then((res) => res.json())
    .then((data) => {
    //where we can work weith data recieved from the API
    renderQuote(data)
})};

// function that renders the quote from the dom
//function renderQuote(quote){
    generateRandomQuote((quote) => {
        console.log('Random Quote:', quote)
        .then((data) => {
            if (data.length > 0) {
                const quote = data[0];
                callback(quote.content, quote.author);
            }
            console.log(quote.author)
        });});

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
console.log(quote)
    // alter the HTML inside the div
    quotediv.innerHTML = `
        <h4>${quote[0].content}</h4>
        <h3>${quote[0].author}</h3>`;
}

// randomMovie(data) 
//}
//const quotediv = 















//const url2 = "https://api.quotable.io/quotes?limit:50"

//fetch(url2)
//.then((res) => res.json())
//.then((data) => console.log(data))


