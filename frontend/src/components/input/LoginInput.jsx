import React from "react";

const LoginInput = (props) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      className="input mb-4 w-full py-2 px-2 bg-slate-200 rounded"
      style={props.style}
      name={props.name}
      id={props.id}
    />
  );
};

export default LoginInput;
