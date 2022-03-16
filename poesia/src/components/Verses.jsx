import Verse from './Verse'

const Verses = ( { verses }) => {
    // const [newVerse, setfalseNewVerse] = useState('');

    // const separateText = () => {
    //     const newText = verse.split('\n').map(str => <p>{str}</p>);

    //     setfalseNewVerse(newText);
    // }
  return (
    <div className='h-full'>
    {verses.map((verse, index) => (

        <Verse key={index} verse={verse} />
      ))}
    </div>
    
  )
}

export default Verses