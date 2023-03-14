import React from "react";
import "./App.css";
export default function Navbar() {
  return (
    <header>
      <img className="nav--logo" src="./UNI_logo.png" alt="no" />
      <nav className="nav">
        <div className="nav__links">
          <div>
            <a href="https://www.pluralsight.com/guides/how-to-render-%22a%22-with-optional-href-in-react">
              Medications
            </a>
          </div>
          <div>
            <a href="https://www.pluralsight.com/guides/how-to-render-%22a%22-with-optional-href-in-react">
              Test Reports
            </a>
          </div>
          <div>
            <a href="https://www.pluralsight.com/guides/how-to-render-%22a%22-with-optional-href-in-react">
              Diseases
            </a>
          </div>
          <div>
            <a href="https://www.pluralsight.com/guides/how-to-render-%22a%22-with-optional-href-in-react">
              Hospitals
            </a>
          </div>
        </div>

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
