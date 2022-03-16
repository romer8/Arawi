import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Poem from './Poem';

export const Poems = () => {
 
  const [poems, setPoems] = useState([])
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
          // return data
          setPoems(myPoems);

    };
    getPoems();
  }, []);
  return(
    <div className={`grid gap-2 grid-cols-1 text-sm font-black m-2 h-5/6 xl:grid-cols-4 xl:text-xl xl:h-screen lg:grid-cols-2 lg:text-lg lg:h-screen md:text-base md:grid-cols-2 md:m-8 md:gap-8 sm:text-sm sm:grid-cols-1 sm:m-2`} >
      {poems.map((poem, index) => (
        <Poem key={index} poem={poem} index={index}/>
        ))}
   </div>
  );
  

};
export default Poems
