import React from 'react';

const Control = (props) => {
  return (
    <div className="control-container">
      <a id="ctrl-btn" onClick={props.onClick}>
        {props.status.btnPosition}
      </a>
    </div>
  );
}

export default Control;
