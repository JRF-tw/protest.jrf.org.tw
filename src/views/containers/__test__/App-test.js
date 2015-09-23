import React from 'react/addons';
import {expect} from 'chai';
import App from '../App';
import { Provider } from 'react-redux';
import createStore from 'redux/create';
import { questionData, answerData, readme } from 'redux/data';
import { updateScore, showResult } from 'redux/actions';
const { TestUtils } = React.addons;

describe('App', () => {
  const store = createStore();

  const renderer = TestUtils.renderIntoDocument(
    <Provider store={store} key="provider">
      {() => <App />}
    </Provider>
  );

  const dom = React.findDOMNode(renderer);

  it('should render correctly', () => {
    expect(renderer).to.be.ok;
  });

  it('should render with correct question', () => {
    const text = dom.getElementsByClassName('question')[0].textContent;
    expect(text).to.equal(questionData[0].question);
  });

  it('should render with a reload button', () => {
    const text = dom.getElementsByTagName('button')[0].textContent;
    expect(text).to.be.a('string');
  });

});

describe('AppWithResult', () => {

  let store = createStore();
  store.dispatch(updateScore({'a': true}));
  store.dispatch(showResult(true));

  const renderer = TestUtils.renderIntoDocument(
    <Provider store={store} key="provider">
      {() => <App />}
    </Provider>
  );

  const dom = React.findDOMNode(renderer);

  it('should render correctly', () => {
    expect(renderer).to.be.ok;
  });

  it('should render with correct question', () => {
    const text = dom.getElementsByClassName('question')[0].textContent;
    expect(text).to.equal(questionData[0].question);
  });

  it('should render with a reload button', () => {
    const text = dom.getElementsByTagName('button')[0].textContent;
    expect(text).to.be.a('string');
  });

  it('should render with correct answer', () => {
    const text = dom.getElementsByClassName('answer')[0].textContent;
    expect(text.replace('顯示', '')).to.equal(answerData[0].answer);
  });

  it('should render with correct answer detail', () => {
    const text = dom.getElementsByClassName('answerDetail')[0].textContent;
    expect(text).to.equal(answerData[0].detail.replace(/(<([^>]+)>)/ig,""));
  });

  it('should render with correct readme', () => {
    const text = dom.getElementsByClassName('readme')[0].textContent;
    expect(text).to.equal(readme.replace(/(<([^>]+)>)/ig,""));
  });

});


