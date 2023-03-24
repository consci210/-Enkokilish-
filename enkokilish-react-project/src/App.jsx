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
import HistoryQuestions from "./components/HistoryQuestions";
import GeneralKnowledge from "./components/GeneralKnowledge";
import GeographyQuestions from "./components/GeographyQuestions";
import SportQuestions from "./components/SportQuestions";
import { DataProvider } from "./context/DataContext";

function App() {

    return (
      <div className="app">
         <DataProvider>
          <Header/>
          <Routes>  
              <Route path="/" element={ <HomePage />}/> 
              <Route path="computer" element={  <ComputerQuestions/>  }/> 
              <Route path="/math" element={<MathQuestions />  }/> 
              <Route path="about" element={ <About />  }/> 
              <Route path="contact" element={  <Contact/>  }/> 
              <Route path="login" element={<Login />  }/> 
              <Route path="topic" element={<TopicList/>} /> 
              <Route path="geography" element={ <GeographyQuestions />  }/> 
              <Route path="history" element={  <HistoryQuestions/>  }/> 
              <Route path="sports" element={<SportQuestions />  }/> 
              <Route path="general-knowledge" element={<GeneralKnowledge/>} /> 
          </Routes>
          <Footer/>
          </DataProvider>
      </div>
    );
    
}

export default App
