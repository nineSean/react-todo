import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Welcome from './Welcome.js'

function More(props){
  return (
    <section>
      <Welcome/>
      <p>some more things, such as {props.name}</p>
    </section>
  )
}

ReactDOM.render(<More name='apple'/>, document.querySelector('#root'))
