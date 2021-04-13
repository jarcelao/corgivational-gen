import React from "react";
import { useRecoilState } from "recoil";
import { quoteState } from "./GenState";

class GenInput extends React.Component {
  render() {
    return (
      <div>
        <input
          className="w-full h-12 px-4 m-2 mx-0 text-lg text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
          type="text"
          name="quote"
          placeholder={this.props.placeholderText}
          value={this.props.quote}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

const GenInputWrapper = () => {
  const [quoteText, setQuoteText] = useRecoilState(quoteState);

  const onChange = event => {
    setQuoteText(event.target.value);
  };

  return (
    <GenInput placeholderText="Quote" quote={quoteText} onChange={onChange} />
  );
};

export default GenInputWrapper;
