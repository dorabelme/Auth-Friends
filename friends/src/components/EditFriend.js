import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

function EditFriend(props) {

    const friend = props.location.state.friend;
    const setFriends = props.setFriends;

    const [name, setName] = useState(friend);

    const handleChange = e => {
        e.preventDefault();
        setName({ ...name, [e.target.name]: e.target.value });
    };

    const editFriend = e => {
        e.preventDefault();
        axiosWithAuth()
            .put(`http://localhost:5000/api/friends/${name.id}`, name)
            .then(res => {
                console.log(res.data);
                setFriends(res.data);
            })
            .catch(err => {
                console.log(err.response);
            });
    };

    return (
        <div className="addContainer">
            <form className="form" onSubmit={event => editFriend(event)}>
                <h1 className="loginTitle">Edit Friends</h1>
                <p className="form-group">
                    <label className="label">
                        Name
            <input
                            className="input"
                            type="text"
                            name="name"
                            onChange={handleChange}
                            value={name.name}
                        />
                    </label>
                </p>

                <p className="form-group">
                    <label className="label">
                        Age
            <input
                            className="input"
                            type="age"
                            name="age"
                            onChange={handleChange}
                            value={name.age}
                        />
                    </label>
                </p>

                <p className="form-group">
                    <label className="label">
                        Email
            <input
                            className="input"
                            type="email"
                            name="email"
                            onChange={handleChange}
                            value={name.email}
                        />
                    </label>
                </p>

                <button className="btn" onClick={editFriend}>
                    Edit Friend
        </button>
            </form>
        </div>
    );
}

export default EditFriend;
