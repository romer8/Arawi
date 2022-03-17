import Verse from './Verse'

const Verses = ( { verses }) => {
    // const [newVerse, setfalseNewVerse] = useState('');

    // const separateText = () => {
    //     const newText = verse.split('\n').map(str => <p>{str}</p>);

    //     setfalseNewVerse(newText);
    // }
  return (
    <div className='h-full space-y-2 mt-4 backdrop-sepia-0 bg-white/30'>
    {verses.map((verse, index) => (

        <Verse key={index} verse={verse} />
      ))}
    </div>
    
  )
}

export default Verses