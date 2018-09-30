import React from 'react';
import Shelves from './Shelves';

function SelectShelf(props) {
  return (
    <div className="book-shelf-changer">
      <select
        defaultValue={props.book.shelf}
        onChange={e => props.move(props.book, e.target.value)}
      >
        <option value="move" disabled>Move to...</option>
        {Shelves.t.map(s => (
          <option key={s} value={s}>{Shelves.idToName(s)}</option>
        ))}
      </select>
    </div>
  );
}

export default SelectShelf;