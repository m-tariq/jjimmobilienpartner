"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

// Define types for dropdown state
type DropdownState = {
  leistungen: boolean;
  ankauf: boolean;
  per:boolean;
};

type DropdownKey = keyof DropdownState;

export default function Header() {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const isActive = (path: string) => {
    if (!isClient) return false;
    if (path === '/') {
      return pathname === path;
    }
    return pathname?.startsWith(path);
  };

  const [dropdowns, setDropdowns] = useState<DropdownState>({
    leistungen: false,
    ankauf: false,
    per: false
  });

  const toggleDropdown = (key: DropdownKey) => {
    setDropdowns(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <header>
      <nav id="top" className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand ms-md-5" href="/">
            <Image
              src="/images/logo.png"
              className="object-fit-cover"
              width={130}
              height={100}
              alt="logo"
              priority
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
              {/* <li className={`nav-item dropdown ${isClient && isActive('/leistungen') ? 'active' : ''}`}>
                <div
                  className={`nav-link dropdown-tog gle ${isClient && isActive('/leistungen') ? 'active' : ''}`}
                  role="button"
                  onClick={() => toggleDropdown('leistungen')}
                  style={{ cursor: 'pointer' }}
                >
                  LEISTUNGEN <FontAwesomeIcon icon={faAngleDown} className="ps-1" />
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
              </li> */}
              <li className="nav-item">
                <Link 
                  className={`nav-link ${isClient && isActive('/leistungen') ? 'active' : ''}`}
                  href="/leistungen"
                >
                  LEISTUNGEN
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className={`nav-link ${isClient && isActive('/ankaufsprofil') ? 'active' : ''}`}
                  href="/ankaufsprofil"
                >
                  ANKAUFSPROFIL
                </Link>
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
              className={`btn font-raleway fw-600 fs-6 header-btn ${isClient && isActive('/contact-us') ? 'btn-secondary' : 'btn-outline-dark'}`}
            >
              Kontakt
            </Link>
            <Link href="tel:009191829229" className="text-dark me-md-3">
            {/* <FontAwesomeIcon className="ms-4" icon={faPhone} /> */}
            <Image
              src="/images/phone.png"
              width={73}
              height={39}
              alt="logo"
              priority
            />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}