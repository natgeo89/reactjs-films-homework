import React from 'react';
import { render } from 'react-dom';
import App from './App';

import './reset.scss';

render(<App />, document.querySelector('#root'));

if (module.hot) {
  module.hot.accept();
}
