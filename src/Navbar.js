import React from "react";
import "./App.css";
export default function Navbar() {
  return (
    <header>
      <img className="nav--logo" src="./UNI_logo.png" alt="no" />
      <nav className="nav">
        <ul className="nav__links">
          <li>
            <a href="https://www.pluralsight.com/guides/how-to-render-%22a%22-with-optional-href-in-react">
              Medications
            </a>
          </li>
          <li>
            <a href="https://www.pluralsight.com/guides/how-to-render-%22a%22-with-optional-href-in-react">
              Test Reports
            </a>
          </li>
          <li>
            <a href="https://www.pluralsight.com/guides/how-to-render-%22a%22-with-optional-href-in-react">
              Diseases
            </a>
          </li>
          <li>
            <a href="https://www.pluralsight.com/guides/how-to-render-%22a%22-with-optional-href-in-react">
              Hospitals
            </a>
          </li>
        </ul>

        {/* <h3>
          <button>Medications</button>
        </h3>
        <h3>
          <button>Test Reports</button>
        </h3>
        <h3>
          <button>Diseases</button>
        </h3>
        <h3>
          <button>Hospitals</button>
        </h3>
        <h3>
          <button>Login/SignUp</button>
        </h3> */}
      </nav>
      <button className="button-3">
        <a
          className="inside-button-3"
          href="https://www.pluralsight.com/guides/how-to-render-%22a%22-with-optional-href-in-react"
        >
          Login/SignUp
        </a>
      </button>
    </header>
  );
}
