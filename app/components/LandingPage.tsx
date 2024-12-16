"use client";
import Image from 'next/image';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <>
      <section className="banner bg-light-blue position-relative">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7 py-5">
              <h4 className="mb-md-5 mb-2 font-raleway fw-600 display-4 text-md-center">Herzlichen Willkommen</h4>
              <h4 className="font-raleway fw-600 display-4 w-md-75 mx-auto">Ihr Immobilien<span className="d-md-block">partner</span> aus Wuppertal</h4>
              <Image 
                className="fav h-auto d-xl-block d-none" 
                src="/images/fav.png" 
                alt="Favorite"
                width={200}
                height={100}
                priority
              />
            </div>
            <div className="col-md-5">
              <div className="row">
                <div className="col-6">
                  <Image 
                    src="/images/1.png" 
                    className="w-100 h-auto rounded-bottom mb-4"
                    alt="Image 1"
                    width={400}
                    height={300}
                  />
                  <Image 
                    src="/images/2.png" 
                    className="w-100 h-auto rounded-top"
                    alt="Image 2"
                    width={400}
                    height={300}
                  />
                </div>
                <div className="col-6">
                  <Image 
                    src="/images/3.png" 
                    className="w-100 h-auto rounded-bottom mb-4"
                    alt="Image 3"
                    width={400}
                    height={300}
                  />
                  <Image 
                    src="/images/1.png" 
                    className="w-100 h-auto shadow-1-strong rounded mb-4"
                    alt="Image 1 repeat"
                    width={400}
                    height={300}
                  />
                  <Image 
                    src="/images/3.png" 
                    className="w-100 h-auto rounded-top"
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

      <section className="py-5">
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
                  width={500}
                  height={300}
                />
                <Image 
                  className="img-double position-absolute start-0 ms-5 mt-5"
                  src="/images/img2.jpeg"
                  alt="Property image overlay"
                  width={500}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="achievement py-5">
        <h4 className="text-light-blue fw-bold font-raleway fs-6 text-center">Überblick</h4>
        <h4 className="font-poppins fs-1 fw-600 text-center">Meine Leistungen</h4>
        <div className="container mt-5">
          <div className="box">
            {[
              {
                title: "Anlagenberatung",
                desc: "Strategische Begleitung bei anstehenden oder getätigten Investitionen für langfristige Stabilität und gesundes Wachstum"
              },
              {
                title: "Immobilienmakler",
                desc: "Seriöse Vermittlung und Vermarktung von Immobilien, abgestimmt auf Ihre Bedürfnisse."
              },
              {
                title: "Portfolioaufbau & Optimierung",
                desc: "Individuelle Strategien zum Aufbau, zur Strukturierung und zur OptimierungIhres Immobilienportfolios für eine langfristige Wertsteigerung."
              },
              {
                title: "Vermietung von Wohnraum und Gewerbeflächen",
                desc: "Effiziente und nachhaltige Vermittlung mit Fokus auf Rentabilität und langfristige Wertschöpfung."
              },
              {
                title: "Sonderverwaltung & Auftragsvermittlung",
                desc: "Professionelle und zuverlässige Betreuung bei der Planung und Umsetzung von Sanierungen, Renovierungen und Modernisierungen sowie Hausmeister-Service, Entrümpelung und Grünpflege."
              },
              {
                title: "Ankauf von Immobilien & Grundstücken",
                desc: "Wir sind stets auf der Suche nach Immobilien für unseren eigenen Bestand. Eine diskrete Prüfung ist selbstverständlich."
              }
            ].map((card, index) => (
              <div key={index} className="cards p-3 border-0 bg-green position-relative">
                <h4 className="font-poppins fs-2 fw-500">{card.title}</h4>
                <p className="desc fs-6 font-lato fw-normal">{card.desc}</p>
                <Link href={`/services/${card.title.toLowerCase().replace(/\s+/g, '-')}`} className="btn bg-white rounded-pill mt-4 font-poppins fw-600">
                  Mehr Informationen
                </Link>
                <Image 
                  className="key h-auto" 
                  src="/images/key.png" 
                  alt="Key icon"
                  width={100}
                  height={50}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-banner py-5">
        <div className="my-md-5">
          <h4 className="text-white display-5 w-md-75 font-inter fw-600 mx-auto mb-4 pb-md-2">
            Wir freuen uns auf ihre Kontaktaufnahme und gute Geschäfte!
          </h4>
          <p className="text-white fs-4 w-md-75 font-lato fw-normal mx-auto mb-4 pb-md-2 px-md-5 text-md-center">
            Hier gelangen Sie zu unserem Kontaktformular, wo Sie uns unkompliziertund unverbindlich die Kerndaten zu Ihrem Objekt übermitteln können.
          </p>
          <Link href="/contact" className="d-md-block text-center">
            <button type="button" className="btn bg-white px-5 fs-6 fw-600 font-raleway">
              Contact Us
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}