import { useEffect, useState } from "react";
import axios from "axios";
import FeaturedDetails from "./FeaturedDetails";

function FeaturedBooks() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/books/v1/volumes?q=web-development&orderBy=newest&key=AIzaSyDE2MnXJyfh-Ncs8nWDI262F82lHuQZQk4"
        );
        setBooks(response.data.items);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchData();
  }, [FeaturedBooks]);


  const handleBookClick = (book) => {
    setSelectedBook(book);
  };
  const handleGoBack = () => {
    setSelectedBook(null);
  };
  if (selectedBook) {
    return <FeaturedDetails book={selectedBook} goBack={handleGoBack} />;
  }


  return (
    <>
      <section className="featured-books" id="featured-books">
        <div className="container featured-books-content">
          <h2>BEST BOOKS</h2>

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
      </section>
    </>
  );
}

export default FeaturedBooks;
