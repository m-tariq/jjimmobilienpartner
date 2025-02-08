"use client";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="footer bg-grey text-center text-md-start">
      <div className="container p-4 pb-0">
        <section className="d-md-flex flex-wrap justify-content-md-between">
          <Link href="/">
            <Image
              src="/images/logo.png"
              className="h-auto"
              width={130}
              height={40}
              alt="Logo"
              priority
            />
          </Link>
          <div className="mt-md-3 mt-2 mb-3">
            <Link
              href="#top"
              className="link d-flex gap-2 align-items-center justify-content-md-end justify-content-center"
            >
              <Image
                src="/images/arrow-top.png"
                className="h-auto"
                width={28}
                height={40}
                alt="text"
              />
              <h5 className="font-nunito fw-bold fs-6 mb-0">nach oben</h5>
            </Link>
            {/* <Link href="/contact-us" className="btn bg-white border border-dark font-raleway fs-6 fw-600 contact-btn">
              Contact Us
            </Link> */}
          </div>
        </section>

        <section>
          <div className="row">
            <div className="col-md-4">
              <p className="desc font-nunito fs-5 fw-600 mb-3">
                Powered by Real Estate
              </p>
              {/* <p className="font-nunito fs-6 fw-bold">Follow us on : </p> */}
              <div className="d-flex gap-3 justify-content-md-start justify-content-center mb-3 mb-md-0">
                {/* <Link
                  href=""
                  target="_blank"
                  className="social-icon d-flex align-items-center justify-content-center rounded-circle bg-white text-dark"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </Link> */}
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

            <div className="col-md-2 me-auto text-center">
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
                <Link
                  className="link font-nunito fs-6 fw-500"
                  href="/leistungen"
                >
                  Leistungen
                </Link>
              </p>
              <p>
                <Link
                  className="link font-nunito fs-6 fw-500"
                  href="/ankaufsprofil"
                >
                  Ankaufsprofil
                </Link>
              </p>
              <p>
                <Link
                  className="link font-nunito fs-6 fw-500"
                  href="/contact-us"
                >
                  Kontakt
                </Link>
              </p>
            </div>

            <div className="col-md-4 ms-auto">
              <h6 className="title font-nunito fs-5 fw-bold mb-4">
                So erreichen Sie uns:
              </h6>
              <p className="link font-nunito fs-6 fw-500">
                Email: info@jj-immobilienpartner.de
              </p>
              <p className="link font-nunito fs-6 fw-500">
                Telefonnummer: +49 173 2725720
              </p>
              <Link
                href="https://www.instagram.com/janjacobi_immobilien"
                target="_blank"
                className="social-icon d-flex align-items-center justify-content-center rounded-circle bg-white text-dark"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
            </div>
          </div>
        </section>

        <hr className="my-3" />

        <section className="d-flex gap-3 flex-wrap justify-content-md-between justify-content-center align-items-center pb-3">
          <div className="copyright font-poppins fw-normal fs-6">
            © {new Date().getFullYear()} JJ Immobilienpartner{" "}
            <span className="mx-2 fw-bolder">•</span> All Rights Reserved
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
              Datenschutzerklärung
            </Link>
            {/* <Link
              className="copyright-link font-poppins fw-normal fs-6 text-decoration-none"
              href="/cookie-settings"
            >
              Cookie-Einstellungen
            </Link> */}
          </div>
        </section>
      </div>
    </footer>
  );
}
