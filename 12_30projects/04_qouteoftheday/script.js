const quote = document.getElementById('quote');
const author = document.getElementById('author');
const refresh = document.getElementById('refresh')
const tweet = document.getElementById('tweet');


const api_url = "https://dummyjson.com/quotes/random";

async function getquote(url) {
    const response = await fetch(url);
    var data = await response.json();
    
    quote.innerHTML = data.quote;
    author.innerHTML = data.author;
    
    
}
refresh.addEventListener('click',()=>{
    getquote(api_url)
})

tweet.addEventListener('click',()=>{
    window.open("https://twitter.com/intent/tweet?text=Hello%20world","Tweet Window","width=600,height=300")
})

getquote(api_url)