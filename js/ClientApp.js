// @flow

import React from 'react';
import { render } from 'react-dom';
import Perf from 'react-addons-perf';
import App from './App';

window.Perf = Perf;
Perf.start();
/*
Perf.stop();
Perf.printWasted();
Perf.printInclusive();
Perf.printExclusive();
*/

const renderApp = () => {
  render(<App />, document.getElementById('app'));
};

renderApp();

if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp();
  });
}
