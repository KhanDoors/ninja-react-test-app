import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const Navbar = () => {
  const { books } = useContext(BookContext);

  return (
    <div className="navbar">
      <h1>Khandoor Reading List</h1>
      <p>{books.length} books on the List!</p>
    </div>
  );
};

export default Navbar;
