import React from "react";

import GenText from "./GenText";

class GenInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({ quote: nextProps.text });
  }

  render() {
    return (
      <div>
        <input
          className="w-full h-12 px-4 m-2 mx-0 text-lg text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
          type="text"
          name="quote"
          placeholder={this.props.placeholderText}
          value={this.state.quote}
          onChange={this.handleChange}
        />
        <GenText text={this.state.quote} />
      </div>
    );
  }
}

export default GenInput;
