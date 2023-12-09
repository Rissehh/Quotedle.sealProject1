# Quotedle
### By Mike

DEPLOYED SITE: [Click here](https://quotedle-seal-project1.vercel.app/)

## Description of Project

> I am creating a quote website, the site will generate a random quote of the day. Users will also be able to search up quotes by their favourite authors or radomly generate a quote.

## Details about the API

API name = Quotable ... This API for more than 5000 famous quotes  There is no Auth or API Key and it is Https.

- `https://api.quotable.io/quotes/random`: This returns a random quote with the author name 

Sample Fetch/Ajax called:
```js
const url = "https://api.quotable.io/quotes/random"
fetch(url)
.then((res) => res.json())
.then((data) => console.log(data))
```

The Data I get back:
```json
[
  {
    "_id": "k1TVeBO_5Kh",
    "author": "Laurence J. Peter",
    "content": "An economist is an expert who will know tomorrow why the things he predicted yesterday didn't happen today.",
    "tags": [
      "Business"
    ],
    "authorSlug": "laurence-j-peter",
    "length": 107,
    "dateAdded": "2022-07-06",
    "dateModified": "2023-04-14"
  }
]
```

## Mockup

Here put a mix of text explanation plus a picture giving us an idea of the layout of your website.

#### Desktop View

![My Desktop View](https://i.imgur.com/KmL8BBz.png)

#### Mobile View

![My Mobile View](https://i.imgur.com/XJMp13z.png)

## Schedule of Work

|Day | Goal | What I did accomplish | ✔ 
|----|------|-----------------------| ✔  
| Sat | Create Readme, Deploy, Get Approval | | ✔ 
| Sun | Build fetch of data in JS file || ✔ 
| Mon | Render data from API on screen || ✔ 
| Tues| Build form for user to interact with || ✔ 
| Wed | wrap up functionality || ✔ 
|Thurs| mobile layout styling || ✔ 
| Fri | Desktop layout styling || ✔ 
| Sat | Present Project || ✔ 