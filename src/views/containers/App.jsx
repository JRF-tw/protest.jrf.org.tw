import React, {PropTypes} from 'react';
import {questionData, answerData} from '../../data';
import {connect} from 'react-redux';
import {updateScore, showResult} from '../../redux/actions';
import QuestionTable from '../components/questionTable';
import Result from '../components/result';
import AnswerTable from '../components/answerTable';
import DocumentMeta from 'react-document-meta';

const title = '社運測測看';
const description = '參加社會運動可能會遇到哪些司法追訴？快來測測看！';
const image = 'http://protest.jrf.org.tw/images/fb_share.jpg';
const keywords = '社會運動,法律追訴,司法';

const meta = {
  title,
  description,
  meta: {
    charSet: 'utf-8',
    property: {
      'keywords': keywords,
      'og:site_name': title,
      'og:image': image,
      'og:locale': 'zh_TW',
      'og:title': title,
      'og:description': description
    }
  }
};

class App extends React.Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    state: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { dispatch, state } = this.props;
    // const styles = require('../css/main.css');
    // Injected by connect() call:
    let result;
    if (state.showResult) {
      result = (
        <div>
          <DocumentMeta {...meta}/>
          <div className="questions">
            <h1>社運測測看</h1>
            <QuestionTable questionData={questionData} onQuestionChange={arr => dispatch(updateScore(arr))} />
            <Result onResultClick={bool => dispatch(showResult(bool))} />
          </div>
          <AnswerTable answerData={answerData} score={state.score} />
        </div>
      );
    } else {
      result = (
        <div>
          <DocumentMeta {...meta}/>
          <div className="questions">
            <h1>社運測測看</h1>
            <QuestionTable questionData={questionData} onQuestionChange={arr => dispatch(updateScore(arr))} />
            <Result onResultClick={bool => dispatch(showResult(bool))} />
          </div>
        </div>
      );
    }
    return result;
  }
}

function select(state) {
  return {
    state: state,
    questionData: questionData,
    answerData: answerData
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(App);
