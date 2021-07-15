import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CourseRouter from './CourseRouter';

const AppRouter = (props) => {
    return (<BrowserRouter>
        <div className='container'>
        <Switch>
        <Route path="/Course" component={CourseRouter}/>
        </Switch>
        </div>
        </BrowserRouter>
    );
}

export default AppRouter;
        