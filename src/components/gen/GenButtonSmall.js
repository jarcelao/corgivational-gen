import React from "react";
import { useRecoilState } from "recoil";

import { getImage, imageState } from "./GenState";

class GenButtonSmall extends React.Component {
  render() {
    return (
      <button
        className="h-12 w-1/5 px-8 my-2 text-lg font-bold text-white transition-colors duration-150 bg-red-300 rounded-lg focus:shadow-outline hover:bg-red-400"
        onClick={this.props.onClick}
      >
        IMG
      </button>
    );
  }
}

const GenButtonSmallWrapper = () => {
  const [image, setImage] = useRecoilState(imageState);

  const onClick = event => {
    setImage(getImage());
  };

  return <GenButtonSmall onClick={onClick} />;
};

export default GenButtonSmallWrapper;
