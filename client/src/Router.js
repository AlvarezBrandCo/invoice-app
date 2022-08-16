import React from "react"
import MainPage from "./MainPage";
import InvoiceList from "./InvoiceList";
import {
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

class CreateRouter extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <MainPage>
        <Switch>
          <Route exact path="/" component={InvoiceList} />
          <Route path="/invoice/:invoiceId" component={InvoiceList} />
        </Switch>
      </MainPage>
    )
  }
}
export default withRouter(CreateRouter);
