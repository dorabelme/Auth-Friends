
import React, { useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import AddFriend from "./AddFriend";
import Friend from "./Friend";


function FriendList({ history, friends, setFriends }) {

    useEffect(() => {
        axiosWithAuth()
            .get("http://localhost:5000/api/friends")
            .then(response => {
                setFriends(response.data);
            })
            .catch(e => {
                console.log(e.response.data);
                localStorage.removeItem("token");
                history.push("/");
            });
    }, [history]);

    return (
        <div>
            <div className="friendCard">
                {friends.length > 0
                    ? friends.map(friend => <Friend setFriends={setFriends} key={friend.id} friend={friend} history={history} />)
                    : null}
            </div>
            <button
                className="btn"
                onClick={() => {
                    localStorage.removeItem("token");
                    history.push("/");
                }}
            >
                Logout
      </button>
        </div>
    );
}

export default FriendList;