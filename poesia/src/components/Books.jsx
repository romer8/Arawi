
import Book from './Book'

const Books = ({ books }) => {
  return (
    <>
      {books.map((book, index) => (
        <Book key={index} book={book} />
      ))}
    </>
  )
}

export default Books
