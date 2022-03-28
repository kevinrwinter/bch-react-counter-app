import React from "react";
import "./App.css";

import Header from "./Header";
import Footer from "./Footer";
// import Main from "./Main";
import Main from "./components/Main_class_component";

// const persons = [];

const App = () => {
  return (
    <div className="App">
      <Header />

      <Main />

      <Footer />
    </div>
  );
};

export default App;
