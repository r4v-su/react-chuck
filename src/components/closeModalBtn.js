import React from "react";

const CloseModalBtn = function(props) {

    return(
        <button className="closeModalBtn" onClick={()=> {
            props.onClick('')}}
            >
            CLOSE
        </button>
    )
}

export default CloseModalBtn;