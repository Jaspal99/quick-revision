import "./App.css";
import Modal from "./chapter-4-react-core/4.15-portals.tsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Modal>
          <h2>Modal</h2>
          <p>This content is rendered using a React portal.</p>
        </Modal>
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
