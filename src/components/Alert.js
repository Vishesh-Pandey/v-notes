import React from "react";

function Alert(props) {
  return (
    <>
      <div
        className="alert alert-danger d-flex align-items-center position-absolute w-100"
        role="alert"
      >
        <div>{props.message}</div>
      </div>
    </>
  );
}

export default Alert;
