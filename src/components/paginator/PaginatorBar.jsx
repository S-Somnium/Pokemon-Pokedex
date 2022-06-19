import React from "react";
import Pagination from "react-bootstrap/Pagination";

const finalPage = 43 // after this pages we dont have all the images :(

const PaginatorBar = ({ page, setPage }) => {
  let rowIndex = Math.trunc(page / 5);
  let buttons = [];

  // we need dont reactMemo because each time we change the page the buttons change anyway.
  for (let x = 0; x < 6; x++) { // creating the buttons 
    if(x + rowIndex * 5 >finalPage)continue
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
      {page !== finalPage ? ( 
        <>
          <Pagination.Next onClick={() => setPage(page + 1)} />
          <Pagination.Last onClick={() => setPage(finalPage)} />
        </>
      ) : (
        <></>
      )}
    </Pagination>
  );
};

export default PaginatorBar;
