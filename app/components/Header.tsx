"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

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