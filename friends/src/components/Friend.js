import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import { Card, Button, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'


function Friend({ friend, setFriends, history }) {

    function deleteFriend(event, friend) {
        event.preventDefault();
        axiosWithAuth()
            .delete(`http://localhost:5000/api/friends/${friend.id}`)
            .then(response => {
                setFriends(response.data);
            })
            .catch(e => {
                console.log(e.response.data);
            });
    }

    return (
        <Card>
            <Card.Content>
                <Image size='mini' src='https://cdn6.f-cdn.com/contestentries/918774/22954115/586eea98be949_thumb900.jpg' />
            <Card.Header>{friend.name}</Card.Header>
            <Card.Meta>{friend.email}</Card.Meta>
            <Card.Description>age: {friend.age}</Card.Description>
                <Button basic color='red' onClick={(event) => deleteFriend(event, friend)}>Delete</Button>
                <Button basic color='green' onClick={(event) => {
                    history.push({
                        pathname: '/editfriends',
                        state: { friend: friend }
                    });
                }}>Edit</Button>
                </Card.Content>
            </Card>
    );
}

export default Friend;