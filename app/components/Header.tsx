"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  // Set isClient to true once component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Function to check if a path is active
  const isActive = (path: string) => {
    if (!isClient) return false;
    if (path === '/') {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  // State for dropdowns
  const [dropdowns, setDropdowns] = useState({
    leistungen: false,
    ankauf: false
  });

  const toggleDropdown = (key: any) => {
    setDropdowns(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link className="navbar-brand" href="/">
            <Image
              src="/images/logo.png"
              width={75}
              height={75}
              alt="logo"
            />
          </Link>
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
                <Link 
                  className={`nav-link ${isClient && isActive('/') ? 'active' : ''}`}
                  href="/"
                >
                  HOME
                </Link>
              </li>
              <li className={`nav-item dropdown ${isClient && isActive('/leistungen') ? 'active' : ''}`}>
                <div
                  className={`nav-link dropdown-toggle ${isClient && isActive('/leistungen') ? 'active' : ''}`}
                  role="button"
                  onClick={() => toggleDropdown('leistungen')}
                  style={{ cursor: 'pointer' }}
                >
                  LEISTUNGEN
                </div>
                <ul
                  className={`dropdown-menu ${dropdowns.leistungen ? 'show' : ''}`}
                >
                  <li>
                    <Link 
                      className={`dropdown-item ${isClient && isActive('/leistungen') ? 'active' : ''}`}
                      href="/leistungen"
                      onClick={() => toggleDropdown('leistungen')}
                    >
                      LEISTUNGEN
                    </Link>
                  </li>
                </ul>
              </li>
              <li className={`nav-item dropdown ${isClient && isActive('/ankaufsprofil') ? 'active' : ''}`}>
                <div
                  className={`nav-link dropdown-toggle ${isClient && isActive('/ankaufsprofil') ? 'active' : ''}`}
                  role="button"
                  onClick={() => toggleDropdown('ankauf')}
                  style={{ cursor: 'pointer' }}
                >
                  ANKAUFSPROFIL
                </div>
                <ul
                  className={`dropdown-menu ${dropdowns.ankauf ? 'show' : ''}`}
                >
                  <li>
                    <Link 
                      className={`dropdown-item ${isClient && isActive('/ankaufsprofil') ? 'active' : ''}`}
                      href="/ankaufsprofil"
                      onClick={() => toggleDropdown('ankauf')}
                    >
                      ANKAUFSPROFIL
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link 
                  className={`nav-link ${isClient && isActive('/person') ? 'active' : ''}`}
                  href="/person"
                >
                  PERSON
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className={`nav-link ${isClient && isActive('/impressum') ? 'active' : ''}`}
                  href="/impressum"
                >
                  IMPRESSUM
                </Link>
              </li>
            </ul>
            <Link 
              href="/contact-us" 
              className={`btn ${isClient && isActive('/contact-us') ? 'btn-secondary' : 'btn-outline-secondary'}`}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}