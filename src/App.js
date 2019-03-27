import React, { Component } from 'react';
//import logo from './logo.svg';
import logo from './images/mygirls.jpeg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import  { Analytics } from 'aws-amplify';
import aws_exports from './aws-exports';
import { Button } from 'aws-amplify-react/dist/AmplifyUI';
Amplify.configure(aws_exports);

class App extends Component {
  recordEvent = () => {
    console.log('recording event to pinpoint!')
    Analytics.record({
      name :  'Like Event',
      attributes : {
        attr1 : 'attr1' 
      }
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-image" alt="logo" />
          <p></p>
          <button onClick={this.recordEvent}>Like</button>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
