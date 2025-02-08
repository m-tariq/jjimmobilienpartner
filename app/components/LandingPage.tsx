"use client";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <>
      <section className="banner bg-light-blue position-relative">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7 py-5">
              <h4 className="mb-2 font-raleway fw-600 display-4 ms-md-5 mt-md-5 pt-md-5">
                Herzlich Willkommen
              </h4>
              <div className="subtitle font-raleway fw-600 display-5 ms-md-5 bl mt-1">
                <p>Ihr</p>
                <p>Immobilienpartner</p>
                <p>aus Wuppertal</p>
              </div>
              <div className="space"></div>
              <Image
                className="fav d-xl-block d-none"
                src="/images/fav.png"
                alt="Favorite"
                width={200}
                height={100}
                priority
              />
            </div>
            <div className="col-md-5">
              <div className="row">
                <div className="col-6 me-md-4">
                  <Image
                    src="/images/banner-img1.png"
                    className="w-100h-auto top-img1 mb-4 gallery-img"
                    alt="Image 1"
                    width={400}
                    height={300}
                  />
                  <Image
                    src="/images/banner-img5.png"
                    className="big-img bottom-img gallery-img"
                    alt="Image 2"
                    width={400}
                    height={300}
                  />
                </div>
                <div className="col-md-5 col-6">
                  <Image
                    src="/images/banner-img3.jpeg"
                    className="w-100h-auto top-img2 mb-4 gallery-img"
                    alt="Image 3"
                    width={400}
                    height={300}
                  />
                  <Image
                    src="/images/banner-img4.jpeg"
                    className="w-100h-auto gallery-img mb-4"
                    alt="Image 1 repeat"
                    width={400}
                    height={300}
                  />
                  <Image
                    src="/images/banner-img2.png"
                    className="w-100h-auto bottom-img gallery-img"
                    alt="Image 3 repeat"
                    width={400}
                    height={300}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-5">
        <div className="container my-md-5">
          <div className="row">
            <div className="col-md-6 my-auto">
              <h4 className="font-poppins fw-bold display-6 mb-md-4 mb-3">Ankaufsprofil</h4>
              <p className="font-lato fw-normal fs-6 mb-md-4 mb-3 text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              <Link href="/more-info" className="btn btn-outline-dark font-raleway fw-600 fs-6">
                mehr Info
              </Link>
            </div>
            <div className="col-md-1 mb-3 mb-md-0"></div>
            <div className="col-md-5">
              <div className='position-relative'>
                <Image 
                  className="img-double"
                  src="/images/img2.jpeg"
                  alt="Property image"
                  width={1}
                  height={1}
                />
                <Image 
                  className="img-double position-absolute start-0 ms-5 mt-5"
                  src="/images/img2.jpeg"
                  alt="Property image overlay"
                  width={1}
                  height={1}
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="achievement pt-5 mt-md-5">
        <h4 className="text-light-blue fw-bold font-raleway fs-6 text-center">
          Überblick
        </h4>
        <h4 className="font-poppins fs-1 fw-600 text-center">
          Meine Leistungen
        </h4>
        <div className="container-lg mt-5">
          <div className="box">
            {[
              {
                title: "Anlagenberatung",
                desc: "Strategische Begleitung bei anstehenden oder getätigten Investitionen für langfristige Stabilität und gesundes Wachstum",
                imagePath: "/images/service-icon1.png",
              },
              {
                title: "Immobilienmakler",
                desc: "Seriöse Vermittlung und Vermarktung von Immobilien, abgestimmt auf Ihre Bedürfnisse.",
                imagePath: "/images/service-icon2.png",
              },
              {
                title: "Portfolioaufbau & Optimierung",
                desc: "Individuelle Strategien zum Aufbau, zur Strukturierung und zur OptimierungIhres Immobilienportfolios für eine langfristige Wertsteigerung.",
                imagePath: "/images/service-icon3.png",
              },
              {
                title: "Vermietung von Wohnraum und Gewerbeflächen",
                desc: "Effiziente und nachhaltige Vermittlung mit Fokus auf Rentabilität und langfristige Wertschöpfung.",
                imagePath: "/images/service-icon4.png",
              },
              {
                title: "Sonderverwaltung & Auftragsvermittlung",
                desc: "Professionelle und zuverlässige Betreuung bei der Planung und Umsetzung von Sanierungen, Renovierungen und Modernisierungen sowie Hausmeister-Service, Entrümpelung und Grünpflege.",
                imagePath: "/images/service-icon5.png",
              },
              {
                title: "Ankauf von Immobilien & Grundstücken",
                desc: "Wir sind stets auf der Suche nach Immobilien für unseren eigenen Bestand. Eine diskrete Prüfung ist selbstverständlich.",
                imagePath: "/images/service-icon6.png",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="cards p-3 border-0 bg-sky-blue-gradient position-relative"
              >
                <h4 className="font-poppins fs-2 fw-500">{card.title}</h4>
                <p className="desc fs-6 font-lato fw-normal">{card.desc}</p>
                {/* <Link href={`/services/${card.title.toLowerCase().replace(/\s+/g, '-')}`} className="btn bg-white rounded-pill mt-4 font-poppins fw-600">
                  Mehr Informationen
                </Link> */}
                <Image
                  className="key h-auto"
                  src={card.imagePath}
                  alt={card.title}
                  width={100}
                  height={50}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-5">
          <Link
            href="/leistungen"
            className="btn bg-black text-white px-3 rounded-pill mt-4 font-poppins fw-600"
          >
            Mehr Informationen
          </Link>
        </div>
      </section>

      <section className="my-5 pb-md-5">
        <div className="container-lg">
          <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 p-5 bg-sky-blue rounded-4">
            <div className="ms-lg-5">
              <h4 className="font-poppins fw-500 fs-3">
                Wir kaufen Ihre Immobilie
              </h4>
              <p className="font-poppins fw-normal fs-6 mb-0">
                Unser Schwerpunkt: Wohnimmobilien in Wuppertal
              </p>
            </div>
            <Link
              href="/ankaufsprofil"
              className="btn bg-yellow rounded-3 py-3 px-4 font-poppins fw-500 me-lg-5"
            >
              Ankaufsprofil
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right ms-2"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="contact-banner py-5 pt-md-5">
        <div className="my-md-5 container-lg">
          <h4 className="text-white display-5 text-md-center font-inter fw-600 mx-md-5 mb-4 pb-md-2">
            Wir freuen uns auf ihre Kontaktaufnahme und gute Geschäfte!
          </h4>
          <div className="d-flex gap-5 justify-content-center flex-wrap">
            <Link
              href="/contact-us"
              className="d-flex justify-content-center align-items-center btn bg-white contact-btn fs-6 fw-600 font-raleway rounded-2"
            >
              Kontakt
            </Link>
            <Link
              href=""
              className="d-flex justify-content-center align-items-center btn bg-white contact-btn fs-6 fw-600 font-raleway rounded-2"
            >
              Direkt Mail
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
