import './App.css';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Landing from './pages/Landing';
import Dashboard from "./pages/Dashboard";
import Home from "./components/Home";
import Summarizer from "./components/Summarizer";
import Note from './pages/Note';
import Folder from './pages/Folder';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import PrivateRoute from './auth/PrivateRoute';
import AppRoute from './core/AppRoute';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={<Landing />} />
        <Route exact path={['/home','/ytsum','/note/:id','/folder/:id']}>
          <Dashboard>
            <Route path="/home" component={<Home/>}/>
            <Route path="/ytsum" component={<Summarizer/>}/>
            <Route path="/note/:id" component={<Note/>}/>
            <Route path="/folder/:id" component={<Folder/>}/>
          </Dashboard>
        </Route>
        <Route path="/signin" exact component={<Signin />} />
        <Route path="/signup" exact component={<Signup />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
