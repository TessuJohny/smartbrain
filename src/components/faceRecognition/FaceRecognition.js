import React from "react";
import './faceRecognition.css';

function FaceRecognition({ imageURL, box }) {
    return (
        <div className="center">
            <div className="mt2">
                {imageURL != '' && <img id="inputImg" src={imageURL} alt="general" width={'500px'} height={'auto'} />}
                {box != '' && <div className="box" style={{ top: box.top, right: box.right, bottom: box.bottom, left: box.left }}></div>}
            </div>
        </div>
    );
}

export default FaceRecognition;