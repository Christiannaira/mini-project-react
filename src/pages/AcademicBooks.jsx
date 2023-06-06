import { useEffect, useState } from "react";
import axios from "axios";
import FeaturedDetails from "./FeaturedDetails";

function Academics() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/books/v1/volumes?q=best-books&orderBy=newest&maxResults=24&key=AIzaSyCiDFODkwxGJbB7hdTCoQoiYoGRzJx7bDE"
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

          <h2>ACADEMIC BOOKS</h2>

          <div className="row mt-3">

            {books.map((book) => (

              <div className="book col-lg-2 text-center">

                <div className="mb-3">

                  <div className="featured-book-img p-1">
                    <div className="inner-block p-1">
                      <img src={book.volumeInfo.imageLinks.smallThumbnail} alt={`${book.volumeInfo.title} Book Cover`} onClick={() => handleBookClick(book)} title={book.volumeInfo.title} height={'310px'} width={'100%'} />
                    </div>
                  </div>

                  {/* <div className="text-white featued-book-text text-uppercase">
                    <h5 className="">{book.volumeInfo.title}</h5>
                    <h5> Author: {book.volumeInfo.authors}</h5>
                  </div> */}

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}

export default Academics;
