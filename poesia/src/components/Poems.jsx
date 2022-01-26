import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Poem from './Poem';

export const Poems = () => {
 
  const [poems, setPoems] = useState([])
  const [colL, setColL] = useState()
  const [colM, setColM] = useState()
  const [colS, setColS] = useState()

  const params = useParams();


  useEffect(() => {
      console.log(params);
      const getPoems =  async () => {
          const response = await axios({
              method:"get",
              url: `https://api.github.com/repos/romer8/Arawi/contents/backend/Books/${params.code}`,
              headers: {
                      Authorization: `bearer ${
                      process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
                      }`,
              }
          });
          
          const myPoems = response.data
          console.log(myPoems);
          // return data
          setPoems(myPoems);
          setColL(Math.round(myPoems.length/2));
          console.log(colL,Math.round(myPoems.length/2));
          setColM(Math.round(colL/2));
          console.log(colM,Math.round(colL/2));
          setColS(Math.round(colM/2));
          console.log(colS,Math.round(colM/2));
    };
    getPoems();
  }, []);
  return(
    <div className={'grid grid-cols-'+colL+ ' gap-4 lg:text-lg lg:grid-cols-'+colL+ ' md:text-base md:grid-cols-'+colM+ ' sm:text-3sm sm:grid-cols-'+colS+ ' text-lg font-black m-8 h-screen'} >
      {poems.map((poem, index) => (
        <Poem key={index} poem={poem} index={index} />
        ))}
   </div>
  );
  

};
export default Poems
