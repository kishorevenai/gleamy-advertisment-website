import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./Components/Layout/MainLayout";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />  }></Route>
      </Route>
    </Routes>
  );
}

export default App;
