"use client";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="footer bg-grey text-center text-md-start">
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
              <p className="font-nunito fs-6 fw-bold">Follow us on : </p>
              <div className="d-flex gap-3 justify-content-md-start justify-content-center">
              <Link
                href=""
                target="_blank"
                className="social-icon d-flex align-items-center justify-content-center rounded-circle bg-white text-dark"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </Link>
              {/* <Link
                href=""
                target="_blank"
                className="social d-flex align-items-center justify-content-center rounded-circle bg-white text-dark"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </Link> */}
              <Link
                href="https://www.instagram.com/janjacobi_immobilien"
                target="_blank"
                className="social-icon d-flex align-items-center justify-content-center rounded-circle bg-white text-dark"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
              </div>
            </div>

            <div className="col-md-2 me-auto text-center mt-3">
              <h6 className="title font-nunito fs-5 fw-bold mb-4">
              Seitenlinks
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

            <div className="col-md-4 ms-auto mt-3">
              <h6 className="title font-nunito fs-5 fw-bold mb-4">
              So erreichen Sie uns:
              </h6>
              <p className="link font-nunito fs-6 fw-500">
                Email: info@jj-immobilienpartner.de
              </p>
              <p className="link font-nunito fs-6 fw-500">
              Telefonnummer: +49 000 000000
              </p>
            </div>
          </div>
        </section>

        <hr className="my-3" />

        <section className="d-flex gap-3 flex-wrap justify-content-md-between justify-content-center align-items-center pb-3">
          <div className="copyright font-poppins fw-normal fs-6">
            © {new Date().getFullYear()} Jan Jacobi <span className="mx-2 fw-bolder">•</span> All Rights Reserved
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