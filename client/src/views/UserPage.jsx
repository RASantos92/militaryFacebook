import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router'

const UserPage = props => {
    const {logged} = props;
    return (
        <div className="container vh-100" id="content">
            <div className="col mx-auto">
                <p className="bg-white">Photo of selected user</p>
                <p className="bg-white">{logged.userName} || {logged.userBranch} || {logged.userLocation}</p>
                <div className="d-flex justify-content-around bg-white">
                    <Link to="/" style={{color:"black"}}>Post</Link>
                    <Link to="/" style={{color:"black"}}>Upload</Link>
                </div>
                <button className="btn btn-success">Send care package</button>
            </div>
            <div className="col mx-auto h-75 bg-white">
                posts from other users. direct and indirect
            </div>
            <div className="col mx-auto h-25 bg-white">
                misc content
            </div>
        </div>
    );
}

export default UserPage;