import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Auth from "./Signup/Auth";
import Signin from "./Signup/Signin";
import Signup from "./Signup/Signup";
import Reset from "./Signup/Reset";
import Forgot from "./Signup/Forgot";
import HomeRoute  from "./components/Routee";
import Home from "./components/Home"
import About from "./components/About"
import Contacts from "./components/Contacts"

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth/>}>
          <Route path="/" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="reset" element={<Reset />} />
          <Route path="forgot" element={<Forgot />} />

        </Route>
        <Route path="/" element={<HomeRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contacts />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
