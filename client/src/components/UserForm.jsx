import React from 'react';

const UserForm = props => {
    const {inputs,handleInput,handleSubmit,errors,submitValue} = props;
    return(
        <form className="col mx-auto" onSubmit={handleSubmit}>
            
            <div className="form-group">
                <label className="bg-white" htmlFor="userName">User Name:</label>
                <input className="form-control" type="text" value={inputs.userName} onChange={handleInput} name="userName"/>
                <span className="text-danger">{errors.userName ? errors.userName.message : ""}</span>
            </div>
            <div className="form-group">
                <label className="bg-white" htmlFor="userFirstName">First Name:</label>
                <input className="form-control" type="text" value={inputs.userFirstName} onChange={handleInput} name="userFirstName"/>
                <span className="text-danger">{errors.userFirstName ? errors.userFirstName.message : ""}</span>
            </div>
            <div className="form-group">
                <label className="bg-white" htmlFor="userLastName">Last Name:</label>
                <input className="form-control" type="text" value={inputs.userLastName} onChange={handleInput} name="userLastName"/>
                <span className="text-danger">{errors.userLastName ? errors.userLastName.message : ""}</span>
            </div>
            <div className="form-group">
                <label className="bg-white" htmlFor="userLocation">Stationed At / Location:</label>
                <input className="form-control" type="text" value={inputs.userLocation} onChange={handleInput} name="userLocation"/>
                <span className="text-danger">{errors.userLocation ? errors.userLocation.message : ""}</span>
            </div>
            
            <div className="form-group">
                <label className="bg-white" htmlFor="userEmail">Email:</label>
                <input className="form-control" type="text" value={inputs.userEmail} onChange={handleInput} name="userEmail"/>
                <span className="text-danger">{errors.userEmail ? errors.userEmail.message : ""}</span>
            </div>

            {/* add click.hide jquery */}
            <p className="text-success bg-white">for military personel only</p>
            <div className="form-group">
                <label className="bg-white text-success" htmlFor="userRank">Rank:</label>
                <input className="form-control" type="text" value={inputs.userRank} onChange={handleInput} name="userRank"/>
                <span className="text-danger">{errors.userRank ? errors.userRank.message : ""}</span>
            </div>
            <div className="form-group">
                <label className="bg-white text-success" htmlFor="userRateMOS">Rate / MOS:</label>
                <input className="form-control" type="text" value={inputs.userRateMOS} onChange={handleInput} name="userRateMOS"/>
                <span className="text-danger">{errors.userRateMOS ? errors.userRateMOS.message : ""}</span>
            </div>
            <div className="form-group">
                <label className="bg-white text-success" htmlFor="userLOS">length of service:</label>
                <input className="form-control" type="number" value={inputs.userLOS} onChange={handleInput} name="userLOS"/>
                <span className="text-danger">{errors.userLOS ? errors.userLOS.message : ""}</span>
            </div>
            <div className="form-group">
                <label className="bg-white text-success" htmlFor="userBranch">Branch:</label>
                <input className="form-control" type="text" value={inputs.userBranch} onChange={handleInput} name="userBranch"/>
                <span className="text-danger">{errors.userBranch ? errors.userBranch.message : ""}</span>
            </div>
                {/* stop here */}
            <div className="form-group">
                <label className="bg-white" htmlFor="userPassword">Password:</label>
                <input className="form-control" type="password" value={inputs.userPassword} onChange={handleInput} name="userPassword"/>
                <span className="text-danger">{errors.userPassword? errors.userPassword.message : ""}</span>
            </div>
            <div className="form-group">
                <label className="bg-white" htmlFor="userConfirmPW">Confirm Password:</label>
                <input className="form-control" type="Password" value={inputs.userConfirmPW} onChange={handleInput} name="userConfirmPW"/>
                <span className="text-danger">{errors.userConfirmPW? errors.userConfirmPW.message : ""}</span>
            </div>
            <input type="submit" value={submitValue} className="btn btn-info"/>
        </form>
    )
}

export default UserForm;