import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="main">main</div>
      <div className="pyramid">
        <ul className="moneylist">
          <li className="moneyListItem active">
            <span className="moneyListNumber">4</span>
            <span className="moneyListAmount">$100</span>
          </li>
          <li className="moneyListItem">
            <span className="moneyListNumber">4</span>
            <span className="moneyListAmount">$100</span>
          </li>
          <li className="moneyListItem">
            <span className="moneyListNumber">4</span>
            <span className="moneyListAmount">$100</span>
          </li>
          <li className="moneyListItem">
            <span className="moneyListNumber">4</span>
            <span className="moneyListAmount">$100</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
