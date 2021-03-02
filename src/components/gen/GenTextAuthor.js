import React from "react";
import { Textfit } from "react-textfit";

class GenTextAuthor extends React.Component {
  render() {
    return (
      <Textfit
        mode="single"
        className="absolute top-1/3 left-1/3 w-1/6 pt-6 pl-6 h-12 text-white font-arial text-outline author"
      >
        {this.props.text}
      </Textfit>
    );
  }
}

export default GenTextAuthor;
