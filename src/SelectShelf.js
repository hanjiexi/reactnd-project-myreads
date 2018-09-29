import React from 'react';

function SelectShelf(props) {
  return (
    <div className="book-shelf-changer">
      <select>
        <option value="move" disabled>Move to...</option>
        {props.shelves.map(s => (
          <option value={s}>{props.shelfName(s)}</option>
        ))}
        <option value="none">None</option>
      </select>
    </div>
  );
}

export default SelectShelf;