import React from 'react';
import { questionData, answerData, defaultScore } from '../data';
import QuestionTable from './questionTable'
import Result from './result'
import AnswerTable from './answerTable'

class SocialMovementCrime extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      score: defaultScore,
      showResult: false
    }
    this.sendValue = this.sendValue.bind(this);
    this.getResult = this.getResult.bind(this);
    this.render = this.render.bind(this);
  }

  // getInitialState() {
  //   return {
  //     score: data.defaultScore,
  //     showResult: false
  //   }
  // }

  sendValue(score, value){

    // this.setState({score: data});
    this.setState(function(previousState, currentProps) {
      var newData = previousState.score;
      newData[score] = value;
      return {score: newData};
    }, this.render);
  }

  getResult() {
    this.setState({showResult: true}, this.render);
  }


  render() {
    if (this.state.showResult) {
      return (<div>
        <QuestionTable questionData={questionData} sendValue={this.sendValue.bind(this)} />
        <Result clickHandler={this.getResult.bind(this)} />
        <AnswerTable showResult={this.state.showResult} answerData={answerData} score={this.state.score} />
        </div>);
    } else {
      return (<div>
        <QuestionTable questionData={questionData} sendValue={this.sendValue.bind(this)} />
        <Result clickHandler={this.getResult.bind(this)} />
        </div>);
    }
  }
}

export default SocialMovementCrime;