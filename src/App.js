import React from "react";
import { Button } from "@material-ui/core";
import Header from "./components/fragments/Header";
import Menu from "./components/fragments/Menu";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Main from "./pages/Main";
import Container from "@material-ui/core/Container";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
export default function App() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Router>
      <Header handleDrawerOpen={handleDrawerOpen} open={open} />
      <Menu open={open} handleDrawerClose={handleDrawerClose} />
      <Container
        style={{
          paddingTop: 150,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/regis" component={Register} />
          <Route
            path="/"
            exact={true}
            component={() => <Redirect to="/login" />}
          />
        </Switch>
      </Container>
    </Router>
  );
}
