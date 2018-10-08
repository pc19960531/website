import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { Provider } from 'react-redux'
import './index.css';
import './index.less';
import './index.scss';
import App from './App'
import store from './store'

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));

//ReactDOM.render(<Provider store={store}><div>12312313123</div></Provider>, document.getElementById('app'));