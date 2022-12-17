import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Landing from './pages/Landing';
import Dashboard from "./pages/Dashboard";
import Home from "./components/Home";
import Summarizer from "./components/Summarizer";
import Note from './pages/Note';
import Folder from './pages/Folder';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/" element={<Dashboard />}>
          <Route path="home" element={<Home />} />
          <Route path="ytsum" element={<Summarizer />} />
          <Route path="note/:id" element={<Note />} />
          <Route path="folder/:id" element={<Folder />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
