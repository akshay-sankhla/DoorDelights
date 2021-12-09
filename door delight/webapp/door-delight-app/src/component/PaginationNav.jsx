import React from "react";

function PaginationNav(props) {
  return (
    <nav
      aria-label="Page navigation example"
      style={{
        marginRight: "25px",
        fontSize: "25px",
      }}
    >
      <ul className="pagination justify-content-end">
        <li className="page-item">
          <div
            className="page-link"
            style={{ color: "black" }}
            tabIndex="-1"
            onClick={(e) => props.changePageIndex(props.pageIndex - 1)}
          >
            Previous
          </div>
        </li>
        {[...Array(Math.floor(props.numOfPages)).keys()].map((i) => (
          <li key={i} className="page-item">
            <div
              className="page-link"
              style={{ color: "black" }}
              onClick={(e) => props.changePageIndex(i)}
            >
              {i + 1}
            </div>
          </li>
        ))}
        <li className="page-item">
          <div
            className="page-link"
            style={{ color: "black" }}
            onClick={(e) => props.changePageIndex(props.pageIndex + 1)}
          >
            Next
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default PaginationNav;
