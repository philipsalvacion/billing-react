import React from "react";
import ReactDOM from "react-dom";
/* react library for routing */
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// /* bootstrap rtl for rtl support page */
// import "assets/vendor/bootstrap-rtl/bootstrap-rtl.scss";
/* plugins styles from node_modules */
// import "react-notification-alert/dist/animate.css";
// import "react-perfect-scrollbar/dist/css/styles.css";
// import "react-tabs/style/react-tabs.css";
// import "react-sliding-pane/dist/react-sliding-pane.css";

// /* plugins styles downloaded */
// import "assets/vendor/fullcalendar/dist/fullcalendar.min.css";
// import "assets/vendor/sweetalert2/dist/sweetalert2.min.css";
// import "assets/vendor/select2/dist/css/select2.min.css";
// import "assets/vendor/quill/dist/quill.core.css";
// import "assets/vendor/nucleo/css/nucleo.css";
// import "assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
// /* core styles */
// import "assets/scss/argon-dashboard-pro-react.scss?v1.1.0";
// import "assets/css/style.css";

import Home from "views/pages/Home.js";
import SignIn from "views/pages/SignIn.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={(props) => <Home {...props} />} />
      <Route path="/signin" render={(props) => <SignIn {...props} />} />
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);