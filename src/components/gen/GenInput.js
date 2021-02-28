import React from "react";

import GenText from "./GenText";

class GenInput extends React.Component {

  constructor() {
    super()
    this.state = {
      text: "",
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ text: event.target })
  }
  
  render() {
    return (
      <div>
        <input
          className="w-2/3 h-12 px-4 m-2 text-lg text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
          type="text"
          name="quote"
          placeholder={this.props.placeholderText}
          value={this.state.quote}
          onChange={this.handleChange}
        />
        <GenText text={this.state.text} />
      </div>
    );
  }
}

export default GenInput;
