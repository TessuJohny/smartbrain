import React from "react";

const FaceRecognition = ({ imageURL }) => {
    return (
        <div>
            <div className="mt2">
                <img src={imageURL} alt="general" width={'500px'} height={'auto'}/>
            </div>
        </div>
    );
}

export default FaceRecognition;