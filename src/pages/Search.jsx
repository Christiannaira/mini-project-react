import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";


function Search({ keyword }) {


    const [books, setBooks] = useState([]);
    const navigate = useNavigate();
    const [startIndex, setStartIndex] = useState(0);
    const [maxResults, setMaxResults] = useState(12);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://www.googleapis.com/books/v1/volumes?q=${keyword}&orderBy=newest&startIndex=${startIndex}&maxResults=${maxResults}&key=AIzaSyDPQiYZHWTItrRbHt1NdY-S92y9gcBvAPw`
                );
                setBooks(response.data.items);
            } catch (error) {
                console.error("Error fetching books:", error);
            }
        };

        fetchData();
    }, [keyword, startIndex]);


    return (
        <>

            <div className="row mt-3">
                {books.map((book) => (
                    <div className="book col-md-2 text-center">
                        <div className="mb-3">
                            <div className="featured-book-img p-1">
                                <div className="innerblock p-1">
                                    <img
                                        src={book.volumeInfo?.imageLinks?.smallThumbnail}
                                        alt={`${book.volumeInfo.title} Book Cover`}

                                        title={book.volumeInfo.title}
                                        height={"310px"}
                                        width={"100%"}
                                        onClick={() => navigate(`/bookdetails/${book.id}`)}
                                    />
                                </div>
                            </div>

                        </div>


                    </div>

                ))}

                <ul class="pagination justify-content-center">

                    <li class="page-item" onClick={() => {
                        setStartIndex(0);
                        setMaxResults(12);
                    }}><a class="page-link" href="javascript:void(0);">1</a></li>
                    <li class="page-item" onClick={() => {
                        setStartIndex(13);
                        setMaxResults(12);
                    }}><a class="page-link" href="javascript:void(0);">2</a></li>
                    <li class="page-item" onClick={() => {
                        setStartIndex(25);
                        setMaxResults(12);
                    }}><a class="page-link" href="javascript:void(0);">3</a></li>
                    <li class="page-item" onClick={() => {
                        setStartIndex(37);
                        setMaxResults(12);
                    }}><a class="page-link" href="javascript:void(0);">4</a></li>

                    <li class="page-item" onClick={() => {
                        setStartIndex(48);
                        setMaxResults(12);
                    }}><a class="page-link" href="javascript:void(0);">5</a></li>

                    <li class="page-item" onClick={() => {
                        setStartIndex(60);
                        setMaxResults(12);
                    }}><a class="page-link" href="javascript:void(0);">6</a></li>


                </ul>

            </div>

        </>
    )
}

export default Search;