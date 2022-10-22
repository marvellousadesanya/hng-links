import "./App.css";
import Links from "./Links.js";

function App() {
  return (
    <div className="App">
      <img id="profile__img" src={require("./marv.jpg")}></img>
      <p id="twitter">@BeLikeMarv</p>
      <p id="slack">Marvellous Adesanya</p>
      <Links />
      <img></img>
      <img></img>
    </div>
  );
}

export default App;
