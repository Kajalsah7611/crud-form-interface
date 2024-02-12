// EntryGrid.js
import React from 'react';
import EachEntry from './EachEntry';

const EntryGrid = ({ entries, onDelete}) => {



  return (
<>
    <h2>Entries</h2>
    <div className="grid">
     
      {entries.map((entry, index) => (
        <EachEntry key={entry.id} entry={entry} onDelete={() => onDelete(index) }/>
      
      ))}
    </div>  </>
  );

  
};

export default EntryGrid;
