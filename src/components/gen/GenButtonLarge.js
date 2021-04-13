import React from "react";
import { useRecoilState } from "recoil";
import { authorState, getQuote, quoteState } from "./GenState";

class GenButtonLarge extends React.Component {
  render() {
    return (
      <button
        className="w-3/5 h-12 px-8 xl:mb-6 my-2 text-white font-bold transition-colors duration-150 bg-red-300 rounded-lg focus:shadow-outline hover:bg-red-400"
        onClick={this.props.handleClick}
      >
        GENERATE
      </button>
    );
  }
}

const GenButtonLargeWrapper = () => {
  const [quote, setQuote] = useRecoilState(quoteState);
  const [author, setAuthor] = useRecoilState(authorState);

  const handleClick = async event => {
    let data = await getQuote();
    setQuote(data.text);
    setAuthor(data.author);
  };

  return <GenButtonLarge handleClick={handleClick} />;
};

export default GenButtonLargeWrapper;
