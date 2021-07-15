import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Nav from "./components/nav";
import Products from "./components/products";
import { Route, Switch } from "react-router-dom";
import ProductDetails from "./components/productdetails";
import { Container } from "@material-ui/core";
import Login from './components/login';
import Logout from './components/logout';
import Register from './components/register';

function App() {
  return (
    <div className="App">
      <Nav />
      <Container style={{ marginTop: "68px" }}>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/Register" component={Register} />
          <Route path="/product/details/:id" component={ProductDetails} />
          <Route path="/products" component={Products} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
