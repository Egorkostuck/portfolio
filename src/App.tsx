import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";

export enum Sections {
  header = "#header",
  contact = "#contact",
}

function App() {
  const mainStyle = {
    minHeight: "1500px",
  };
  return (
    <div className="App">
      <div className="wrapper">
        <Header />

        <main style={mainStyle}>
          <Hero />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
