import { useState, useEffect } from "react";
import axios from "axios";

function Search({ keyword }) {


    const [books, setBooks] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://www.googleapis.com/books/v1/volumes?q=${keyword}&orderBy=newest&maxResults=12&key=AIzaSyDPQiYZHWTItrRbHt1NdY-S92y9gcBvAPw`
                );
                setBooks(response.data.items);
            } catch (error) {
                console.error("Error fetching books:", error);
            }
        };

        fetchData();
    }, [keyword]);


    return (
        <>

            <div className="row mt-3">
                {books.map((book) => (
                    <div key={book.id} className="book col-lg-2">

                        <div className="featured-img text-center p-1">
                            <div className="innerblock p-1">
                                {book.volumeInfo.imageLinks && (
                                    <img
                                        className=""
                                        src={book.volumeInfo.imageLinks.smallThumbnail}
                                        alt="Book Cover"
                                        onClick={() => handleBookClick(book)} height={'300px'} width={'100%'}
                                    />
                                )}
                            </div>

                        </div>


                    </div>

                ))}
            </div>

        </>
    )
}

export default Search;