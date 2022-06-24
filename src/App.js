import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from '../src/Components/Home'
import Login from "./Components/Login";
import './App.css';
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          {/* <Route path="/hotels" element={<List/>}/>
          <Route path="/hotels/:id" element={<Detail/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
