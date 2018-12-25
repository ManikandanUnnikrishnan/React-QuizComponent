import React, { Component } from "react";

const quizData = require("./quiz_data.json");

class Quiz extends Component {
  state = { quiz_position: 1 };
  render() {
    return (
      <div>
        <div className="QuizQuestions">
          {quizData.quiz_questions[0].instruction_text}
        </div>
      </div>
    );
  }
}

export default Quiz;
