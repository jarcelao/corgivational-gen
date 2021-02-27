import React from "react";

import GenImage from "./GenImage";
import GenInput from "./GenInput";
import GenButtonSmall from "./GenButtonSmall";
import GenButtonLarge from "./GenButtonLarge";

class Generator extends React.Component {
  render() {
    return (
      <div className="flex flex-wrap place-content-evenly bg-white h-full lg:mx-64 xl:mx-96">
        <GenImage />
        <GenInput placeholderText="Enter text..." />
        <GenButtonSmall buttonText="IMG" />
        <GenButtonLarge buttonText="RANDOMLY GENERATE" />
      </div>
    );
  }
}

export default Generator;
