import React from "react";
import ReactDOM from 'react-dom'
import App from './App'
import { FaBeer } from 'react-icons/fa';
class Question extends React.Component {
  render() {
    return <h3> Lets go for a <FaBeer />? </h3>
  }
}

ReactDOM.render(<App/> , document.getElementById('root'));