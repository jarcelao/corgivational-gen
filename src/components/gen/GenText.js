import React from "react";

class GenText extends React.Component {
    constructor() {
        super()
        this.state = {
            text: "HELLO"
        }

        updateText = updateText.bind(this)
    }

    render() {
        return (
            <p>{this.props.text}</p> 
        )
    }
}

export default GenText;