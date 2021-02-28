import React from "react";

class GenText extends React.Component {

    render() {
        return (
            <h2 className="absolute top-5 pt-4 w-1/4 text-sans text-3xl text-white stroke-black font-bold">{this.props.text}</h2> 
        )
    }
}

export default GenText;