import React from 'react'

import { useEffect, useState } from "react";

function MathQuestions () {
  
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [answerSelected, setAnswerSelected] = useState(false); 

    useEffect( () => {

    async function fetchData() {

      try {
        const response = await fetch(
          "https://opentdb.com/api.php?amount=10&category=19&difficulty=hard&type=multiple"
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

  console.log(questions)

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex < questions.length - 1 ? prevIndex + 1 : prevIndex
    );
    setAnswerSelected(false)
  };
  const handlePrevQuestion = () => {
    setCurrentQuestionIndex((nextIndex) =>
      nextIndex > 0 ? nextIndex - 1 : nextIndex 
    );
    setAnswerSelected(false)
  };


  const currentQuestion = questions[currentQuestionIndex];
  const parser = new DOMParser();
  
  function decodeHTMLEntities(text) {
    const doc = parser.parseFromString(text, 'text/html');
    return doc.documentElement.textContent;
  }


  const handleAnswerClick = (answer) => {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrectAnswer = answer === currentQuestion.correct_answer;
  
    if (!answerSelected) {
    if (isCorrectAnswer) {
      setScore(score + 1);
      // Set the color of the clicked answer to green
      document.getElementById(answer).style.backgroundColor = 'green';
    } else {
      // Set the color of the clicked answer to red
      document.getElementById(answer).style.backgroundColor = 'red';
      // Set the color of the correct answer to green
      document.getElementById(currentQuestion.correct_answer).style.backgroundColor = 'green';
    }
  
    // Disable all answer buttons
    document.querySelectorAll('.answer').forEach((button) => {
      button.disabled = true;
    });
  };
}

  const getAnswerChoices = () => {
    if (!answerSelected){
    const currentQuestion = questions[currentQuestionIndex];
    const answerChoices = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer];
    // Shuffle the answer choices
    for (let i = answerChoices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [answerChoices[i], answerChoices[j]] = [answerChoices[j], answerChoices[i]];
    } 
    return answerChoices;}
  };
  
  return (
    <div className='math-question'>
      <div className='question-container-box'>
        {currentQuestion ? (
          <div key={currentQuestion.id}>
            <div className='question'>
              Question {currentQuestion.id} : {decodeHTMLEntities(currentQuestion.question)}
            </div>

            {getAnswerChoices().map((answerChoice, index) => (
              <div className='answer' key={index} id={answerChoice} onClick={() => handleAnswerClick(answerChoice)}>
                Choice {index + 1}: {decodeHTMLEntities(answerChoice)}
              </div>
            ))}
            <div className='navigate-buttons'>
              <button className='prev-btn' onClick={handlePrevQuestion} disabled={true}>
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
    </div>
  );
}

export default MathQuestions 