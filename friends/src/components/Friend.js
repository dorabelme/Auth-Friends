
import React from 'react';
import FriendsList from './FriendsList';

export const Friend = (props) => {
    return (
        <li className="friend">
            <h2>Name: {props.info.name}</h2>
            <p>Age: {props.info.age} years</p>
            <p>Email: {props.info.email}</p>
        </li>
    );
};

export default Friend;