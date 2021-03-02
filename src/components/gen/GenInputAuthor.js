import React from "react";

import GenTextAuthor from "./GenTextAuthor";

class GenInputAuthor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({ author: nextProps.text });
  }

  render() {
    return (
      <div>
        <input
          className="w-full h-12 px-4 m-2 mx-0 text-lg text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
          type="text"
          name="author"
          placeholder={this.props.placeholderText}
          value={this.state.author}
          onChange={this.handleChange}
        />
        <GenTextAuthor text={this.state.author} />
      </div>
    );
  }
}

export default GenInputAuthor;
