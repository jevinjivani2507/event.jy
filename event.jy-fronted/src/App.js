import "./App.css";
import { Route, Routes, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Event from "./components/Event";
import Dashboard from "./pages/Dashboard";
import { NextUIProvider } from "@nextui-org/react";

function App() {
  return (
    <div className="flex flex-col">
      {/* <NextUIProvider> */}
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
      {/* </NextUIProvider> */}
    </div>
  );
}

export default App;
