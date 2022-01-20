import { useState, useEffect } from 'react';
import axios from 'axios';

const Content = () => {
    const [books, setBook] = useState([])

    useEffect(() => {
        console.log(process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN);

        const getBooks =  async () => {
            const response = await axios({
                method:"get",
                url: 'https://api.github.com/repos/romer8/Arawi/contents/backend/Books/sin_protocolo/d1.rst',
                headers: {
                        Authorization: `bearer ${
                        process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
                        }`,
                }
            });
            console.log(response.data.content);
            // return data
         setBook("hola")

      };
      getBooks();
    }, []);
    

    
    // const getBooks =  async () => {
    //     const bookFromGitHub = await fetchGithubData ()
    //     setBook("hola")
    //   };
    //   getBooks();
    // }, []);
    

    // const fetchGithubData = async () =>{
    //     const response = await axios({
    //         method:"get",
    //         url: 'https://api.github.com/repos/romer8/Arawi',
    //         headers: {
    //                 Authorization: `bearer ${
    //                 process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
    //                 }`,
    //         }
    //     });
    //     console.log(response.data);
    //     // return data

    // } 
    return (
        <div>
            <h1>hola</h1>
        </div>
    )
}

export default Content
