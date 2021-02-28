import React from "react";


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Generator from "./components/gen/Generator";

// honestly i tried doing the tailwind way of inserting a background image but for some reason it doesn't work :<
// so classic css it is
var mainBackground = {
    backgroundImage: 'url("Corgear_Background.jpg")',
    backgroundSize: '70%'
  }

class App extends React.Component {
  render() {
    return (
      <>
        <div className="flex flex-col h-screen">
          <Navbar />
          <main className="flex-grow relative" style={mainBackground}>
            <Generator />

            <div className="absolute h-full top-0 left-1/2 ml-64 w-9 skyblue" />
            <div className="absolute h-full top-0 left-1/2 ml-72 w-9 blue" />

          </main>
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
