import React from "react";

import Button from "./components/Button";

import { ReactComponent as Logo } from "./assets/dzik.svg";

import "./App.scss";

const App: React.FC = () => {
  const log = () => {
    console.log("test");
  };
  return (
    <main className="App">
      <Logo className="App__logo" />
      <div className="App__actions">
        <Button onClick={log}>Trening A</Button>
        <Button onClick={log}>Trening B</Button>
        <Button onClick={log}>Podsumowanie</Button>
      </div>
    </main>
  );
};

export default App;
