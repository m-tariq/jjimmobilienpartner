"use client";
import Link from "next/link";

export default function Purchase() {
  return (
    <>
      <section className="purchase-page-title py-5">
        <div className="container my-md-5 py-md-3">
          <h4 className="text-white display-4 font-raleway fw-bold mb-4 pb-md-2">
            Ankaufsprofil
          </h4>
          <p className="text-white fs-md-5 fs-6 w-md-50 font-lato fw-normal">
            Wir sind auf der Suche nach Immobilien, die durch ihre Lage,
            Struktur und Potenziale überzeugen. Unser Ziel ist es, hochwertige
            Wohn- und Geschäftsimmbolien zu erwerben, die sowohl funktional als
            auch zukunftsorientiert sind.
          </p>
        </div>
      </section>

      <section className="pt-5">
        <div className="container mt-md-5">
          <div className="row">
            <div className="col-md-12 my-auto">
              <h4 className="font-poppins fw-600 display-5 mb-2">
                Ankaufsprofil
              </h4>
              <h4 className="font-poppins fw-600 display-5 mb-2">
                für Wohn- & Geschäftsimmobilien
              </h4>
              <p className="font-inter fw-400 fs-5 mb-md-4 mb-3 text-justify">
                Unser Fokus liegt auf Mehrfamilienhäusern, Wohn- und
                Geschäftshäusern sowie Wohnanlagen. Besonders interessieren wir
                uns für Wohnimmobilien in Wuppertal und der näheren Umgebung.
              </p>
              <p className="font-inter fw-400 fs-5 mb-md-4 mb-3 text-justify">
                Auch Immobilien in B- oder C-Lagen sowie Objekte mit
                Sanierungsbedarf stellen für uns kein Hindernis dar. Im
                Gegenteil, wir erkennen das Potenzial solcher Immobilien und
                sind stets an deren Entwicklung interessiert.
              </p>
              <h5 className="font-inter fw-bold fs-5 mb-md-4 mb-3">
                Was und Wo wird gesucht?
              </h5>
              <p className="font-inter fw-400 fs-5 mb-md-4 mb-3 text-justify">
                Unser Hauptaugenmerk liegt auf Wohnimmobilien in Wuppertal und
                Umgebung. Auch folgende Städte sind von Interesse: Remscheid,
                Solingen, Mettmann, Hilden, Essen, Oberhausen, Gelsenkirchen und
                weitere Städte im Ruhrgebiet und Bergischen Land.
              </p>
              <p className="font-inter fw-400 fs-5 mb-md-4 mb-3 text-justify">
                <span className="font-inter fw-bold fs-5">
                  Standortkriterien:{" "}
                </span>
                Keine Einschränkungen. Wir prüfen gute, mittlere, als auch
                moderate Lagen.
              </p>
              <p className="font-inter fw-400 fs-5 mb-md-4 mb-3 text-justify">
                <span className="font-inter fw-bold fs-5">Zustand: </span>
                Keine Einschränkungen. Bestandsobjekte mit
                Entwicklungspotential, wie beispielsweise durch Leerstand oder
                Sanierungsbedarf, stellen kein Ankaufshindernis dar.
              </p>
              <p className="font-inter fw-400 fs-5 mb-md-4 mb-3 text-justify">
                <span className="font-inter fw-bold fs-5">Objektart: </span>
                Mehrfamilienhäuser, Wohn- & Geschäftshäuser, Wohnanlagen,
                Sozialwohnungen, Grundstücke. Asset- und Sharedeals sind
                möglich.
              </p>
              <p className="font-inter fw-400 fs-5 mb-md-4 mb-3 text-justify">
                <span className="font-inter fw-bold fs-5">Gewerbe: </span>
                Gewerbeimmobilien sind nicht unser primärer Fokus, werden aber
                ebenfalls geprüft.
              </p>
              <p className="font-inter fw-400 fs-5 mb-3 text-justify">
                <span className="font-inter fw-bold fs-5">Angebotspreis: </span>
                Für ein erstes indikatives Kaufpreisangebot benötigen wir vorab
                nur die wichtigsten Kerndaten der Immobilie.
              </p>
              <p className="font-inter fw-400 fs-5 mb-3 text-justify">
                <span className="font-inter fw-bold fs-5">Abwicklung: </span>
                Wir versprechen eine schnelle, seriöse, transparente und
                diskrete Abwicklung. Eine Kaufentscheidung wird innerhalb kurzer
                Zeit getroffen.
              </p>
              <p className="font-inter fw-400 fs-5 mb-md-4 mb-3 text-justify">
                Gerne unterstützen wir Sie bei der Zusammenstellung der
                Objektunterlagen und freuen uns, Ihre Immobilie vertraulich zu
                prüfen zu dürfen.
              </p>
              <p className="font-inter fw-400 fs-5 mb-md-4 mb-3 text-justify">
                Kontaktieren können Sie mich gerne per Mail oder direkt hier:
              </p>
            </div>
            {/* <div className="col-md-1"></div>
            <div className="col-md-5">
              <Image
                className="img-corner-round mt-3 mt-md-0"
                src="/images/img3.png"
                alt="img1"
                width={500}
                height={300}
              />
            </div> */}
          </div>
        </div>
      </section>

      <section className="contact-banner py-5">
        <div className="my-md-5 container">
          <h4 className="text-white display-5 text-md-center font-inter fw-600 mx-md-5 mb-4 pb-md-2">
            Möchten Sie uns eine Immobilie vorstellen?
          </h4>
          <p className="text-white fs-4 font-lato fw-normal mx-md-5 mb-4 pb-md-2 px-md-5 text-md-center">
            Hier gelangen Sie zu unserem Kontaktformular, wo Sie uns
            unkompliziert und unverbindlich die Kerndaten zu Ihrem Objekt
            übermitteln können.
          </p>
          <Link href="/contact-us" className="text-decoration-none text-dark">
            <button
              type="button"
              className="btn bg-white contact-btn d-md-block mx-auto fs-6 fw-600 font-raleway rounded-2"
            >
              Kontakt
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
