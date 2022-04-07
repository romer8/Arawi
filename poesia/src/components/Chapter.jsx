import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import Markdown from 'markdown-to-jsx';

import './Chapter.css'
import Verses from './Verses';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { FaWhatsapp, FaQrcode } from 'react-icons/fa';
import { FiFacebook } from 'react-icons/fi';


const Chapter = () => {
    const navigate = useNavigate();

    const params = useParams();
    // const [verses, setVerses] = useState([]);
    const [verses, setVerses] = useState('');
    const [title, setTitle] = useState('');

    useEffect(() => {
        const getChapter =  async () => {
            const response = await axios({
                method:"get",
                url: `https://api.github.com/repos/romer8/Arawi/contents/backend/Books/${params.code}/${params.chapter}`,
                headers: {
                        Authorization: `bearer ${
                        process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
                        }`,
                }
            });
            
            const encoded = response.data.content;
            const decoded = decodeURIComponent(escape(window.atob( encoded )));
            console.log(decoded);
            setVerses(decoded)
            const array_decoded = decoded.split("```");
            const title = array_decoded[0].split('##')[1]
            setTitle(title);
            // const array_verses=array_decoded.filter((a,i)=>i%2===1);
            // console.log(array_verses);
            // setVerses(array_verses);
        };
        getChapter();
    }, []);
  return (
      
    // make the title bar always to be on top after the header please
    <div className='h-full relative'>
        {/* <div className='opacity-25 absolute z-0 bg-transparent p-2 left-2 rounded-md h-full w-12 space-y-6 text-slate-50 lg:bg-slate-800'>

        </div> */}
        <div className='fixed flex flex-col items-center bg-zinc-900 p-2 top-56 bottom-56 left-2 rounded-md h-fit space-y-6 text-slate-50 opacity-75 lg:w-min'>
                <FaWhatsapp className="h-6 w-6 cursor-pointer"/>
                <FiFacebook className="h-6 w-6 cursor-pointer"/>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
        </div>
        
        <div className = 'flex flex-col h-full text-sm items-center'>
            <div className = 'mt-4 bg-zinc-900 flex flex-row h-full text-sm items-center w-full' >
                <div className='w-full font-bold text-white p-2 cursor-pointer'>  
                    <span className='flex bg-cyan-900 p-2 rounded-md w-fit items-center space-x-4' onClick={() => navigate(-1)}>
                        <IoIosArrowBack/>{params.chapter.split('.')[0]}
                    </span>
                </div>
                <h2 className='w-full font-bold bg-zinc-900 text-white p-2 text-center lg:w-1/2 rounded-md lg:bg-neutral-700'>{title}</h2>
                <div className='w-full font-bold'></div>
            </div>
            {/* <Verses verses = {verses}/> */}
            <div className='h-full space-y-2 mt-4 backdrop-sepia-0 bg-white/30 flex flex-col font-mono'>
                <Markdown 
                    options={{ 
                        forceBlock: true,
                        wrapper: React.Fragment,            
                        overrides: {
                            blockquote: {
                                props: {
                                    className: 'hidden',
                                },
                            },
                            code:{
                                props:{
                                    className:'text-center'
                                },
                            }
                        }, 
                        
                    }}
                >
                    {verses}
                </Markdown>

            </div>


        </div>

    </div>

  );
};

export default Chapter;
{/* <p className='rotate-90 mt-14 origin-bottom'>
{params.chapter}
</p>
<p className='rotate-90 mt-14 origin-bottom'>
{params.code}
</p> */}