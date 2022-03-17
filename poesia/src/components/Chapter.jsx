import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import  ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import './Chapter.css'
import Verses from './Verses';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const Chapter = () => {
    const navigate = useNavigate();

    const params = useParams();
    const [verses, setVerses] = useState([]);
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
            const array_decoded = decoded.split("```");
            const title = array_decoded[0].split('##')[1]
            setTitle(title);
            const array_verses=array_decoded.filter((a,i)=>i%2===1);
            console.log(array_verses);
            setVerses(array_verses);
        };
        getChapter();
    }, []);
  return (
      
    <div className='h-full relative'>
        {/* <div className='absolute opacity-75	flex flex-row w-1/2 items-center bg-slate-900 h-full w-full lg:w-min lg:opacity-100'>
            <div className="flex-auto bg-neutral-900 w-12 h-full text-slate-50"></div>
            <div className="flex-auto bg-[#3A506B] w-12 h-full text-sm text-slate-50"></div>
        </div> */}
        <div className = 'flex flex-col h-full text-sm items-center'>
            <div className = 'mt-4 bg-zinc-900 flex flex-row h-full text-sm items-center w-full lg:bg-white' >
                <div className='w-full font-bold text-white p-2 cursor-pointer'>  
                    <span className='flex bg-cyan-900 p-2 rounded-md w-fit items-center space-x-4' onClick={() => navigate(-1)}>
                        <IoIosArrowBack/>{params.chapter.split('.')[0]}
                    </span>
                </div>
                <h2 className='w-full font-bold bg-zinc-900 text-white p-2 text-center lg:w-1/2 rounded-md'>{title}</h2>
                <div className='w-full font-bold'></div>
            </div>
            <Verses verses = {verses}/>
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