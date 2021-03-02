import React from "react";

import GenImage from "./GenImage";
import GenInput from "./GenInput";
import GenInputAuthor from "./GenInputAuthor";
import GenButtonSmall from "./GenButtonSmall";
import GenButtonLarge from "./GenButtonLarge";

class Generator extends React.Component {
  state = {
    image: "Spacegear_Template.jpg",
    quote: {}
  };

  changeImage = nextImage => {
    this.setState({ image: nextImage });
  };

  generateText = newText => {
    this.setState({ quote: newText });
  };

  render() {
    return (
      <div className="flex flex-wrap place-content-center gap-1 bg-white h-full lg:mx-64 xl:mx-96">
        <GenImage imageSource={this.state.image} />
        <GenInput
          text={this.state.quote.text}
          placeholderText="Enter text..."
        />
        <GenInputAuthor
          text={this.state.quote.author}
          placeholderText="Author"
        />
        <GenButtonSmall callbackImage={this.changeImage} buttonText="IMG" />
        <GenButtonLarge
          callbackText={this.generateText}
          buttonText="GENERATE"
        />
      </div>
    );
  }
}

export default Generator;
