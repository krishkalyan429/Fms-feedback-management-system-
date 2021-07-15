import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Container } from "@material-ui/core";
import Cart from "./components/cart";
import Nav from "./components/nav";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Users from "./components/users";
import Login from "./components/login";
import Register from "./components/register";
import UpdateUser from "./components/updateuser";
import AddUser from "./components/adduser";
import PageNotFound from "./components/pagenotfound";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Container>
        <Nav />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/user/update/:id" component={UpdateUser} />
          <Route path="/user/add" component={AddUser} />
          <Route path="/users" component={Users} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/cart" component={Cart} />
          <Redirect exact from="/" to="/home" />
          <Route component={PageNotFound} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
