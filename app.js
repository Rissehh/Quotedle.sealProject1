// API //
const url = "https://api.quotable.io/quotes/random"
fetch(url)
.then((res) => res.json())
.then((data) => console.log(data))
 