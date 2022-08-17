import React from "react";
import CloseModalBtn from './closeModalBtn.js';

const Modal = function(props) {
    return (
        <div className="backdrop">
        <div className="modal">
            <div className="joke">
            {props.joke}
            </div>
        {
            (props.joke !== undefined &&
                <CloseModalBtn onClick={props.closeModal} />)
            }

            </div>
        </div>
    )
}

export default Modal;