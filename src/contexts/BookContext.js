import React, { useState, createContext } from "react";
const { uuid } = require("uuidv4");

export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, setBooks] = useState([
    { title: "Suttree", author: "Cormac McCarthy", id: 1 },
    { title: "All the Pretty Horses", author: "Cormac McCarthy", id: 2 }
  ]);
  const addBooks = (title, author) => {
    setBooks([...books, { title, author, id: uuid() }]);
  };

  const removeBooks = id => {
    setBooks(books.filter(book => book.id !== id));
  };
  return (
    <BookContext.Provider value={{ books, addBooks, removeBooks }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
