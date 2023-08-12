import { Component } from "react";
import BookIndex from "../Views/ReadingsIndex";
import { HomeIcon, GlobeAltIcon } from "@heroicons/react/24/outline";

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="bg-blue-950 flex">
        <div className="bg-white w-full">
          <BookIndex />
        </div>
      </div>
    )
  }
}
