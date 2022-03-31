import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import QRCode from "react-qr-code";

import { romanize } from 'romans';
import { useState } from 'react';
import { GiRead } from 'react-icons/gi';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { TiArrowBack } from 'react-icons/ti';



const Poem = ( { poem, index}) => {
    const location = useLocation();
    const [isFlipped, setIsFlipped] = useState(false);
  
    const defineFlip = () => {
      setIsFlipped(!isFlipped);
    }
  
    return(
        <div className='relative'>
            <div className= {isFlipped ? "flipped scale-x-[-1] duration-700" : "scale-x-[1] duration-700"} >
                <div className= {`flex flex-col justify-center items-center bg-white ${(index % 2 > 0) ? 'bg-stone-900' : 'bg-stone-700'} font-mono square rounded-lg sm:hs-auto sm:text-sm`} >
                    <div className='flex flex-col justify-center items-center text-white p-3 w-full h-full sm:text-sm '>
                        { isFlipped ?
                            <div className='flex flex-col justify-center items-center text-white space-y-4 w-full scale-x-[-1]' onClick={defineFlip}>
                               <div className='flex pt-px cursor-pointer'>
                                    <span className='text-5xl' >{romanize(index+1)}</span>
                                    <span className='text-lg flex justify-end' >{poem.name.split('.')[0]}</span>
                                </div>
                                <p className='p-3 text-center'>With this utility you generate a 16 character output based on your input of numbers and upper 
                                    and lower case letters.  Random strings can be unique. Used in computing, a random string generator 
                                    can also be called a random character string generator. This is an important tool if you want to 
                                    generate a unique set of strings. The utility generates a sequence that lacks a pattern and is random.</p>
                                <div className='flex pt-px'>
                                    <Link to={`${location.pathname}/${poem.name}`} >
                                        <GiRead className="h-12 w-12"/>
                                    </Link>
                                    <TiArrowBack className="h-12 w-12" onClick={defineFlip}/>
                                </div>
                            </div>                        
                            :
                            <div className='flex flex-col justify-center items-center text-white space-y-4 w-full h-full'>

                                <img src="https://raw.githubusercontent.com/libgit2/libgit2sharp/master/square-logo.png" alt="" />
                                <div className='flex pt-px cursor-pointer'>
                                    <Link to={`${location.pathname}/${poem.name}`} >
                                        <GiRead className="h-12 w-12"/>
                                    </Link> 
                                    <BiMessageSquareDetail className="h-12 w-12" onClick={defineFlip}/>
                                </div>
                            </div>

                        }
                    </div>
                </div>
            </div>

        </div>

    )




};

export default Poem;
