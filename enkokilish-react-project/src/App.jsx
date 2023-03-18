import { useState , useEffect } from "react";
import MathQuestions from "./components/MathQuestions";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

    return (
      <div>
          <Header/>
          <MathQuestions />
          <Footer/>
      </div>
    );
    
}

export default App
