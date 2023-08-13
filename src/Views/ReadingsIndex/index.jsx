import { Component } from "react";
import booksData from "../../Data/Books";
import { EyeIcon } from "@heroicons/react/24/outline";


export default class BookIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: booksData.getBooks(),
      current: null,
      tagged: []
    };
  }

  renderTagButton(book) {
    const tagged = this.state.tagged.findIndex(isbn => book.isbn) > -1;

    if(tagged) return null;

    return <button className="p-2 rounded hover:font-bold">
      Add to my list
    </button>
  }

  renderBookItem(book) {
    const tagged = this.state.tagged.findIndex(isbn => book.isbn);
    return <div className="group/book-card w-full sm:1/2 md:w-1/3 lg:w-1/4 xl:1/5 p-3 cursor-pointer relative">
      <h5 className="text-lg text-center font-bold text-ellipsis whitespace-nowrap overflow-hidden mb-2">
        {book.title}
      </h5>
      <figure className="h-90">
        <img src={book.cover} className="w-full object-contain"/>
      </figure>
      <div className="color-gray-500 invisible group-hover/book-card:visible text-center absolute inset-0 bg-white/[0.9] flex flex-col justify-center">
        <button onClick={ (e) => this.setState({...this.state, current: book.ISBN}) } className="p-2 rounded hover:font-bold">
          <EyeIcon className="w-10 font-semibold inline-block mr-1"/>
          See details
        </button>
        { this.renderTagButton(book) }
      </div>
    </div>
  }

  renderBookDetails(book) {
    if(!this.state.current) return null;
    
    book = this.state.books[this.state.current]

    return <div className="bg-blue-950 text-gray-300 h-screen w-3/5 p-4">
      <h3 className="text-2xl font-bold mb-2">{book.title}</h3>
      <dl className="mb-2">
        <dt className="font-bold">Author</dt>
        <dd>{book.author.name}</dd>
      </dl>
      <dl className="mb-2">
        <dt className="font-bold">Genre</dt>
        <dd>{book.genre}</dd>
      </dl>
      <dl className="mb-2">
        <dt className="font-bold">Year</dt>
        <dd>{book.year}</dd>
      </dl>
      <dl className="mb-2">
        <dt className="font-bold">ISBN</dt>
        <dd>{book.ISBN}</dd>
      </dl>
      <dl className="mb-2">
        <dt className="font-bold">Synopsis</dt>
        <dd>{book.synopsis}</dd>
      </dl>
    </div>
  }

  render() {
    return <div className="flex relative">
      <div className="w-full flex flex-wrap h-screen overflow-y-scroll">
        { Object.values(this.state.books).map(b => this.renderBookItem(b)) }
      </div>
      { this.renderBookDetails(this.state.books[this.state.current]) }
    </div>
  }
}