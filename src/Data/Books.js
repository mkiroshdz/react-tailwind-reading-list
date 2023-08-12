import raw from "./raw.json";

const library = raw.library.map(item => {
  return {
    type: Object.keys(item)[0],
    ...Object.values(item)[0]
  }
}); 

const getBooks = (filters) => {
  return library;
}

export default { getBooks }