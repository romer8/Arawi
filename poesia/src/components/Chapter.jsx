import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import  ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import './Chapter.css'
import Verses from './Verses';

const Chapter = () => {
    const params = useParams();
    const [verses, setVerses] = useState([]);
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
            const array_verses=array_decoded.filter((a,i)=>i%2===1);
            console.log(array_verses);
            setVerses(array_verses);
        };
        getChapter();
    }, []);
  return (
      
    <div className='h-full relative bg-white'>
        {/* <div className='absolute opacity-75	flex flex-row w-1/5 items-center bg-slate-900 h-full w-full lg:w-min lg:opacity-100'>
            <div className="flex-auto bg-neutral-900 w-12 h-full text-slate-50"></div>
            <div className="flex-auto bg-[#3A506B] w-12 h-full text-sm text-slate-50"></div>
        </div> */}
        <div className = 'flex flex-col h-full text-sm  items-center'>
            <Verses verses = {verses}/>
            {/* <ReactMarkdown remarkPlugins={[gfm]}>{content}</ReactMarkdown> */}
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