import React from 'https://esm.sh/react@18.2.0'
import ReactDOM from 'https://esm.sh/react-dom@18.2.0'

const quoteData =[
  {text:'"The purpose of lives is to be happy"',author: "Dalai Lama"},
  {text:'"Life is what happens when your bussy making other plans"',author: "Jhon Lennon"},
  {text:'"Get busy living or get busy dying"',author: "Stephen king"},
   {text:'"you only lives once,but if you do it right,once is enough"',author: "Mae west"},
   {text:'"Many of life failures are people who did not realize how close they were to success when they gave up"',author: "Thomas Edison"},
    {text:'"You can always edit a bad page. You cant edit a blank page"',author: "Jodi Picoult"},
   {text:'"You cant wait for inspiration. You have to go after it with a club."',author: "Jack London"},
   {text:'"I have never started a poem yet whose end I knew. Writing a poem is discovering."',author: "Robert Frost"},
   {text:'"If there is a book that you want to read, but it hasnt been written yet, then you must write it."',author: "Toni Morrison"},
   {text:'"I get a lot of letters from people. They say, "I want to be a writer. What should I do?" I tell them to stop writing to me and get on with it."',author: "Ruth Rendell"},
]

const QuoteBox = ({ quote,handleNewQuote}) => (
<div id="quote-box">
  <p id="text">{quote.text}</p>
  <h2 id="author">{quote.author}</h2>
  <div class="actions">
    <button
      id="new-quote"
      class="button"
      onClick={handleNewQuote}
      >
      New Quote
    </button>
    <a
      href="https://twitter.com/intent/tweet"
      id="tweet-quote"
      target="_blank"
      >
      Tweet
    </a>
  </div>
  </div>
); 

const getRandomIndex = () =>
Math.round(Math.random() * ((quoteData.length-1)-0) + 0);
const App = () => {
  const [quote, setQuote] = React.useState(quoteData[getRandomIndex()])
  const handleNewQuote = () => {
    setQuote(quoteData[getRandomIndex()])
 }
  
  return (
   <div class="main">
     <QuoteBox quote={quote} handleNewQuote={handleNewQuote} />
      </div>
  )
}
  ReactDOM.render(<App />,document.querySelector("#app"))

