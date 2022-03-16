import { useState } from "react";
import Line from "./Line";

const Verse = ({ verse } ) => {
 

  return (
    <div className="flex flex-col h-full font-mono p-4">
      {verse.split('\n').map(str => <Line line= {str} />)}
    </div>
  )
}

export default Verse
