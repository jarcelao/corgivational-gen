import React from "react";

class GenImage extends React.Component {
  render() {
    return (
      <img
        src={this.props.imageSource}
        alt=""
        className="mx-auto pt-6"
        style={{
          width: "85%"
        }}
      ></img>
    );
  }
}

export default GenImage;
