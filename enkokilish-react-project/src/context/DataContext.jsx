import { createContext ,useState,useEffect } from "react";
import  {useCallback ,useRef} from 'react'

const DataContext = createContext({}) ;

export const DataProvider = ({children}) => {

    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answerSelected, setAnswerSelected] = useState(false); 
    const scoreRef = useRef(0);

    



   // handles click of the next button 
   const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex < questions.length - 1 ? prevIndex + 1 : prevIndex

    );
    
  }

    // handles click of the next button 
    const handlePrevQuestion = () => {
        setCurrentQuestionIndex((nextIndex) =>
        nextIndex > 0 ? nextIndex - 1 : nextIndex 
        );
    
    };
  
    // since the signs like apostrophe are written using unicode we shall convert them into the actual symbols by parsing 

    const currentQuestion = questions[currentQuestionIndex];
    const parser = new DOMParser();
    // this handles the decoding of the unicode 
    function decodeHTMLEntities(text) {
        const doc = parser.parseFromString(text, 'text/html');
        return doc.documentElement.textContent;
    }

        // Handles the click of one of the 4 answer boxes 
    
      const handleAnswerClick = (answer) => {
       
        const currentQuestion = questions[currentQuestionIndex];
        const isCorrectAnswer = answer === currentQuestion.correct_answer;
      
        if (isCorrectAnswer) {
         
          // Set the color of the clicked answer to green
          document.getElementById(answer).style.backgroundColor = 'green';
          scoreRef.current += 1;
        } else {
          // Set the color of the clicked answer to red
          document.getElementById(answer).style.backgroundColor = 'red';
          // Set the color of the correct answer to green
          document.getElementById(currentQuestion.correct_answer).style.backgroundColor = 'green';
        }
  
     // Disable all answer div elements 
    document.querySelectorAll('.answer').forEach((button) => {
    button.style.pointerEvents = 'none';
    });
    
    }

    // uses callback since we want it to occur only when question changes 

    const getAnswerChoices = useCallback(() => {
    
    if (!answerSelected ) {
        const currentQuestion = questions[currentQuestionIndex];
        const answerChoices = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer];
        // Shuffle the answer choices
        for (let i = answerChoices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [answerChoices[i], answerChoices[j]] = [answerChoices[j], answerChoices[i]];
        } 
        return answerChoices;
    }

    }, [currentQuestionIndex, answerSelected, questions]);

    return(
        <DataContext.Provider value={{
            
                questions,
                setQuestions ,
                currentQuestionIndex, 
                setCurrentQuestionIndex, 
                answerSelected, 
                setAnswerSelected , 
                handleNextQuestion,
                handlePrevQuestion , 
                handleAnswerClick ,
                currentQuestion , 
                decodeHTMLEntities,
                parser ,
                getAnswerChoices ,
                scoreRef 
        }} >
            {children}   
        </DataContext.Provider>
    )
}

export default DataContext ;