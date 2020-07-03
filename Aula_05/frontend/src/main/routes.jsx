import React from 'react';
import {Router, Route, Redirect, hashHistory} from 'react-router';

import Todo from '../todo/todo';
import About from '../about/about';

<<<<<<< HEAD

export default props => (
    <Router history={hashHistory}>
        <Route path="/todos" component={Todo}/>
        <Route path="/about" component={About}/>
        <Redirect from='*' to="/todos"   />
=======
export default props => (
    <Router history={hashHistory}>
        <Route path='/todos' component={ Todo } />
        <Route path='/about' component={ About } />
        <Redirect from='*' to='/todos' />
>>>>>>> 4fa8b6bc6b6f650a174d24c65c184f22a40cf231
    </Router>
);