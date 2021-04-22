import React, { useState } from 'react';
import Search from './Search';
// import Route from './components/Route';
// import Header from './components/Header';

import { Router, Route, Switch } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';

import './YoutubeHome.css'; 

// Home page imports 
import YoutubeHome from './YoutubeHome';
// import GoogleAuth from './components/GoogleAuth';

const items = [
    {
        title: 'What is React?',
        content: 'React is a front-end JavaScript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is the favourite JS library among engineers!'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    }
]

const options = [
    {
        label: 'Green', value: 'green'
    }, {
        label: 'Red', value: 'red'
    }, {
        label: 'Blue', value: 'blue'
    }];

export default () => {
    const [selected, setSelected] = useState(options[0]);

    return (<div className="ui container">
        <Router history={history}>
            <Header />
            <Route path="/" exact component={YoutubeHome}>
            </Route>
            <Route path="/list" exact component={StreamList}> 
            </Route>
        </Router>
        
        {/* <Route path="/dropdown">
            <Router history={history}>
                <div>
                <Switch>
                    <Route path="/streams/new" exact component={StreamCreate} />
                    <Route path="/streams/edit/:id" exact component={StreamEdit} />
                    <Route path="/streams/delete/:id" exact component={StreamDelete} />
                    <Route path="/streams/:id" exact component={StreamShow} />
                </Switch>
                </div>
            </Router>
        </Route> */}
        {/* <Route path="/translate">
        </Route> */}
        </div>
        
        );
};