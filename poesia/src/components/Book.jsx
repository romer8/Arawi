import { useState } from 'react'

const Book = ( { book } ) => {

  return (
    
    <div className='flex flex-col justify-center items-center bg-white h-screen font-mono py-40'>
        <img src={book.coverimg} alt={book.name} className='h-full rounded mb-20 shadow' />
        <div className='flex flex-col justify-center items-center'>
          <h2 className='text-2xl mb-2'>{book.name}</h2>
          <p className='mb-2'>{book.description}</p>
          <span>{book.author}</span>
        </div>
      </div>
  )

};
export default Book
