import { useState } from "react";
import Home from "./components/Home";
import Contacts from "./components/Contacts";
import About from "./components/About";
import { BrowserRouter as Router, Link } from "react-router-dom";

function App() {
  const [selectNavItem, setSelectNavItem] = useState(null);

  const handleNavItemClick = (item) => {
    setSelectNavItem(item);
  };

  return (
    <Router>
      <div className="bg-pink-200 h-screen rounded-xlg">
        <div className="bg-green-200 text-blue-800 text-2xl border-2 border-blue-800 px-4 font-serif italic p-2">
          <h1>John Doe</h1>
        </div>
        <div className="bg-pink-200 h-screen flex">
          <div className="text-blue-800 h-screen flex">
            <div
              className="text-blue-800 p-4 h-full border-r"
              style={{ width: "200px" }}
            >
              <nav>
                <div className="flex flex-col p-2 m-2">
                  <ul>
                    <li>
                      <Link
                        to="/"
                        className="py-2 px-4 block hover:text-red-500 font-serif italic p-2"
                        onClick={() => {
                          handleNavItemClick("home");
                        }}
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/about"
                        className="py-2 px-4 block hover:text-red-500 font-serif italic p-2"
                        onClick={() => {
                          handleNavItemClick("about");
                        }}
                      >
                        about
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/contact"
                        className="py-2 px-4 block hover:text-red-500 font-serif italic p-2"
                        onClick={() => {
                          handleNavItemClick("contact");
                        }}
                      >
                        Contacts
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
          <div className=" flex-grow bg-orange-200 h-[76vh] w-full border-2 border-blue-800 flex flex-end">
              {selectNavItem === "home" && <Home />}
              {selectNavItem === "about" && <About />}
              {selectNavItem === "contact" && <Contacts />}
            </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
