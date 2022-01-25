import { useState, useEffect } from 'react';
import axios from 'axios';
import Books from './Books'

const Content = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        console.log(process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN);

        const getBooks =  async () => {
            const response = await axios({
                method:"get",
                url: 'https://api.github.com/repos/romer8/Arawi/contents/backend/Books/books.json',
                headers: {
                        Authorization: `bearer ${
                        process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
                        }`,
                }
            });
            
            const decodedContent = atob(response.data.content)
            const myBooks = JSON.parse(decodedContent);
            console.log(myBooks);
            // return data
         setBooks(myBooks.books);

      };
      getBooks();
    }, []);
    
    return (
        <div>
            <Books books= {books} />
        </div>
    )
}

export default Content
