import React from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Generator from "./components/gen/Generator";

class App extends React.Component {
  render() {
    return (
      <>
        <div className="flex flex-col h-screen">
          <Navbar />
          <main className="flex-grow bg-red-100">
            <Generator />
          </main>
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
