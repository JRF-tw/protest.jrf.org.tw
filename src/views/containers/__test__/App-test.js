import React from 'react/addons';
import {expect} from 'chai';
import App from '../App';
import { Provider } from 'react-redux';
import createStore from 'redux/create';
import { questionData } from 'redux/data';
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

  it('should render with correct value', () => {
    const text = dom.getElementsByClassName('question')[0].textContent;
    expect(text).to.equal(questionData[0].question);
  });

  it('should render with a reload button', () => {
    const text = dom.getElementsByTagName('button')[0].textContent;
    expect(text).to.be.a('string');
  });

});
