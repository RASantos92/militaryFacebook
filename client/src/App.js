import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Router } from '@reach/router';
import UserPage from './views/UserPage';
import UserLogin from './views/UserLogin';
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
        <Link to="/" className="btn btn-info btn-outline-dark">Friends</Link>
        <Link to="/" className="btn btn-info btn-outline-dark">Recruitment</Link>
        <Link to="/" className="btn btn-info btn-outline-dark">Saved</Link>
      </div>
      <Router>
        <UserPage path="/" />
        <UserLogin path="/new"/>
        {/* <Show path="/pet/:id"/> 
        <Edit path="/edit/:id"/> */}
      </Router>

    </div>
  );
}

export default App;
