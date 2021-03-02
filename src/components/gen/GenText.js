import React from "react";
import {Textfit} from "react-textfit"

class GenText extends React.Component {

    render() {
        return (
            <Textfit mode="multi" 
                    className="absolute top-5 pl-10 pt-4 w-1/4 h-1/3 text-white leading-none tracking-tighter font-arial text-outline">
                        {this.props.text}
                    </Textfit> 
        )
    }
}

export default GenText;