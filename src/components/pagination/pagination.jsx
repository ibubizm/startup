import React, { useContext, useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { Context } from '../../context/conntext'
import { Card } from '../card/card'
import './pagination.scss'
import back from './back.svg'
import next from './next.svg'

const Items = ({ currentItems }) => {
  return (
    <>
      {currentItems &&
        currentItems.map((rep) => (
          <Card
            key={rep.id}
            link={rep.html_url}
            name={rep.name}
            description={rep.description}
          />
        ))}
    </>
  )
}

export function PaginatedItems({ itemsPerPage }) {
  const [currentItems, setCurrentItems] = useState(null)
  const [pageCount, setPageCount] = useState(0)
  const { repos: items } = useContext(Context)
  const [itemOffset, setItemOffset] = useState(0)

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage
    setCurrentItems(items.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(items.length / itemsPerPage))
  }, [itemOffset, itemsPerPage, items])

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length
    setItemOffset(newOffset)
  }

  return (
    <>
      <Items currentItems={currentItems} />
      <div className="bottom">
        <div>
          {currentItems &&
            `${itemOffset + 1} - ${itemOffset + currentItems.length} of ${
              items.length
            } items`}
        </div>
        <ReactPaginate
          breakLabel="..."
          nextLabel={<img src={next}></img>}
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel={<img src={back}></img>}
          renderOnZeroPageCount={null}
          containerClassName={'pagination'}
          previousLinkClassName={'pagination__link'}
          nextLinkClassName={'pagination__link'}
          disabledClassName={'pagination__link--disabled'}
          activeClassName={'pagination__link--active'}
        />
      </div>
    </>
  )
}
