import "./App.css";
import httpdLogo from "./images/httpd.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={httpdLogo} className="App-logo" alt="logo" />
        <p>React-Apache-Webserver</p>
      </header>
    </div>
  );
}

export default App;
