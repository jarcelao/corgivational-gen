import React from "react";

class GenButtonLarge extends React.Component {
  render() {
    return (
      <button className="w-2/3 h-12 px-6 mb-3 text-white font-bold transition-colors duration-150 bg-red-300 rounded-lg focus:shadow-outline hover:bg-red-400">
        {this.props.buttonText}
      </button>
    );
  }
}

export default GenButtonLarge;
