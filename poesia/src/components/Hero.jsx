import React from 'react'
import {Link} from 'react-router-dom'
import Content from './Content';

const Hero = () => {
    return (
        <div className="bg-cover bg-right bg-hero-pattern h-screen flex flex-col justify-center items-center">
            <h1 className="lg:text-9xl md:text-7xl sm:text-5l text-3xl font-black mb-14">
                LLAKIYKAY
            </h1>
            <Link to='/content' element= {<Content/>} className='py-6 px-10 bg-yellow-500 rounded-full text-3xl hover:bg-yellow-300 transition duration-300 ease-in-out flex items-center animate-bounce'>
            Start Reading
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-4" viewBox="0 0 20 20" fill="currentColor">
               <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
            </svg>
            </Link>
        </div>
    )
}

export default Hero
