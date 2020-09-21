import React,{useState} from 'react';
import Axios from 'axios';
import UserLoginForm from '../components/UserLoginForm';
import { navigate } from '@reach/router';
import UserReg from './UserReg';
import { Link, Router } from '@reach/router';


const Login = props => {
    const initialUser = {
        userName:"",
        userPassword:"",
        userConfirmPW:"",
    }
    const initialErrors = {
        userName:"",
        userPassword:"",
        userConfirmPW:"",
    }
    const [user,setUser] = useState(initialUser)
    const [errors,setErrors] = useState(initialErrors);
    const handleInput = e => {
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }


    //what should we put in the axios?
    const handleSubmit = e => {
        e.preventDefault();
        setErrors(initialErrors)
        Axios.get(`http://localhost:8000/api/user/${user.id}`,user)
            .then(res => {
                if (res.data.results){
                    setUser(initialUser);
                    navigate(`/userpage/${user.id}`)
                }
                else{
                    console.log(res.data)
                    setErrors(res.data)
                }
            })
            .catch(err => console.log(err));
    }
    return(
        <div className="container vh-100" id="content">
            <h2>Strap Up</h2>
            <Link to="/new">Register</Link>
            <UserLoginForm
                inputs = {user}
                errors={errors}
                handleInput={handleInput}
                handleSubmit={handleSubmit}
                submitValue="Ship out"
            />
            <Router>
                <UserReg path="/new" />
            </Router>
        </div>
    )
}

export default Login;