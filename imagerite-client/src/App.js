
import React, { Component } from 'react';

import './App.css';
import SquawkList from './components/SquawkList'

class App extends Component {
  render() {
    return (
        <div className='container'>
            <nav>
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo">Logo</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>a  </li>
                        <li>b</li>
                        <li>cc</li>
                    </ul>
                </div>
            </nav>
            <SquawkList/>
        </div>
    );
  }
}

export default App;
