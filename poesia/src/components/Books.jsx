
import Book from './Book'

const Books = ({ books }) => {
  return (
    <div className='w-screen flex flex-row justify-center items-center flex-wrap lg:h-screen'>
      {books.map((book, index) => (
        <Book key={index} book={book} />
      ))}
    </div>
  )
}

export default Books
