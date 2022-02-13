import React from "react";
import './imageBrowser.css';

const ImageBrowser = ({onInputChange, onButtonClick}) => {
    const text = 'This magic brain can detect faces in your photos. Give it a try...';
    return (
        <div>
            <p className="f3">{text}</p>
            <div className="center">
                <div className="form pa4 br3 shadow-5">
                    <input className="f4 pa2 w-70" type={'text'} onChange={onInputChange}/>
                    <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple" onClick={onButtonClick}>Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageBrowser;