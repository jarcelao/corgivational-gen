import React from "react";

class GenButtonSmall extends React.Component {
  render() {
    return (
      <button className="h-12 px-6 m-2 text-lg font-bold text-white transition-colors duration-150 bg-red-300 rounded-lg focus:shadow-outline hover:bg-red-400">
        {this.props.buttonText}
      </button>
    );
  }
}

export default GenButtonSmall;
