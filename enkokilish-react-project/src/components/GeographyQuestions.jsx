import React from 'react'

import { useEffect, useState ,useCallback ,useRef } from "react";
import { useContext } from 'react';
import DataContext from '../context/DataContext';

function GeographyQuestions () {
    

    const API_URL = "https://opentdb.com/api.php?amount=10&category=22&type=multiple"
    //  gets the questions from API endpoint 

    const {
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
      scoreRef} =  useContext(DataContext) ;



  useEffect( () => {

  async function fetchData() {

    try {
      const response = await fetch(
          API_URL
      );
      const data = await response.json();
      const questionsWithIds = data.results.map((question, index) => {
        return {
          ...question,
          id: index + 1
        }
      });
      setQuestions(questionsWithIds);
    } catch (error) {
      console.error(error);
    }
  }

  fetchData();
}, []);




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

export default GeographyQuestions 