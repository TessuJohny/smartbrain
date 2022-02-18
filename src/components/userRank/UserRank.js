import React from "react";

const UserRank = () => {
    let msg = 'Tessu, your current rank is...';
    let rank = '#5';
    return (
        <div>
            <div className="white f3">{msg}</div>
            <div className="white f1">{rank}</div>
        </div>
    );
}

export default UserRank;