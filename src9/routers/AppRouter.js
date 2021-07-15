import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ParticipantRouter from './ParticipantRouter';

const AppRouter = (props) => {
    return (<BrowserRouter>
        <div className='container'>
        <Switch>
        <Route path="/participant" component={ParticipantRouter}/>
        </Switch>
        </div>
        </BrowserRouter>
    );
}

export default AppRouter;
        