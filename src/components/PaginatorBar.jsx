import React from "react";
import Pagination from "react-bootstrap/Pagination";

const PaginatorBar = ({ page, setPage }) => {
  let rowIndex = Math.trunc(page / 5);
  let buttons = [];

  for (let x = 0; x < 6; x++) {
    if(x + rowIndex * 5 >31)continue
    if (x + rowIndex * 5 === page) {
      buttons.push(<Pagination.Item active>{page + 1}</Pagination.Item>);
    } else {
      buttons.push(
        <Pagination.Item onClick={() => setPage(x + rowIndex * 5)}>
          {x + rowIndex * 5 + 1}
        </Pagination.Item>
      );
    }
  }

  return (
    <Pagination>
      {page !== 0 ? (
        <>
          <Pagination.First onClick={() => setPage(0)} />
          <Pagination.Prev onClick={() => setPage(page - 1)} />
        </>
      ) : (
        <></>
      )}
      {buttons[0]}
      {buttons[1]}
      {buttons[2]}
      {buttons[3]}
      {buttons[4]}
      {page !== 31 ? ( // end of pages
        <>
          <Pagination.Next onClick={() => setPage(page + 1)} />
          <Pagination.Last onClick={() => setPage(31)} />
        </>
      ) : (
        <></>
      )}
    </Pagination>
  );
};

export default PaginatorBar;
