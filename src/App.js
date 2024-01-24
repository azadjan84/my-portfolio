import { Route, Routes } from "react-router-dom";
import Home from "./component/home/Home";
import "./app.css"

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/my-portfolio" exact  element={<Home />} />
      </Routes>
    </div>
  
  );
}

export default App;
