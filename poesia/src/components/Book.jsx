import { useState } from 'react'
import { Link } from 'react-router-dom';
import './Book.css'

const Book = ( { book } ) => {

  return (
    
    <div className='flex flex-col justify-center items-center bg-white h-full font-mono py-20'>
      <div className='flex justify-center items-center h-full w-full book'>
          <div className="back"></div>
          <div className="page6"></div>
          <div className="page5"></div>
          <div className="page4"></div>
          <div className="page3"></div>
          <div className="page2"></div>
          <div className="page1"></div>
          <div className="front">
            <Link to={`/book/${book.code}`} className='h-full rounded mb-20 shadow'> 
              <img src={book.coverimg} alt={book.name} className='h-full w-full rounded mb-20 shadow ' />
           </Link>
          </div>

      </div>


        <div className='flex flex-col justify-center items-center'>
          <h2 className='text-2xl mb-2'>{book.name}</h2>
          <p className='mb-2'>{book.description}</p>
          <span>{book.author}</span>
        </div>
      </div>
  )

};
export default Book
