import React from "react";
import { ReactComponent as Logo } from "./assets/dzik.svg";
import "./App.scss";

const App: React.FC = () => {
  return (
    <main className="App">
      <Logo className="App__logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
    </main>
  );
};

export default App;
