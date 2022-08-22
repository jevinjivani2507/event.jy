import "./App.css";
import { Route, Routes, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import EventPage from "./pages/EventPage";

const theme = createTheme({
  type: "light", // it could be "light" or "dark"
  theme: {
    colors: {
      // brand colors
      primary: "#181A20",
      secondary: "#FA7000",

      // you can also create your own color
      mainDark: "#181A20",
      myColor: "#ff4ecd",

      // ...  more colors
    },
    space: {},
    fonts: {
      // font families
      body: "MontserratRegular",
      heading: "MontserratBold",
    },
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
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/event/:id" element={<EventPage />} />
          </Route>
        </Routes>
      </div>
    </NextUIProvider>
  );
}

export default App;
