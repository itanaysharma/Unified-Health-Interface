import React from "react";
import "./App.css";
// import { ReactComponent as Check } from "./UNI_logo.svg"; Can we used as SVG image
export default function Navbar() {
  return (
    <>
      <header>
        <img className="nav--logo" src="./UNI_logo.png" alt="no" />

        {/* <Check height="20px" width="8px" /> */}
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
        </nav>
        <button className="button-3">Login/SignUp</button>
      </header>
    </>
  );
}
