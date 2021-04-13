import React from "react";

import "regenerator-runtime/runtime";

import GenInputWrapper from "./GenInput";
import GenInputAuthorWrapper from "./GenInputAuthor";
import GenButtonSmallWrapper from "./GenButtonSmall";
import GenButtonLargeWrapper from "./GenButtonLarge";
import GenImageWrapper from "./GenImage";

class Generator extends React.Component {
  render() {
    return (
      <div className="flex flex-wrap place-content-center gap-1 bg-white h-full lg:mx-64 xl:mx-96">
        <GenImageWrapper />
        <GenInputWrapper />
        <GenInputAuthorWrapper />
        <GenButtonSmallWrapper />
        <GenButtonLargeWrapper />
      </div>
    );
  }
}

export default Generator;
