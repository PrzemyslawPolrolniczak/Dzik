import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/dzik.svg";

import "./styles.scss";

const Homepage: React.FC = () => {
  const log = () => {
    console.log("test");
  };
  return (
    <section className="Homepage">
      <Logo className="Homepage__logo" />
      <div className="actions">
        <Link className="actions__link" to="/trening-a">
          Trening A
        </Link>
        <Link className="actions__link" to="/trening-b" onClick={log}>
          Trening B
        </Link>
        <Link className="actions__link" to="/podsumowanie" onClick={log}>
          Podsumowanie
        </Link>
      </div>
    </section>
  );
};

export default Homepage;
