import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Landing from './pages/Landing';
import Dashboard from "./pages/Dashboard";
import Home from "./components/Home";
import Summarizer from "./components/Summarizer";
import Note from './pages/Note';
import Folder from './pages/Folder';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import PrivateRoute from './auth/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route element={<PrivateRoute/>}>
          <Route path="/" element={<Dashboard/>}>
              <Route path="home" element={<Home />} />
              <Route path="ytsum" element={<Summarizer />} />
              <Route path="note/:id" element={<Note />} />
              <Route path="folder/:id" element={<Folder />} />
          </Route>
        </Route>
        <Route path="/signin" exact element={<Signin />} />
        <Route path="/signup" exact element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
