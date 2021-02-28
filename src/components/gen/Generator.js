import React from "react";

import GenImage from "./GenImage";
import GenInput from "./GenInput";
import GenButtonSmall from "./GenButtonSmall";
import GenButtonLarge from "./GenButtonLarge";

class Generator extends React.Component {

  state = {
    image: "Spacegear_Template.jpg"
  }

  changeImage = (nextImage) => {
    this.setState({image: nextImage})
  }

  render() {
    return (
        <div className="flex flex-wrap place-content-center gap-1 bg-white h-full lg:mx-64 xl:mx-96">
          <GenImage imageSource={this.state.image} />
          <GenInput placeholderText="Enter text..." />
          <GenButtonSmall callbackImage={this.changeImage} buttonText="IMG" />
          <GenButtonLarge buttonText="RANDOMLY GENERATE" />
        </div>
    );
  }
}

export default Generator;
