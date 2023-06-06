import React, { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import axios from "axios";

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
    <div className="book-details m-5 p-5 text-white">
      <div className="book-content container border">
        <h3 className="m-3">{book.volumeInfo?.title}</h3>
        <div className="m-3">
          <p>
            <strong>Author:</strong> {book.volumeInfo?.authors?.join(", ")}
          </p>
          <p>
            <strong>Publish Date:</strong> {book.volumeInfo?.publishedDate}
          </p>
          <p>
            <strong>Genres:</strong> {book.volumeInfo?.categories?.join(", ")}
          </p>
        </div>

        <img
          className="m-3"
          src={book.volumeInfo?.imageLinks?.smallThumbnail}
          alt={`${book.volumeInfo?.title} Book Cover`}
          title={`${book.volumeInfo?.title} Book Cover`}
          width="200px"
        />

        <div className="m-3">
          <h5 className="fw-bolder mb-3">Description:</h5>
          <p
            className=""
            dangerouslySetInnerHTML={{ __html: book.volumeInfo?.description }}
          />
        </div>
      </div>
    </div>
  );
};

export default BooksDetails;
