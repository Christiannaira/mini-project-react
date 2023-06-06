import { useEffect, useState } from "react";
import axios from "axios";
import FeaturedDetails from "./FeaturedDetails";

function FeaturedBooks() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState();

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

  // const handleGoBack = () => {
  //   setSelectedBook(null);
  // };

  // if (selectedBook) {
  //   return <FeaturedDetails book={selectedBook} goBack={handleGoBack} />;
  // }


  return (
    <>
      <section className="featured-books" id="featured-books">
        <div className="container featured-books-content">

          <h2>BEST BOOKS</h2>

          <div className="row mt-3">

            {books.map((book) => (

              <div className="book col-lg-2 text-center">

                <div className="mb-3">

                  <div className="featured-book-img p-1">
                    <div className="inner-block p-1">
                      <img src={book.volumeInfo.imageLinks.smallThumbnail} alt={`${book.volumeInfo.title} Book Cover`} onClick={() => handleBookClick(book)} title={book.volumeInfo.title} height={'310px'} width={'100%'} data-bs-toggle="modal" data-bs-target="#myModal" />
                    </div>
                  </div>

                  {/*modal section layout*/}
                  <div className="modal" id="myModal">
                    <div className="modal-dialog modal-xl">
                      <div className="modal-content">

                        {/*modal header layout*/}
                        {/* <div className="modal-header">
                          <h1 className="modal-title">{selectedBook.volumeInfo.title}</h1>
                          <button className="btn-close" data-bs-dismiss="modal" type=""></button>
                        </div> */}

                        {/*modal body layout*/}
                        {/* <div className="modal-body">
                          <img src={selectedBook.volumeInfo.imageLinks.smallThumbnail} alt="" width={'300px'} />
                          <h1>{selectedBook.volumeInfo.authors.map(eachA => {
                            return eachA;
                          })}</h1>
                          <h4>{selectedBook.volumeInfo.description}</h4>
                        </div> */}

                        {/*modal footer layout*/}
                        <div className="modal-footer">

                        </div>
                      </div>
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

export default FeaturedBooks;
