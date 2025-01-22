"use client";
import Image from "next/image";
import Link from "next/link";

export default function Service() {
  return (
    <>
      <section className="page-title py-5">
        <div className="container my-md-5 py-md-3">
          <h4 className="text-white display-4 font-raleway fw-bold mb-4 pb-md-2">
            Meine Leistungen
          </h4>
          <p className="text-white fs-md-5 fs-6 w-md-50 font-lato fw-normal text-justify">
            JJ Immobilienpartner setzt sich für eine vertrauensvolle
            Zusammenarbeit, maßgeschneiderte Lösungen und eine effiziente
            Unterstützung bei allen Anliegen rund um Ihre Immobilie oder
            Portfolio ein. Als Einzelunternehmer lege ich besonderen Wert auf
            persönliche Betreuung und ein starkes Netzwerk.
          </p>
        </div>
      </section>

      <section className="py-5">
        <div className="container my-md-5">
          <div className="row">
            <div className="col-md-5 my-auto">
              <h4 className="font-poppins fw-600 display-6 mb-md-5 mb-3">
                Anlagenberatung
              </h4>
              <p className="font-lato fw-normal fs-6 mb-md-4 mb-3 text-justify">
                Ich begleite Sie beratend bei anstehenden oder bereits
                getätigten Investitionen und unterstütze Sie dabei, langfristige
                Stabilität und gesundes Wachstum zu sichern.
              </p>
              <p className="font-lato fw-normal fs-6 mb-md-4 mb-3 text-justify">
                Zudem helfe ich Ihnen dabei, ein maßgeschneidertes Ankaufsprofil
                zu entwickeln, um gezielt nach passenden
                Investitionsmöglichkeiten zu suchen, die zu Ihren Zielen passen.
              </p>
              <p className="font-lato fw-normal fs-6 mb-md-4 mb-3 text-justify">
                Mit meiner Expertise unterstütze ich Sie gerne dabei, Ihre
                Immobilienstrategie bestmöglich zu optimieren und effektiv auf
                Ihre individuellen Zielsetzungen auszurichten.
              </p>
              <p className="font-lato fw-normal fs-6 mb-md-4 mb-3 text-justify">
                Des Weiteren kann die Optimierung Ihrer Verwaltungsstruktur in
                den Prozess integriert werden, um Effizienz und Rentabilität zu
                steigern und den langfristigen Erfolg Ihrer Investitionen zu
                sichern.
              </p>
              {/* <button type="button" className="btn btn-outline-dark font-raleway fw-600 fs-6">Explore Service</button> */}
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-5">
              <Image
                src="/images/service-img1.png"
                className="img-corner-round mt-3 mt-md-0"
                width={130}
                height={100}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container my-md-5">
          <div className="row">
            <div className="col-md-5">
              <Image
                src="/images/service-img2.png"
                className="img-corner-round mb-4 mb-md-0"
                width={130}
                height={100}
                alt=""
              />
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-5 my-auto">
              <h4 className="font-poppins fw-600 display-6 mb-md-4 mb-3">
                Portfolioaufbau & Optimierung
              </h4>
              <p className="font-lato fw-normal fs-6 mb-md-4 mb-3 text-justify">
                Ich unterstützen Sie bei der aktiven Akquisition von Immobilien
                und der strategischen Erweiterung Ihres Portfolios.
              </p>
              <p className="font-lato fw-normal fs-6 mb-md-4 mb-3 text-justify">
                Gemeinsam entwickeln wir individuelle Strategien, um Ihr
                Immobilienportfolio zu strukturieren, gezielt zu optimieren und
                die Rendite zu steigern.
              </p>
              <p className="font-lato fw-normal fs-6 mb-md-4 mb-3 text-justify">
                Dabei lege ich großen Wert auf die Identifizierung von
                Potenzialen zur Wertsteigerung und bringe Ideen und Lösungen
                ein, um Ihr Portfolio langfristig zu verbessern und an Ihre
                Ziele anzupassen.
              </p>
              {/* <button type="button" className="btn btn-outline-dark font-raleway fw-600 fs-6">Explore Service</button> */}
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container my-md-5">
          <div className="row">
            <div className="col-md-5 my-auto">
              <h4 className="font-poppins fw-600 display-6 mb-md-4 mb-3">
                Immobilienmakler
              </h4>
              <p className="font-lato fw-normal fs-6 mb-md-4 mb-3 text-justify">
                Seriöse und maßgeschneiderte Vermittlung sowie Vermarktung Ihrer
                Immobilien, abgestimmt auf Ihre individuellen Bedürfnisse und
                Ziele.
              </p>
              <p className="font-lato fw-normal fs-6 mb-md-4 mb-3 text-justify">
                Dabei berücksichtigen wir auch Off-Market-Transaktionen, die oft
                zu besseren Konditionen und mit hoher Diskretion abgewickelt
                werden können.
              </p>
              <p className="font-lato fw-normal fs-6 mb-md-4 mb-3 text-justify">
                Vor dem Verkauf können wir zudem eventuelle wertsteigernde
                Optimierungen prüfen, um den besten Marktwert für Ihre Immobilie
                zu erzielen und den Verkaufsprozess zu optimieren.
              </p>
              <p className="font-lato fw-normal fs-6 mb-md-4 mb-3 text-justify">
                Weiter unterstützen wir Sie bei der Zusammenstellung der
                Objektunterlagen und der Erstellung von Verkaufsunterlagen, wie
                zum Beispiel einem Exposéund einer Mieterliste mit
                Kalkulationen, um den Verkaufsprozess professionell und
                erfolgreich zu gestalten. Wir stehen Ihnen bei allen Schritten
                zur Seite und sorgen für eine reibungslose Abwicklung.
              </p>
              <p className="font-lato fw-normal fs-6 mb-md-4 mb-3 text-justify">
                Wir begleiten Sie bei der Vermittlung und Abwicklung von
                Transaktionen, sowohl bei Eigentumswohnungen,
                Mehrfamilienhäusern, Wohn- und Geschäftshäusern,
                Gewerbeimmobilien, Grundstücken als auch bei umfassenden
                Immobilienportfolios.
              </p>
              {/* <button type="button" className="btn btn-outline-dark font-raleway fw-600 fs-6">Explore Service</button> */}
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-5">
              <Image
                src="/images/service-img3.png"
                className="img-corner-round mt-3 mt-md-0"
                width={130}
                height={100}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container my-md-5">
          <div className="row">
            <div className="col-md-5">
              <Image
                src="/images/service-img4.png"
                className="img-corner-round mb-4 mb-md-0"
                width={130}
                height={100}
                alt=""
              />
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-5 my-auto">
              <h4 className="font-poppins fw-600 display-6 mb-md-4 mb-3">
                Ankauf von Immobilien & Grundstücken
              </h4>
              <p className="font-lato fw-normal fs-6 mb-md-4 mb-3 text-justify">
                Wir sind stets auf der Suche nach Immobilien für unseren eigenen
                Bestand und prüfen jedes Objekt mit größter Sorgfalt und
                Diskretion.
              </p>
              <p className="font-lato fw-normal fs-6 mb-md-4 mb-3 text-justify">
                Unser Schwerpunkt liegt auf Mehrfamilienhäusern, Wohn- und
                Geschäftshäusern sowie Gewerbeimmobilien.
              </p>
              <p className="font-lato fw-normal fs-6 mb-md-4 mb-3 text-justify">
                Auch Immobilien in B oder C Lagen sowie Objekte mit
                Sanierungsbedarf sind für uns von Interesse, da wir großes
                Potenzial in solchen Objekten erkennen.
              </p>
              <p className="font-lato fw-normal fs-6 mb-md-4 mb-3 text-justify">
                Insbesondere interessieren wir uns für Wohnimmobilien in
                Wuppertal und Umgebung. Auf Wunsch können wir eine
                Kaufpreisprüfung kurzfristig durchführen und Ihnen eine
                fundierte Einschätzung liefern. Wir freuen uns, Ihre Immobilie
                vertraulich zu prüfen.
              </p>
              {/* <button type="button" className="btn btn-outline-dark font-raleway fw-600 fs-6">Explore Service</button> */}
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container my-md-5">
          <div className="row">
            <div className="col-md-5 my-auto">
              <h4 className="font-poppins fw-600 display-6 mb-md-4 mb-3">
                Vermietung von Wohnraum und Gewerbeflächen
              </h4>
              <p className="font-lato fw-normal fs-6 mb-md-4 mb-3 text-justify">
                Effiziente und nachhaltige Vermittlung von Wohn- und
                Gewerbeflächen, die auf Rentabilität und langfristige
                Wertschöpfung ausgelegt ist.
              </p>
              <p className="font-lato fw-normal fs-6 mb-md-4 mb-3 text-justify">
                Mein Ziel ist es, sowohl für Sie als Eigentümer als auch für
                Ihre Mieter stabile und profitable Mietverhältnisse zu schaffen.
              </p>
              <p className="font-lato fw-normal fs-6 mb-md-4 mb-3 text-justify">
                Durch die Pflege einer umfangreichen Mieterwartekartei sind wir
                in der Lage, schnell auf Mieteranfragen zu reagieren und auch
                kurzfristig bei der Vermietung mehrerer Wohneinheiten zu
                unterstützen. Die Prüfung der Mietinteressenten erfolgt mit
                höchster Sorgfalt, um sicherzustellen, dass die Vermietung
                sowohl für Eigentümer als auch für Mieter langfristig
                erfolgreich ist.
              </p>
              <p className="font-lato fw-normal fs-6 mb-md-4 mb-3 text-justify">
                Wir bieten zudem individuelle Lösungen für die Vermietung von
                Gewerbeflächen und berücksichtigen dabei die spezifischen
                Anforderungen jedes Eigentümers und Objekts.
              </p>
              {/* <button type="button" className="btn btn-outline-dark font-raleway fw-600 fs-6">Explore Service</button> */}
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-5">
              <Image
                src="/images/service-img5.png"
                className="img-corner-round mt-3 mt-md-0"
                width={130}
                height={100}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container my-md-5">
          <div className="row">
            <div className="col-md-5">
              <Image
                src="/images/service-img6.png"
                className="img-corner-round mb-4 mb-md-0"
                width={130}
                height={100}
                alt=""
              />
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-5 my-auto">
              <h4 className="font-poppins fw-600 display-6 mb-md-4 mb-3">
                Sonderverwaltung & Auftragsvermittlungen
              </h4>
              <p className="font-lato fw-normal fs-6 mb-md-4 mb-3 text-justify">
                Wir bieten Ihnen umfassende Unterstützung bei der Planung und
                Durchführung von Sanierungen, Renovierungen und
                Modernisierungen.
              </p>
              <p className="font-lato fw-normal fs-6 mb-md-4 mb-3 text-justify">
                Dabei vermitteln wir gezielt langjährige, vertrauensvolle
                Partner für alle benötigten Fachleistungen. Zusätzlich betreuen
                wir Aufgaben wie Hausmeister-Service, Entrümpelungen und die
                Pflege von Grünflächen.
              </p>
              <p className="font-lato fw-normal fs-6 mb-md-4 mb-3 text-justify">
                Der Fokus und die Grundlage der Optimierungen können ganz nach
                den individuellen Wünschen des Auftraggebers ausgerichtet
                werden.
              </p>
              <p className="font-lato fw-normal fs-6 mb-md-4 mb-3 text-justify">
                Sie erhalten durch uns die passende Unterstützung, um Ihre
                Vorstellungen und Anforderungen effizient umzusetzen.
              </p>
              <p className="font-lato fw-normal fs-6 mb-md-4 mb-3 text-justify">
                Für alle weiteren Themen rund um die Hausverwaltung stehen wir
                Ihnen ebenfalls beratend zur Seite
              </p>
              {/* <button type="button" className="btn btn-outline-dark font-raleway fw-600 fs-6">Explore Service</button> */}
            </div>
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
            unkompliziertund unverbindlich die Kerndaten zu Ihrem Objekt
            übermitteln können.
          </p>
          <Link href="/contact-us" className="text-decoration-none text-dark">
            <button
              type="button"
              className="btn bg-white contact-btn d-md-block mx-auto fs-6 fw-600 font-raleway rounded-2"
            >
              Contact Us
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
