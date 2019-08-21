import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

function AddFriend() {
    const [name, setName] = useState({
        name: "",
        age: "",
        email: "",
        id: Date.now()
    });
    const handleChange = e => {
        e.preventDefault();
        setName({ ...name, [e.target.name]: e.target.value });
    };

    const addFriend = e => {
        e.preventDefault();
        axiosWithAuth()
            .post("http://localhost:5000/api/friends", name)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err.response);
            });
    };

    return (
        <div className="addContainer">
            <form className="form" onSubmit={event => addFriend(event)}>
                <h1 className="loginTitle">Add More Friends</h1>
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

                <button className="btn" onClick={addFriend}>
                    Add Friend
        </button>
            </form>
        </div>
    );
}

export default AddFriend;
