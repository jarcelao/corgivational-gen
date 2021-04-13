import React from "react";
import { useRecoilState } from "recoil";

import { authorState } from "./GenState";

class GenInputAuthor extends React.Component {
  render() {
    return (
      <div>
        <input
          className="w-full h-12 px-4 m-2 mx-0 text-lg text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
          type="text"
          name="author"
          placeholder={this.props.placeholderText}
          value={this.props.author}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

const GenInputAuthorWrapper = () => {
  const [authorText, setAuthorText] = useRecoilState(authorState);

  const onChange = event => {
    setAuthorText(event.target.value);
  };

  return (
    <GenInputAuthor
      placeholderText="Author"
      author={authorText}
      onChange={onChange}
    />
  );
};

export default GenInputAuthorWrapper;
