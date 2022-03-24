
import Book from './Book'

const Books = ({ books }) => {
  return (
    <div className='w-screen h-screen flex flex-row justify-center items-center flex-wrap'>
      {books.map((book, index) => (
        <Book key={index} book={book} />
      ))}
    </div>
  )
}

export default Books
