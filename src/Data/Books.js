import raw from "./raw.json";

const library = raw.library.map(item => {
  return {
    type: Object.keys(item)[0],
    ...Object.values(item)[0]
  }
}); 

const getBooks = (filters) => {
  const dict = {};
  library.forEach((book) => dict[book.ISBN] = book)
  return dict;
}

export default { getBooks }