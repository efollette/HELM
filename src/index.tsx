import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './components/App';
import { BrowserRouter as Router, Route, Link, BrowserRouter } from "react-router-dom";

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'))
