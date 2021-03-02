import React from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Generator from "./components/gen/Generator";

// honestly i tried doing the tailwind way of inserting a background image but for some reason it doesn't work :<
// so classic css it is
var mainBackground = {
  backgroundImage: 'url("Corgear_Background.jpg")',
  backgroundSize: "70%"
};

class App extends React.Component {
  render() {
    return (
      <>
        <div className="flex flex-col h-screen">
          <Navbar />
          <main className="flex-grow relative" style={mainBackground}>
            <Generator />
            <div className="invisible lg:visible absolute h-full top-0 left-2/3 xl:ml-32 ml-28 w-9 skyblue" />
            <div className="invisible lg:visible absolute h-full top-0 left-2/3 xl:ml-40 ml-36 w-9 blue" />
          </main>
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
