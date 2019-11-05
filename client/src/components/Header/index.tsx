import React from "react";

import "./style.scss";

interface Props {
  title: string;
}

function Header(props: Props) {
  const { title } = props;

  return <header className="Header">{title}</header>;
}

export default Header;
