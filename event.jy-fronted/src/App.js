import "./App.css";
import { Route, Routes, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Event from "./components/Event";
import Dashboard from "./pages/Dashboard";
import { createTheme, NextUIProvider, Text } from "@nextui-org/react";
import LoginPage from "./components/LoginPage";

const theme = createTheme({
  type: "light", // it could be "light" or "dark"
  theme: {
    colors: {
      // brand colors
      primary: "#323232",
      secondary: "#FA7000",

      // you can also create your own color
      myColor: "#ff4ecd",

      // ...  more colors
    },
    space: {},
    fonts: {},
  },
});

function App() {
  return (
    <NextUIProvider theme={theme}>
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
            <Route path="/login" element={<LoginPage />} />
          </Route>
        </Routes>
      </div>
    </NextUIProvider>
  );
}

export default App;
