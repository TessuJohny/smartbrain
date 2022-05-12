import React from "react";

const UserRank = ({ name, count }) => {
    let msg = name + ', you have made ' + count + ' entries...';
    return (
        <div>
            <div className="white f3">{msg}</div>
        </div>
    );
}

export default UserRank;