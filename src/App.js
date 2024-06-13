import React from "react";
import './App.css';
import Navbar from "./Components/Navbar";
import Intro from "./Components/intro/intro";
import Destination from "./Components/destinations/destination";
import Card from "./Components/card/card";
import Video from "./Components/video/video";
import About from "./Components/about/about";
import Testinomial from "./Components/testinomials/testinomial";
import Footer from "./Components/footer/footer";
import { themeContext } from "./context";
import { useContext } from "react";

function App() {
  const theme =useContext(themeContext);
  const darkMode= theme.state.darkMode;
  return (
    <div className="App"
    style={{
      background: darkMode? 'black' :'',
      color : darkMode? 'white': ''

    }}
    
    
    >
      <Navbar/>
      <Intro/>
      <Destination/> 
      <Card/>
      <Video/>
      <About/>
      <Testinomial/>
      <Footer/>
    </div>
  );
}

export default App;
