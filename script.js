// script.js

const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Act as if what you do makes a difference. It does. - William James",
    "Happiness is not something ready made. It comes from your own actions. - Dalai Lama",
    "You miss 100% of the shots you don’t take. - Wayne Gretzky",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  ];
  
  const quoteBox = document.getElementById("quote-box");
  const newQuoteButton = document.getElementById("new-quote");
  
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }
  
  newQuoteButton.addEventListener("click", () => {
    const randomQuote = getRandomQuote();
    quoteBox.textContent = randomQuote;
  });
  