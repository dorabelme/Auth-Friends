
import React, { useEffect } from 'react';


import { Friend } from './Friend';

const FriendsList = ({ fetchData, state }) => {

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <h1>Friends</h1>
            <ul className="wrapper">
                {state.friends.map((friend, index) => <Friend key={index} info={friend} />)}
            </ul>
        </div>
    );

}

export default FriendsList;