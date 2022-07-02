
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import './fonts/Lato/Lato-Italic.ttf';
import './fonts/Lato/Lato-Regular.ttf';
import './fonts/Montserrat/Montserrat-VariableFont_wght.ttf';
import './i18n';
import React, {Suspense} from 'react';
import { Spinner } from 'react-bootstrap';

ReactDOM.render(
  <Suspense fallback={(<div className= "loaderContainer"><Spinner id= "spinner" animation="border" role="status"></Spinner></div>)}>
  <App/>
  </Suspense>,
  document.getElementById('root')
  
);
