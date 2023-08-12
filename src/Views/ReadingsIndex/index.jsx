import { Component } from "react";
import booksData from "../../Data/Books";
import { EyeIcon, PlusIcon } from "@heroicons/react/24/outline";

const renderBook = (book) => {
  return <div className="group/book-card w-full sm:1/2 md:w-1/3 lg:w-1/4 xl:1/5 p-3 cursor-pointer relative">
    <h5 className="text-lg text-center font-bold text-ellipsis whitespace-nowrap overflow-hidden mb-2">
      {book.title}
    </h5>
    <figure className="h-90">
      <img src={book.cover} className="w-full object-contain"/>
    </figure>
    <div className="color-gray-500 invisible group-hover/book-card:visible text-center absolute inset-0 bg-white/[0.9] flex flex-col justify-center">
      <button className="p-2 rounded hover:font-bold">
        <EyeIcon className="w-10 font-semibold inline-block mr-1"/>
        See details
      </button>
      <button className="p-2 rounded hover:font-bold">
        <PlusIcon className="w-10 font-semibold inline-block mr-1"/>
        Add to my list
      </button>
    </div>
  </div>
}

export default class BookIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: booksData.getBooks()
    };
  }

  render() {
    return <div className="flex flex-wrap w-full h-screen">
      { this.state.books.map(item => renderBook(item)) }
    </div>
  }
}