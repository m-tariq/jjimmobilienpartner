"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer text-center text-md-start">
      <div className="container p-4 pb-0">
        <section className="d-md-flex flex-wrap justify-content-md-between align-items-center">
          <Link href="/">
            <Image
              src="/images/logo.png"
              className="h-auto"
              width={100}
              height={40}
              alt="Logo"
              priority
            />
          </Link>
          <div>
            <Link href="/contact-us" className="btn bg-white border border-dark font-raleway fs-6 fw-600 contact-btn">
              Contact Us
            </Link>
          </div>
        </section>
        
        <section>
          <div className="row">
            <div className="col-md-4 mt-3">
              <p className="desc font-nunito fs-5 fw-600 my-2">
                Bridging connection between<br /> people and property.
              </p>
              <Link
                href="https://www.instagram.com/janjacobi_immobilien"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-sm rounded-circle bg-white text-dark"
              >
                <i className="fa fa-instagram"></i>
              </Link>
            </div>

            <div className="col-md-2 mx-auto text-center mt-3">
              <h6 className="title font-nunito fs-5 fw-bold mb-4">
                Quick Links
              </h6>
              <p>
                <Link className="link font-nunito fs-6 fw-500" href="/">
                  Home
                </Link>
              </p>
              <p>
                <Link className="link font-nunito fs-6 fw-500" href="/person">
                  Über uns
                </Link>
              </p>
              <p>
                <Link className="link font-nunito fs-6 fw-500" href="/leistungen">
                  Leistungen
                </Link>
              </p>
              <p>
                <Link className="link font-nunito fs-6 fw-500" href="/ankaufsprofil">
                  Ankaufsprofil
                </Link>
              </p>
            </div>
            <div className="col-md-2"></div>

            <div className="col-md-3 mx-auto mt-3">
              <h6 className="title font-nunito fs-5 fw-bold mb-4">
                Contact Information:
              </h6>
              <p className="link font-nunito fs-6 fw-500">
                Email: info@janjacobi-immobilien.de
              </p>
              <p className="link font-nunito fs-6 fw-500">
                Phone: +49 000 000000
              </p>
            </div>
          </div>
        </section>

        <hr className="my-3" />

        <section className="d-flex gap-3 flex-wrap justify-content-md-between justify-content-center align-items-center pb-3">
          <div className="copyright font-poppins fw-normal fs-6">
            © {new Date().getFullYear()} Jan Jacobi • All Rights Reserved
          </div>
          <div className="d-flex flex-wrap gap-3 justify-content-md-end justify-content-center">
            <Link
              className="copyright-link font-poppins fw-normal fs-6 text-decoration-none"
              href="/impressum"
            >
              Impressum
            </Link>
            <Link
              className="copyright-link font-poppins fw-normal fs-6 text-decoration-none"
              href="/datenschutz"
            >
              Datenschutz
            </Link>
            <Link
              className="copyright-link font-poppins fw-normal fs-6 text-decoration-none"
              href="/cookie-settings"
            >
              Cookie-Einstellungen
            </Link>
          </div>
        </section>
      </div>
    </footer>
  );
}