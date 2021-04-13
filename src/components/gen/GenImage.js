import React from "react";
import { useRecoilState } from "recoil";

import { authorState, imageState, quoteState } from "./GenState";
import GenText from "./GenText";
import GenTextAuthor from "./GenTextAuthor";

class GenImage extends React.Component {
  render() {
    return (
      <div
        style={{
          width: "85%"
        }}
      >
        <img src={this.props.imageSource} alt="" className="mx-auto pt-6"></img>
        <GenText text={this.props.quote} />
        <GenTextAuthor text={this.props.author} />
      </div>
    );
  }
}

const GenImageWrapper = () => {
  const [image, setImage] = useRecoilState(imageState);
  const [quote, setQuote] = useRecoilState(quoteState);
  const [author, setAuthor] = useRecoilState(authorState);

  return <GenImage imageSource={image} quote={quote} author={author} />;
};

export default GenImageWrapper;
