import "./App.scss";
import { Home, Contact, Gear, Information, Profile, Work } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/gear">
            <Gear />
          </Route>
          <Route path="/information">
            <Information />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
