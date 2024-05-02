import React, { useEffect, useState } from 'react';
import './Books.css';

function Books() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    fetch('https://softwium.com/api/books')
      .then(response => response.json())
      .then(data => {
        // Get the first 5 books
        const firstFiveBooks = data.slice(0, 5);
        setBooks(firstFiveBooks);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleBookClick = (bookId) => {
    fetch(`https://softwium.com/api/books/${bookId}`)
      .then(response => response.json())
      .then(data => {
        setSelectedBook(data);
      })
      .catch(error => console.error('Error fetching book details:', error));
  };

  const handlePlaceOrder = () => {
    // Add logic to place order
    alert(`Order placed for ${selectedBook.title}`);
    setSelectedBook(null);
  };

  return (
    <div className="container">
      {books.map(book => (
        <div className="card" key={book.id} onClick={() => handleBookClick(book.id)}>
          <h3>{book.title}</h3>
        </div>
      ))}
      {selectedBook && (
        <div className="popup">
          <h2>{selectedBook.title}</h2>
          <p>ISBN: {selectedBook.isbn}</p>
          <p>Page Count: {selectedBook.pageCount}</p>
          <p>Authors: {selectedBook.authors.join(', ')}</p>
          <button className="closeButton" onClick={() => setSelectedBook(null)}>Close</button>
          <button className="orderButton" onClick={handlePlaceOrder}>Place Order</button>
        </div>
      )}
    </div>
  );
}

export default Books;
