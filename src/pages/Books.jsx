import ArrowRight from "../assets/arrow-right.png";
import React, { useState, useEffect } from "react";
import axios from "axios";
import MysteryBook from "./MysteryBook";
import AcademicBooks from "./AcademicBooks";
import BooksDetails from "./BooksDetails";

function Books() {


  return (
    <>
      <section className="books" id="books">
        <div className="container books-content">


          {/*category 2*/}


          {/* <MysteryBook /> */}


          {/* <AcademicBooks /> */}

        </div>
      </section>
    </>
  );
}

export default Books;
