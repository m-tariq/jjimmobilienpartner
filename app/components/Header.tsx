"use client";
import Image from "next/image";
// import { useEffect } from 'react';

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            {/* <img src="assets/images/logo.png" width="75" alt="logo" /> */}
            {/* import Image from 'next/image'; */}

            <Image
              src="/images/logo.png"
              width={75}
              height={75} // you'll need to specify height too
              alt="logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="leistungenDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Leistungen
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="leistungenDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Leistungen
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="ankaufDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  AnkauFsprofil
                </a>
                <ul className="dropdown-menu" aria-labelledby="ankaufDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      AnkauFsprofil
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Person
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Impressum
                </a>
              </li>
            </ul>
            <button type="button" className="btn btn-outline-secondary">
              Contact Us
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
