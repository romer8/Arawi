import { useState } from 'react'
import { Link } from 'react-router-dom';
import './Book.css'

const Book = ( { book } ) => {

  return (
    // <div className='flex'>
    //       <div className='flex flex-col justify-center items-center bg-white h-full font-mono py-4'>
    //   <div className='flex justify-center items-center h-96	w-96 book'>
    //       <div className="back w-60 bg-gray-800"></div>
    //       <div className="page6 w-60"></div>
    //       <div className="page5 w-60"></div>
    //       <div className="page4 w-60"></div>
    //       <div className="page3 w-60"></div>
    //       <div className="page2 w-60"></div>
    //       <div className="page1 w-60"></div>
    //       <div className="front">
    //         <Link to={`/book/${book.code}`} className='h-full rounded mb-20 shadow'> 
    //           <img src={book.coverimg} alt={book.name} className='h-full w-60 rounded mb-20 shadow ' />
    //        </Link>
    //       </div>

    //   </div>
    //     <div className='flex flex-col justify-center items-center py-5'>
    //       <h2 className='text-2xl mb-2'>{book.name}</h2>
    //       <p className='mb-2'>{book.description}</p>
    //       <span>{book.author}</span>
    //     </div>
    //   </div>
    // <div className='flex flex-col justify-center items-center bg-white h-full font-mono py-4'>
    //   <div className='flex justify-center items-center h-96	w-96 book'>
    //       <div className="back w-60 bg-gray-800"></div>
    //       <div className="page6 w-60"></div>
    //       <div className="page5 w-60"></div>
    //       <div className="page4 w-60"></div>
    //       <div className="page3 w-60"></div>
    //       <div className="page2 w-60"></div>
    //       <div className="page1 w-60"></div>
    //       <div className="front">
    //         <Link to={`/book/${book.code}`} className='h-full rounded mb-20 shadow'> 
    //           <img src={book.coverimg} alt={book.name} className='h-full w-60 rounded mb-20 shadow ' />
    //        </Link>
    //       </div>

    //   </div>
    //     <div className='flex flex-col justify-center items-center py-5'>
    //       <h2 className='text-2xl mb-2'>{book.name}</h2>
    //       <p className='mb-2'>{book.description}</p>
    //       <span>{book.author}</span>
    //     </div>
    //   </div>
      <div className='flex flex-col justify-center items-center bg-white h-full font-mono py-4'>
      <Link to={`/book/${book.code}`}>
        <div className='flex justify-center items-center h-96	w-96 book'>
            <div className="back w-60 bg-gray-800"></div>
            <div className="page6 w-60"></div>
            <div className="page5 w-60"></div>
            <div className="page4 w-60"></div>
            <div className="page3 w-60"></div>
            <div className="page2 w-60"></div>
            <div className="page1 w-60"></div>
            <div className="front">
              <div  className='h-full rounded mb-20 shadow'> 
                <img src={book.coverimg} alt={book.name} className='h-full w-60 rounded mb-20 shadow ' />
            </div>
            </div>
        </div>
      </Link>

        <div className='flex flex-col justify-center items-center py-5'>
          <h2 className='text-2xl mb-2'>{book.name}</h2>
          <p className='mb-2'>{book.description}</p>
          <span>{book.author}</span>
        </div>
      </div>
    // </div> 

      
  )

};
export default Book
