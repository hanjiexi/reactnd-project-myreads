import React from 'react';

function SelectShelf(props) {
  return (
    <div className="book-shelf-changer">
      <select onChange={e => props.move(props.book, e.target.value)}>
        <option value="move" disabled>Move to...</option>
        {props.shelves.map(s => (
          props.currentShelf === s
          ? <option selected key={s} value={s}>{props.shelfName(s)}</option>
          : <option key={s} value={s}>{props.shelfName(s)}</option>
        ))}
        <option value="none">None</option>
      </select>
    </div>
  );
}

export default SelectShelf;