import React from "react";
// import { Card } from "semantic-ui-react";

const Pagination = (props) => {
  const indexOfLastRecord = props.currentPage * props.recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - props.recordsPerPage;
  const pageNumbers = [...Array(props.nPages + 1).keys()].slice(1);

  const currentRecords = props.apiData.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );

  return (
    <nav className="relative mb-[80px] p-2 justify-center flex items-center">
      <ul className="pagination justify-content-center ">
        <li className="page-item">
          <a className="page-link" onClick={props.prevPage} href="/">
            Previous
          </a>
        </li>
        {pageNumbers.map((pageNumber) => (
          <li
            key={pageNumber}
            className={`page-item ${
              props.currentPage === pageNumber ? "active" : ""
            }`}
          >
            <a
              onClick={() => props.setCurrentPage(pageNumber)}
              className="page-link"
              href="/"
            >
              {pageNumber}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a className="page-link" onClick={props.nextPage} href="/">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
