import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'
import JsonData from '../MOCK_DATA.json'
import Card from 'react-bootstrap/Card'
import classes from './product.module.css'
const Product = () => {
  const [pageNumber, SetPageNumber] = useState(0);
  const [NoOfItems, setItems] = useState(JsonData.slice(0, 60));

  const PagePerItems = 10;
  const pageVisted = PagePerItems * pageNumber;
  const displayItems =NoOfItems.slice(pageVisted, pageVisted + PagePerItems)
    .map((item) => {
      return (
        <>
          <Card className={`d-inline-flex flex-direction-row ${classes.card}`} style={{width: '18rem'}}>
            <Card.Body>
              <p>{item.firstName}</p>
              <p>{ item.lastName}</p>
              <p> {item.email}</p>
            </Card.Body>
          </Card>
        </>
      )
    })
   

  const pageCount = Math.ceil(NoOfItems.length / PagePerItems);
  const changePage = ( {selected}) => {
    SetPageNumber(selected)
  }
  return (
    <>
      <div className={classes.totalCards}>
      {displayItems}
      </div>
      
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={classes.paginationBtn}
        previousLinkClassName={classes.paginationPrev}
        nextLinkClassName={classes.paginationNext}
        disabledClassName={"paginationDisabled"}
        activeClassName={classes.paginationActive}
      />

    </>
  )
}

export default Product
