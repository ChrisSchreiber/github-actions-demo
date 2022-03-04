import logo from "./Octocat.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        GitHub is awesome!!!
        <p>
          <div>
            GitHub Repo:{" "}
            <a href="https://github.com/ChrisSchreiber/github-actions-demo">
              ChrisSchreiber / github-actions-demo
            </a>
          </div>
        </p>
        Automate All The tings!!!
      </header>
    </div>
  );
}

export default App;
