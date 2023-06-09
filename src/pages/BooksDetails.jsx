import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

/*all books details*/

const BooksDetails = () => {
  const [book, setBook] = useState({});


  const { id } = useParams();

  useEffect(() => {

    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes/${id}`
        );
        setBook(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBookDetails();
  }, [id]);

  return (
    <>

      <div className="book-details m-5 p-5 text-white ">

        <div className="book-content container d-md-flex">
          <div className="books-img mt-3 me-4 p-1">
            <div className="innerblock p-1">
              <img
                className=""
                src={book.volumeInfo?.imageLinks?.smallThumbnail}
                alt={`${book.volumeInfo?.title} Book Cover`}
                title={`${book.volumeInfo?.title} Book Cover`}
                width="300px"
              />
            </div>

          </div>

          <div className="books-txt mt-3 bg-dark p-5">
            <h1>{book.volumeInfo?.title}</h1>

            <h3 className="author"><strong>Author:</strong> {book.volumeInfo?.authors?.join(", ")} &nbsp;&nbsp;  <strong>Publish Date:</strong> {book.volumeInfo?.publishedDate}</h3>

            <h4 className="genre"><strong>Genres:</strong> {book.volumeInfo?.categories?.join(", ")}</h4>

            <h4 className="summary mt-5"><strong>Brief Summary:</strong></h4>
            <p
              className=""
              dangerouslySetInnerHTML={{ __html: book.volumeInfo?.description }}
            />
            <Link to="/" className="btn btn-dark"><i class='bx bx-arrow-back'></i></Link>
          </div>

        </div>


      </div>
    </>

  );
};

export default BooksDetails;
