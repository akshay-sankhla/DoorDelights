
import './App.css';

import Dashboard from './component/Dashboard';
import Ddlogin from './component/Ddlogin';
import EditProfile from './component/EditProfile';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ddsignup from './component/Ddsignup';
import {Route, Switch,} from "react-router-dom";
import { About } from './component/About';

function App() {
  return (
    <div>


      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Ddlogin} />
        <Route path="/register" component={Ddsignup} />
        <Route path="/editprofile" component={EditProfile} />
        <Route path="/about" component={About}/>
      </Switch>
    </div>
  );
}

export default App;
