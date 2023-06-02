import ArrowRight from "../assets/arrow-right.png";
import React, { useState, useEffect } from "react";
import axios from "axios";
import MysteryBook from "./MysteryBook";
import AcademicBooks from "./AcademicBooks";
import BooksDetails from "./BooksDetails";

function Books() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/books/v1/volumes?q=self-help&orderBy=newest&key=AIzaSyDE2MnXJyfh-Ncs8nWDI262F82lHuQZQk4"
        );
        setBooks(response.data.items);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchData();
  }, [Books]);

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };
  const handleGoBack = () => {
    setSelectedBook(null);
  };
  if (selectedBook) {
    return <BooksDetails book={selectedBook} goBack={handleGoBack} />;
  }

  return (
    <>
      <section className="books" id="books">
        <div className="container books-content">
          {/*category 1*/}
          <div className="row romance-section">
            <div className="row-main-text">
              <h2>SELF-HELP BOOKS</h2>
              <img src={ArrowRight} alt="" width={"40px"} />
            </div>

            <div className="row">
              {books.map((book) => (
                <div key={book.id} className="book col-lg-4 col-md-6 col-sm-12">
                  <div className="mb-3">
                    <div className="text-white">
                      <h5 className="">{book.volumeInfo.title}</h5>
                      {book.volumeInfo.authors && (
                        <p className="">
                          Author: {book.volumeInfo.authors.join(", ")}
                        </p>
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
          </div>

          {/*category 2*/}

          <div className="row romance-section">
            <div className="row-main-text">
              <h2>MYSTERY BOOKS</h2>
              <img src={ArrowRight} alt="" width={"40px"} />
            </div>
          </div>
          <MysteryBook />

          {/*category 3*/}
          <div className="row romance-section">
            <div className="row-main-text">
              <h2>ACADEMICS BOOKS</h2>
              <img src={ArrowRight} alt="" width={"40px"} />
            </div>
          </div>
          <AcademicBooks />

          <div className="books-btn">
            <button className="btn btn-dark">
              SEE MORE CATEGORIES<i class="uit uit-angle-double-right"></i>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Books;
