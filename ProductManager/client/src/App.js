import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Main from "./views/Main"
import Detail from './views/Detail';
import Update from './views/Update';

function App() {
  return (
    <Router>
        <Main path="/"/>
        <Detail path="/:id" />
        <Update path="/:id/edit" />
      </Router>
  );
}

export default App;
