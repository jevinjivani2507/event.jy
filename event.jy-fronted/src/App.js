import "./App.css";
import { Route, Routes, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="flex flex-col">
      <Routes>
        <Route
          element={
            <div className="">
              <Navbar />
              <Outlet />
            </div>
          }
        >
          <Route path="/" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
