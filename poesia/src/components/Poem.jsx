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
                                    <FaQrcode className="h-6 w-6" onClick={defineFlip}/>
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
