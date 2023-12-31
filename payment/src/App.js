import React from "react";
import { Switch, Route, Router, Redirect } from "react-router-dom";
import Typography from "@mui/material/Typography";

import ThemeProvider from "../../shared/theme";
import Landing from "./components/Landing";
import Standard from "./components/Standard";
import Authorise from "./components/Authorise";
import Nav from "../../shared/nav";
import { navConfig } from "./navConfig";

function Copyright() {
  const packageJson = require("../package.json");
  return (
    <Typography
      sx={{ mt: 2 }}
      variant="body2"
      color="textSecondary"
      align="center"
    >
      {`Copyright © ${new Date().getFullYear()} Assurant. All rights reserved. Payment version ${
        packageJson.version
      }`}
    </Typography>
  );
}

export default ({ history, userDetails, userPemission }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <ThemeProvider>
      <div style={{ marginTop: 64 }}>
        <Router history={history}>
          <Nav
            openNav={open}
            onCloseNav={() => setOpen(false)}
            navConfig={navConfig}
            userDetails={userDetails}
            userPemission={userPemission}
          />
          <Switch>
            <Route exact path="/payment/singlepayments">
              <Landing userDetails={userDetails} />
            </Route>
            <Route exact path="/payment/standard" component={Standard} />
            <Route exact path="/payment/authorise" component={Authorise} />
            <Route exact path="/payment">
              <Redirect to={"/payment/singlepayments"} />
            </Route>
            <Route path="/">
              <Landing userDetails={userDetails} />
            </Route>
          </Switch>
        </Router>
        <Copyright />
      </div>
    </ThemeProvider>
  );
};
