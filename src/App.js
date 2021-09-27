import { Switch, Route } from "react-router-dom";
import UpComing from "./components/UpComing";
import Home from "./components/Home";
import Nav from "./Nav";

const App = () => {
  return (
    <>
      <div>
       <Nav />
        <Switch>
          <Route exact path="/upcoming" render={() => <Home />} />
          <Route exact path="/" render={() => <UpComing />} />
        </Switch>
      </div>
    </>
  );
};

export default App;
