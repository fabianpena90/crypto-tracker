import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './components/layout/Navbar';
import Home from "./components/pages/Home";
import Exchanges from "./components/pages/Exchanges";
import About from "./components/pages/About";
import Charts from "./components/crypto/Charts";
import './App.css';

function App() {
  return (
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/exchanges" component={Exchanges} />
            <Route path="/charts" component={Charts} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
