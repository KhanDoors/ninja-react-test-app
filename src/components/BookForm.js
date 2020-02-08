import React, { useState, useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const BookForm = () => {
  const { addBooks } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    addBooks(title, author);
    setAuthor("");
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Book Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Book Author"
        value={author}
        onChange={e => setAuthor(e.target.value)}
        required
      />
      <input type="submit" value="add book" />
    </form>
  );
};

export default BookForm;
