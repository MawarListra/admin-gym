// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login";
import Homepage from "./Pages/Homepage";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path="/AdminDashboard" component={Homepage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
