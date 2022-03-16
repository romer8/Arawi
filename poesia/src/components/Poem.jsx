import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import QRCode from "react-qr-code";

import { romanize } from 'romans';
import { useState } from 'react';
import { FaWhatsapp, FaQrcode } from 'react-icons/fa';
import { FiFacebook } from 'react-icons/fi';


const Poem = ( { poem, index}) => {
    const location = useLocation();
    const [isFlipped, setIsFlipped] = useState(false);

  
    const defineFlip = () => {
      setIsFlipped(!isFlipped);
    }
  
    return(
        <div className='relative'>
            <div className= {isFlipped ? "flipped scale-x-[-1] duration-700" : "scale-x-[1] duration-700"} >
                <div className= {`flex flex-col justify-center items-center bg-white ${(index % 2 > 0) ? 'bg-stone-900' : 'bg-stone-700'} font-mono square sm:hs-auto sm:text-sm`} >
                    <div className='flex flex-col justify-center items-center text-white  w-full h-full sm:text-sm '>
                        { isFlipped ? 
                            <QRCode value={`${location.pathname}/${poem.name}`} onClick={defineFlip} />
                            :
                            <div className='flex flex-col justify-center items-center text-white space-y-4 w-full h-full'>
                                <Link to={`${location.pathname}/${poem.name}`} className='flex flex-col justify-center items-center text-white space-y-4 w-full'>  
                                    <h2 className='text-5xl' >{romanize(index+1)}</h2>
                                    <h2 className='text-lg' >{poem.name.split('.')[0]}</h2>
                                </Link>
                                <div className='flex pt-px'>
                                    <FaWhatsapp className="h-6 w-6"/>
                                    <FiFacebook className="h-6 w-6"/>
                                    <FaQrcode className="h-6 w-6" onClick={defineFlip}/>

                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
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
