// API //
const url = "https://api.quotable.io/quotes/random"





//Functions
fetch(url)
.then((res) => res.json())
.then((data) => console.log(data))
 

