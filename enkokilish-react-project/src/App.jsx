import { useState , useEffect } from "react";
import MathQuestions from "./components/MathQuestions";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import TopicList from "./components/TopicList";
function App() {

    return (
      <div className="app">
          <Header/>
          <TopicList/>
          {/* <HomePage /> */}
          {/* <MathQuestions /> */}
          <Footer/>
      </div>
    );
    
}

export default App
