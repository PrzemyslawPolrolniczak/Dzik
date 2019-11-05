import React from "react";
import { Link } from "react-router-dom";

import Button from "../../components/Button/index";

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
        <Button onClick={log}>Trening B</Button>
        <Button onClick={log}>Podsumowanie</Button>
      </div>
    </section>
  );
};

export default Homepage;
