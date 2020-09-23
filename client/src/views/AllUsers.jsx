import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from '@reach/router'

const Main = props => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:8000/api/user',{withCredentials:true})
            .then(res => setUser(res.data.results))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
                    {
                        user.map((u, i) => {
                            return <div className="card col-8 mx-auto" key={i}>
                                <p>{i + 1}</p>
                                <p>{u.userName}</p>
                                <p>{u.userFirstName}</p>
                                <p>{u.userLastName}</p>
                                <p><Link className="btn btn-success" to={`/user/${u._id}`}>Show User {i + 1}</Link></p>
                            </div>
                        })
                    }
        </div>
    );
}

export default Main;