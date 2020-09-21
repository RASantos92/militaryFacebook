import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import UserForm from '../components/UserForm';
import { navigate } from '@reach/router';

const Edit = props => {
    const initialErrors = {
        userFirstName:"",
        userLastName:"",
        userName:"",
        userEmail:"",
        userPassword:"",
        userConfirmPW:"",
        userLocation:"",
        userBranch:"",
    }
    const [edit,setEdit] = useState({
        userFirstName:"",
        userLastName:"",
        userName:"",
        userEmail:"",
        userPassword:"",
        userConfirmPW:"",
        userLocation:"",
        userBranch:"",
    });
    const [errors,setErrors] = useState(initialErrors);

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/user/${props.id}`)
            .then(res => setEdit(res.data.results))
            .catch(err => console.log(err));
    }, [props])

    const handleInput = e => {
        setEdit({
            ...edit,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(initialErrors)
        Axios.put(`http://localhost:8000/api/update/user/${edit._id}`,edit)
            .then(res => {
                navigate(`/user/${edit._id}`)
            })
            .catch(err => setErrors(err.response.data.errors));
    }
    return(
        <div>
            <h2>Edit {edit.userName}</h2>
            <UserForm
                inputs = {edit}
                errors={errors}
                handleInput={handleInput}
                handleSubmit={handleSubmit}
                submitValue="Edit User"
            />
        </div>
    )
}

export default Edit;