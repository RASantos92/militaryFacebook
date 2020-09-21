import React, { useState, useEffect } from 'react';
import Axios from 'axios';
// import { Link } from '@reach/router'

const UserPage = props => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:8000/api/user')
            .then(res => setUser(res.data.results))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="container vh-100" id="content">
            <div className="col mx-auto">
                <p>Photo of selected user</p>
                <p>User name/ los/ mos</p>
                <p>message/post/upload</p>
                <p>send carepackage</p>
            </div>
            <div className="col mx-auto h-75">
                posts from other users. direct and indirect
            </div>
            <div className="col mx-auto h-25">
                misc content
            </div>
        </div>
    );
}

export default UserPage;