import "./styles.css";
import * as React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link as RouterLink,
  useMatch
} from "react-router-dom";

function Home() {
  return <>Home Screen</>;
}
function Variant() {
  return <>Hello from Variant</>;
}
function Option() {
  return <>Hello from Option</>;
}
function Colors() {
  return <>Hello from Colors</>;
}
function Interior() {
  return <>Hello from Interior</>;
}
function Summary() {
  return <>Hello from Summary</>;
}
function NotFoundScreen() {
  return <>404 not found</>;
}

function NavLink(props) {
  const match = useMatch(props.to);
  return (
    <>
      <RouterLink
        className="nav-menu"
        style={{ color: match ? "red" : "#000" }}
        {...props}
      />
    </>
  );
}
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Variant />} />
      <Route path="/option" element={<Option />} />
      <Route path="/colors" element={<Colors />} />
      <Route path="/interior" element={<Interior />} />
      <Route path="/summary" element={<Summary />} />
      <Route path="*" element={<NotFoundScreen />} />
    </Routes>
  );
}
export default function App() {
  return (
    <div className="App">
      <h1>Build And Price Calculator</h1>
      <Router>
        <ul className="list-unstyled space-x-4">
          <li>
            <NavLink to="/">Home</NavLink>{" "}
          </li>
          <li>
            <NavLink to="/about">About Us</NavLink>{" "}
          </li>
          <li>
            <NavLink to="/option">Option</NavLink>
          </li>
          <li>
            <NavLink to="/colors">Colors</NavLink>
          </li>
          <li>
            <NavLink to="/interior">Interior</NavLink>
          </li>
          <li>
            <NavLink to="/summary">Summary</NavLink>
          </li>
        </ul>

        <AppRoutes />
      </Router>
    </div>
  );
}
