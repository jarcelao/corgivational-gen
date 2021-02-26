import React from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <>
        <div className="flex flex-col h-screen">
          <Navbar />
          <main className="p-4 flex-grow bg-red-100">Generator goes here</main>
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
