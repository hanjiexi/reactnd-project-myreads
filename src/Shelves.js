const shelfIDs = ["currentlyReading", "wantToRead", "read"];

const name = (s) => {
  switch (s) {
    case "currentlyReading": return "Currently Reading";
    case "wantToRead": return "Want to Read";
    case "read": return "Read";
    default: return "None";
  }
}

export default {
  t: shelfIDs,
  idToName: name
}