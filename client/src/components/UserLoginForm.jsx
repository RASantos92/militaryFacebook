import React from 'react';

const UserForm = props => {
    const {inputs,handleInput,handleSubmit,errors,submitValue} = props;
    return(
        <form className="col mx-auto" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="userName">User Name:</label>
                <input className="form-control" type="text" value={inputs.userName} onChange={handleInput} name="userName"/>
                <span className="text-danger">{errors.userName ? errors.userName.message : ""}</span>
            </div>
            <div className="form-group">
                <label htmlFor="userPassword">Password:</label>
                <input className="form-control" type="password" value={inputs.userPassword} onChange={handleInput} name="userPassword"/>
                <span className="text-danger">{errors.userPassword? errors.userPassword.message : ""}</span>
            </div>
            <input type="submit" value={submitValue} className="btn btn-info"/>
        </form>
    )
}

export default UserForm;