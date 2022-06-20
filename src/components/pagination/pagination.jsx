import React, { useContext, useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { Context } from '../../context/conntext'
import { Card } from '../card/card'
import './pagination.scss'
import back from './back.svg'
import next from './next.svg'
import { AnimatePresence, motion } from 'framer-motion'

import { BackDrop } from '../modal/backDrop'
import { Modal } from '../modal/modal'

const Items = ({ currentItems }) => {
  const [selectedItem, setSelectedItem] = useState(null)

  return (
    <>
      {currentItems &&
        currentItems.map((rep) => (
          <Card
            layoutId={rep.id}
            onClick={() => setSelectedItem(rep)}
            key={rep.id}
            link={rep.html_url}
            name={rep.name}
            description={rep.description}
          />
        ))}

      <AnimatePresence initial={false}>
        {selectedItem && (
          <BackDrop>
            <Modal id={selectedItem.id} setSelectedItem={setSelectedItem}>
              <motion.h2>{selectedItem.name}</motion.h2>
              <motion.p>{selectedItem.description}</motion.p>
              <motion.a
                href={selectedItem.html_url}
                target="_blank"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              >
                {selectedItem.html_url}
              </motion.a>
            </Modal>
          </BackDrop>
        )}
      </AnimatePresence>
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
