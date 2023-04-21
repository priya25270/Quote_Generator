import React, { useState, useEffect } from 'react';
import './style.css';
import Form from './twitter';
import Forms from './tumblr';
import Footer from './footer';
import Header from './header';
function Quote() {
  const [quote, setQuote] = useState({});
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
  const handleNextQuote = () => {
    const colors = [ '#16a085','#27ae60','#2c3e50','#f39c12','#e74c3c','#9b59b6','#FB6964','#342224','#472E32','#BDBB99','#77B1A9','#73A857'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBackgroundColor(randomColor);
    fetch();
  }; 
  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then(response => response.json())
      .then(data => setQuote(data))
      .catch(error => console.log(error));
  }, []);
 
  function generateQuote() {
    fetch("https://api.quotable.io/random")
      .then(response => response.json())
      .then(data => setQuote(data))
      .catch(error => console.log(error));
  }
 return (
    <div className='quote-generator' style={{ height: '100vh', backgroundColor}} >
    <Header/>
      {quote.content && (
        <div className='quote-box'>
          <div className='quote-text'><h2>"{quote.content}"</h2></div>
          <div className='quote-author'><p>-{quote.author}</p></div>
          <div className='button'><button onClick={generateQuote} onMouseUp={handleNextQuote}>New quote</button></div>
          <Form/>
          <Forms/>
          </div>
      )}
   <Footer/>
         </div>
  );
}
export default Quote;