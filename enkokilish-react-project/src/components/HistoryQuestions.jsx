import React from 'react'

import { useEffect, useState ,useCallback ,useRef } from "react";

function HistoryQuestions () {
    
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answerSelected, setAnswerSelected] = useState(false); 
    const scoreRef = useRef(0);


    //  gets the questions from API endpoint 

    useEffect( () => {

    async function fetchData() {

      try {
        
        const response = await fetch(
         " https://opentdb.com/api.php?amount=10&category=23&type=multiple"
        );
        const data = await response.json();
        const questionsWithIds = data.results.map((question, index) => {
          return {
            ...question,
            id: index + 1
          }
        });
        console.log(`use params `)
        setQuestions(questionsWithIds); 
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  console.log(questions)

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

return (
  <div className='math-question '>
    {currentQuestionIndex === questions.length-1 ? (
      <div className='score-display'>
        <div className='score-message'>
          <h2>Good Job!</h2>
          <p>Your total score is:</p>
          <h3>{scoreRef.current}</h3>
        </div>
        
    </div>
      
    ) : (
      <div className='question-container-box'>
        {currentQuestion ? (
          <div key={currentQuestion.id}>
            <div className='score-display'>
               <div> Score : {scoreRef.current} </div>
           </div>
            <div className='question'>
              Question {currentQuestion.id} : {decodeHTMLEntities(currentQuestion.question)}
            </div>

            {getAnswerChoices().map((answerChoice, index) => (
              <div className='answer' key={index} id={answerChoice} onClick={() => handleAnswerClick(answerChoice)}>
                 {decodeHTMLEntities(answerChoice)}
              </div>
            ))}
            <div className='navigate-buttons'>
              <button className='prev-btn' onClick={handlePrevQuestion} >
                Prev
              </button>
              <button className='next-btn' onClick={handleNextQuestion}>
                Next
              </button>
            </div>
           
          </div>
        ) : (
          <div>Loading your questions. </div>
        )}
      </div>
    )}
  </div>
);
}

export default HistoryQuestions 