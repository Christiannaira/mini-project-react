import React, { useState, useEffect } from "react";
import axios from "axios";
import MysteryDetails from "./MysteryDetails";

const MysteryBook = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/books/v1/volumes?q=mystery&orderBy=newest&key=AIzaSyCiDFODkwxGJbB7hdTCoQoiYoGRzJx7bDE"
        );
        setBooks(response.data.items);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchData();
  }, [MysteryBook]);

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const handleGoBack = () => {
    setSelectedBook(null);
  };

  if (selectedBook) {
    return <MysteryDetails book={selectedBook} goBack={handleGoBack} />;
  }

  return (
    <div className="row">
      {books.map((book) => (
        <div key={book.id} className="book col-lg-4 col-md-6 col-sm-12">
          <div className="mb-3">
            <div className="text-white">
              <h5 className="">{book.volumeInfo.title}</h5>
              {book.volumeInfo.authors && (
                <p className="">Author: {book.volumeInfo.authors.join(", ")}</p>
              )}
            </div>
            {book.volumeInfo.imageLinks && (
              <img
                className="img-thumbnail fluid"
                src={book.volumeInfo.imageLinks.thumbnail}
                alt="Book Cover"
                onClick={() => handleBookClick(book)}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MysteryBook;
