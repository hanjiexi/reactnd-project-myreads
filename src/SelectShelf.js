import React from 'react';
import Shelves from './Shelves';

function SelectShelf(props) {
  return (
    <div className="book-shelf-changer">
      <select onChange={e => props.move(props.book, e.target.value)}>
        <option value="move" disabled>Move to...</option>
        {Shelves.t.map(s => (
          props.shelf === s
          ? <option selected key={s} value={s}>{Shelves.idToName(s)}</option>
          : <option key={s} value={s}>{Shelves.idToName(s)}</option>
        ))}
        <option value="none">None</option>
      </select>
    </div>
  );
}

export default SelectShelf;