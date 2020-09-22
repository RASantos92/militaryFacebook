// import { navigate } from '@reach/router';
import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';

const Show = props => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/user/${props.id}`)
            .then(res => setUser(res.data.results))
            .catch(err => console.log(err));
    }, [props])

    return (
        <div className="container vh-100" id="content">
            {
                user ? <>
                    <div className="vh-100">
                        <div className="col mx-auto">
            <p>Photo of selected user {user.userRank}</p>
            <p>{user.userName}|LOS:{user.userLOS}|MOS:{user.userRateMOS}</p>
                            <p style={{color:"black"}}>
                                <Link to="/">Message</Link>
                                <Link to="/">Post</Link>
                                <Link to="/">Upload</Link>
                            </p>
                            <button className="btn btn-success">Send care package</button>
                        </div>
                        <div className="col mx-auto h-75">
                            posts from other users. direct and indirect
            </div>
                        <div className="col mx-auto h-25">
                            misc content
            </div>
                    </div>
                </> : null
            }
        </div>
    );
}

export default Show;