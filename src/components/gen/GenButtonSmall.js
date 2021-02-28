import React from "react";

class GenButtonSmall extends React.Component {

  constructor() {
    super()
    this.state = {
      index: 0
    }
    this.allImages = ["Spacegear_Template.jpg", "Valengear_Template.jpg", "Grassgear_Template.jpg",
                "Raingear_Template.jpg", "Breadgear_Template.jpg", "Corgear_Template.jpg"]

    this.handleClick = this.handleClick.bind(this)

  }

  handleClick(event) {
    let i = this.state.index + 1
    if (i >= this.allImages.length)
      i = 0
    this.setState({ index: i })

    this.props.callbackImage(this.allImages[i])
  }
  render() {
    var currentImage = this.allImages[this.state.index]

    return (
      <button 
        className="h-12 px-6 m-2 text-lg font-bold text-white transition-colors duration-150 bg-red-300 rounded-lg focus:shadow-outline hover:bg-red-400"
        onClick={this.handleClick}>
        {this.props.buttonText}
      </button>
    );
  }
}

export default GenButtonSmall;
