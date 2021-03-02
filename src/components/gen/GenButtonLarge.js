import React from "react";

class GenButtonLarge extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      data: {}
    }

  this.generateQuote = this.generateQuote.bind(this)
  }

  generateQuote(event) {
    this.setState({ loading: true})
    const apiURL = "https://private-amnesiac-eb6d20-goquotes.apiary-proxy.com/api/v1/random/1?type=tag&val=motivational"
    fetch(apiURL)
      .then(response => response.json())
      .then(fetchData => {
        this.setState({
          data: fetchData,
          loading: false},() => {
          this.props.callbackText(this.state.data.quotes[0])
        })
      }) 
    
  }

  render() {
    const text = this.state.loading ? "loading..." : this.props.buttonText
    return (
      <button className="w-3/5 h-12 px-6 mb-3 text-white font-bold transition-colors duration-150 bg-red-300 rounded-lg focus:shadow-outline hover:bg-red-400"
              onClick={this.generateQuote}>
        {text}
      </button>
    );
  }
}

export default GenButtonLarge;
