import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Router } from '@reach/router';
import UserPage from './views/UserPage';
import UserReg from './views/UserReg';
import UserLogin from './views/UserLogin'
import AllUsers from './views/AllUsers'
import ShowUser from './views/ShowUser'
// import Show from './views/Show';
// import Edit from './views/Edit';

function App() {
  return (
    <div className="App">
      <div className="col text-align-end">
        userName/ length of service/ mos
      </div>
      <div className="col mx-auto">
        <Link to="/new/"><h1 style={{color:"black"}}>Military Facebook</h1></Link>
      </div>
      <div className="col">
        {/* <Link to="/new" className="btn btn-info btn-outline-dark">Military Facebook</Link> */}
        <Link to="/" className="btn btn-info btn-outline-dark">Home</Link>
        <Link to="/user" className="btn btn-info btn-outline-dark">Friends</Link>
        <Link to="/" className="btn btn-info btn-outline-dark">Recruitment</Link>
        <Link to="/" className="btn btn-info btn-outline-dark">Liked</Link>
      </div>
      <Router>
        <UserPage path="/userpage/:id" />
        <UserReg path="/new"/>
        <UserLogin path="/"/>
        <AllUsers path="/user"/> 
        <ShowUser path="/user/:id"/>
      </Router>

    </div>
  );
}

export default App;
