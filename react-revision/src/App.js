import { useEffect } from "react";
import "./App.css";
import Modal from "./chapter-4-react-core/4.15-portals.tsx";
import Parent from "./chapter-5-react-rendering-model/5.1-re-render-causes.tsx";
import Counter from "./chapter-5-react-rendering-model/5.4-batching.tsx";
import DashboardRenderer from "./chapter-5-react-rendering-model/5.6-component-identity.tsx";
import ReducerCounter from "./chapter-6-hooks/6.9-useReducer.tsx";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <ReducerCounter />
        </p>
        <Counter />
        <DashboardRenderer showAdmin={false} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
