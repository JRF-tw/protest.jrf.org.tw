
import { combineReducers } from 'redux';
import { defaultScore } from '../data';
import { UPDATE_SCORE, SHOW_RESULT } from './actions';

// const initialState = {
//   score: defaultScore,
//   showResult: false
// };

function score(state = defaultScore, action) {
  switch (action.type) {
    case UPDATE_SCORE:
      return Object.assign({}, state, action.arr);
    default:
      return state;
  }
}

function showResult(state = false, action) {

  switch (action.type) {
    case SHOW_RESULT:
      return action.bool;
    default:
      return state;
  }
}

const App = combineReducers({
  score,
  showResult
});

export default App;

