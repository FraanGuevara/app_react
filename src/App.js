import Login from "./components/Login/Login";
import { Switch, Route } from "react-router-dom";
import Listado from "./components/Listado/Listado";

function App() {
  return (
    <>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/listado" component={Listado} />
    </Switch>
    </>
  );
}

export default App;
