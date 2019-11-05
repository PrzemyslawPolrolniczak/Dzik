import React from "react";

import "./style.scss";

function Button(props: any) {
  const { children, onClick } = props;
  return (
    <button className="Button" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
