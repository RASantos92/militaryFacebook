import React,{useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Router } from '@reach/router';
import UserPage from './views/UserPage';
import UserReg from './views/UserReg';
import UserLogin from './views/UserLogin'
import AllUsers from './views/AllUsers'
import ShowUser from './views/ShowUser'
import UserEdit from './views/UserEdit'
// import Axios from 'axios'
import background from './assets/img/military.jpg';
// import Show from './views/Show';
// import Edit from './views/Edit';


function App() {
  const[logged,setLogged] = useState(null);
  return (
    <div className="App" style={{ backgroundImage: ` url(${background})` }}>
      <div className="col-10 mx-auto text-align-end bg-white">
        {logged !== null ? `${logged.userName}||`:""} {logged !== null ? `${logged.userLOS} Years ||`:""} {logged !== null ? `${logged.userRateMOS} Duty`:""}
      </div>
      <div className="col mx-auto">
        <Link to="/new/"><h1 style={{ color: "black" }} className="bg-white">Military Facebook</h1></Link>
      </div>
      <div className="col">
        {/* <Link to="/new" className="btn btn-info btn-outline-dark">Military Facebook</Link> */}
        <Link to="/" className="btn btn-info btn-outline-dark">Home</Link>
        <Link to="/user" className="btn btn-info btn-outline-dark">Friends</Link>
        <Link to="/" className="btn btn-info btn-outline-dark">Recruitment</Link>
        <Link to="/" className="btn btn-info btn-outline-dark">Liked</Link>
      </div>
      <Router>
        <UserPage 
        path="/userpage/:id" 
        logged={logged}
        />
        <UserReg 
        path="/new"
        setLogged={setLogged}
        />
        <UserLogin 
        path="/"
        setLogged={setLogged}
        />
        <AllUsers path="/user"/> 
        <ShowUser path="/user/:id"/>
        <UserEdit path="/user/edit/:id"/>
      </Router>

    </div>
  );
}

export default App;
