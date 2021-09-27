import { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { Skeleton } from "@mui/material";
import UpComing from "./components/UpComing";
import Home from "./components/Home";
import { DataContext } from "./providers/DataContext";
import Nav from "./Nav";

const App = () => {
  const data = useContext(DataContext);
  if (!data.launchesUpcoming) {
    return <Skeleton animation="wave" />;
  }
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
