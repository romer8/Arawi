import React from 'react';
import { romanize } from 'romans';
const Poem = ( { poem, index }) => {

    return(
        <div className='flex flex-col justify-center items-center bg-white  font-mono bg-black'>
        {/* <Link to={`/book/${book.code}`} className='h-full rounded mb-20 shadow'>   */}
        {/* <img src={book.coverimg} alt={poem.name} className='h-full rounded mb-20 shadow' /> */}
        {/* </Link> */}


        <div className='flex flex-col justify-center items-center text-white '>
            <h2>{romanize(index+1)}.</h2>
            <h2 >{poem.name}</h2>
            {/* className='lg:text-7xl md:text-5xl sm:text-3l text-3xl font-black mb-14' */}
        </div>
        </div>
    )

};

export default Poem;
