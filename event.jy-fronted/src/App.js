import "./App.css";
import {
  Route,
  Routes,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import MyEvents from "./components/MyEvents";
import EventPage from "./pages/EventPage";
import EventList from "./components/EventList";
import ClubPage from "./components/ClubPage";
import InsertEvent from "./components/InsertEvent";
import Cookies from "js-cookie";
import { useEffect } from "react";

const theme = createTheme({
  type: "light", // it could be "light" or "dark"
  theme: {
    colors: {
      // brand colors
      primary: "#EEEEEE",

      // ...  more colors
    },
    space: {},
    fonts: {
      // font families
    },
  },
});

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (Cookies.get("user") === "loginTrue" && location.pathname === "/login") {
      navigate("/");
    } else if (Cookies.get("user") !== "loginTrue" && location.pathname !== "/login" && location.pathname !== "/register") {
      navigate("/login");
    }
  }, [location.pathname]);

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
            <Route path="/EventList" element={<EventList />} />
            <Route path="/MyEvents" element={<MyEvents />} />
            <Route path="/club" element={<ClubPage />} />
            <Route path="/InsertEvent" element={<InsertEvent />} />
          </Route>
        </Routes>
      </div>
    </NextUIProvider>
  );
}

export default App;
