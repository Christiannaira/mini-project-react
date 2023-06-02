import React from "react";

const AcademicDetails = ({ book, goBack }) => {
  return (
    <div className="book">
      <div className="mb-3">
        <button className="btn btn-light" onClick={goBack}>
          Go Back
        </button>
        <div className="text-white">
          <h3>{book.volumeInfo.title}</h3>
          {book.volumeInfo.imageLinks && (
            <img
              className="img-thumbnail fluid"
              src={book.volumeInfo.imageLinks.thumbnail}
            />
          )}

          {book.volumeInfo.authors && (
            <p>
              {" "}
              <h4>Author:</h4> {book.volumeInfo.authors.join(", ")}
            </p>
          )}
          {book.volumeInfo.publishedDate && (
            <p>
              {" "}
              <h4>Published Date:</h4> {book.volumeInfo.publishedDate}
            </p>
          )}
          {book.volumeInfo.description && (
            <p className="">
              <h4>Description:</h4> {book.volumeInfo.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AcademicDetails;
