import React from "react";
import { RecoilRoot, atom, useRecoilState } from "recoil";

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
            <RecoilRoot>
              <Generator />
            </RecoilRoot>
          </main>
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
