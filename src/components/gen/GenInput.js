import React from "react";

class GenInput extends React.Component {
  render() {
    return (
      <input
        className="w-2/3 h-12 px-4 m-2 text-lg text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
        type="text"
        placeholder={this.props.placeholderText}
      />
    );
  }
}

export default GenInput;
