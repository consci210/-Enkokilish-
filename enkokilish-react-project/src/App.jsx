import { useState , useEffect } from "react";
import { Route ,Routes  } from "react-router-dom";
import MathQuestions from "./components/MathQuestions";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import TopicList from "./components/TopicList";
import ComputerQuestions from "./components/ComputerQuestions";

function App() {

    return (
      <div className="app">
          <Header/>
          <Routes>  
              <Route path="/" element={ <HomePage />}/> 
              <Route path="computer" element={  <ComputerQuestions/>  }/> 
              <Route path="math" element={<MathQuestions />  }/> 
              <Route path="about" element={ <About />  }/> 
              <Route path="contact" element={  <Contact/>  }/> 
              <Route path="login" element={<Login />  }/> 
              <Route path="topic" element={<TopicList/>} /> 
          </Routes>
          <Footer/>
      </div>
    );
    
}

export default App
