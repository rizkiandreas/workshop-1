import React from 'react';
import { render } from 'react-dom';

import './stylesheets/main.css';

import Home from './components/Home.jsx';

/**
 * render
 * @return {ReactElement} markup
 */
render(
  <Home />,
  document.getElementById('content'),
);
