import 'semantic-ui-css/semantic.min.css';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./views/Home/index";
import { TableGame } from "./views/Table-game/index";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/game" component={TableGame} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
