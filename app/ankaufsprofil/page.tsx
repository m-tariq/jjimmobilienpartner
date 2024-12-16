"use client";
import Image from "next/image";
import Link from "next/link";

export default function Purchase() {
  return (
    <>
      <section className="page-title py-5">
        <div className="container my-md-5 py-md-3">
          <h4 className="text-white display-4 font-raleway fw-bold mb-4 pb-md-2">
            Purchase
          </h4>
          <p className="text-white fs-md-5 fs-6 w-md-50 font-lato fw-normal">
            Lorem Ipsum has been the industry&apos;s standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
      </section>

      <section className="pt-5">
        <div className="container mt-md-5">
          <div className="row">
            <div className="col-md-6 my-auto">
              <h4 className="font-poppins fw-600 display-6 mb-md-4 mb-3">
                Wir kaufen Ihre Immobilie!
              </h4>
              <p className="font-lato fw-500 fs-6 mb-md-4 mb-3 text-justify">
                Für unseren eigenen Immobilienbestand sind wir stetig auf der
                Suche nach Mehrfamilienhäusern, Wohn-/Geschäftshäuser, sowie
                Wohnanlagen in ganz NRW, vorzugsweise Wuppertal, Remscheid,
                Essen, Oberhausen etc.
              </p>
              <h6 className="font-raleway fw-600 fs-4 mb-3">
                Wo Investieren wir?
              </h6>
              <ul className="font-raleway fw-500 fs-6 text-justify">
                <li>
                  Wir investieren in Immobilien in ganz Deutschland mit
                  mindestens 30.000 Einwohnern. Vorzugsweise Städte in NRW, wie
                  z.B. Wuppertal, Remscheid, Essen, Oberhausen, Mettmann,
                  Hilden, etc.
                </li>
              </ul>
              <h6 className="font-raleway fw-600 fs-4 my-3">
                Standortkriterien:
              </h6>
              <ul className="font-raleway fw-500 fs-6 text-justify">
                <li>
                  Mittlere und gute Lagen. Schlechtere Lagen stellen kein
                  Ankaufshemmnis dar.
                </li>
              </ul>
              <h6 className="font-raleway fw-600 fs-4 my-3">Objekte:</h6>
              <ul className="font-raleway fw-500 fs-6 text-justify">
                <li>
                  Wohn- & Geschäftshäuser, Wohnanlagen, Mehrfamilienhäuser,
                  Sozialwohnungen. Sanierungsobjekte stellen keine
                  Ankaufshemmnis dar. Teileigentum steht nicht im Fokus.
                </li>
              </ul>
              <h6 className="font-raleway fw-600 fs-4 my-3">Gewerbe:</h6>
              <ul className="font-raleway fw-500 fs-6 text-justify">
                <li>Der Gewerbeanteil sollte nicht über 20% liegen.</li>
              </ul>
              <h6 className="font-raleway fw-600 fs-4 my-3">
                Investitionsvolumen:
              </h6>
              <ul className="font-raleway fw-500 fs-6 text-justify">
                <li>200.000,00 EUR bis 20.000.000,00 EUR.</li>
              </ul>
              <h6 className="font-raleway fw-600 fs-4 my-3">Abwicklung:</h6>
              <ul className="font-raleway fw-500 fs-6 text-justify">
                <li>
                  Wir versprechen eine schnelle, seriöse und diskrete
                  Abwicklung. Um entscheiden zu können, ob Ihre Immobilie
                  interessant für uns ist, benötigen wir vorab nur wenige
                  Eckdaten. Eine Kaufentscheidung wird innerhalb kurzer Zeit
                  getroffen.
                </li>
              </ul>
              <p className="font-lato fw-500 fs-6 mb-md-4 mb-3 text-justify">
                Haben Sie ein Angebot für uns, welches unter die oben genannten
                Kriterien fällt? Dann würden wir uns über ein Kennenlernen mit
                Ihnen freuen.Sie können uns jederzeit eine E-Mail schreiben,
                oder mich telefonisch kontaktieren.
              </p>
              <ul className="font-raleway fw-500 fs-6 text-justify">
                <li>
                  Eine diskrete Behandlung der Themen &quot;Verkauf&quot; und
                  &quot;Unterlageneinsicht&quot; sichern wir Ihnen selbstverständlich zu.
                </li>
                <li>
                  Eine Kaufentscheidung kann nach Prüfung der Objektunterlagen
                  und in Absprache mit der Geschäftsführung innerhalb von 24
                  Stunden erfolgen.
                </li>
              </ul>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-5">
              <Image
                className="img-corner-round mt-3 mt-md-0"
                src="/images/img1.jpeg"
                alt="img1"
                width={500}
                height={300}
              />
              <Image
                className="img-corner-round mt-5 pt-5 d-md-block d-none"
                src="/images/img1.jpeg"
                alt="img1"
                width={500}
                height={300}
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
                className="img-corner-round mt-3 mt-md-0 mb-3 mb-md-0"
                src="/images/img1.jpeg"
                alt="img1"
                width={500}
                height={300}
              />
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-6 my-auto">
              <p className="font-lato fw-500 fs-6 mb-md-4 mb-3 text-justify">
                Haben Sie ein Angebot für uns, welches unter die oben genannten
                Kriterien fällt? Dann würden wir uns über ein Kennenlernen mit
                Ihnen freuen.Sie können uns jederzeit eine E-Mail schreiben,
                oder mich telefonisch kontaktieren.
              </p>
              <ul className="font-raleway fw-500 fs-6 text-justify mb-3">
                <li>
                  Eine diskrete Behandlung der Themen &quot;Verkauf&quot; und
                  &quot;Unterlageneinsicht&quot; sichern wir Ihnen selbstverständlich zu.
                </li>
                <li>
                  Eine Kaufentscheidung kann nach Prüfung der Objektunterlagen
                  und in Absprache mit der Geschäftsführung innerhalb von 24
                  Stunden erfolgen.
                </li>
              </ul>
              <Link href="/contact-us">
                <button
                  type="button"
                  className="btn btn-outline-dark font-raleway fw-600 fs-6 px-5"
                >
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-banner py-5">
        <div className="my-md-5">
          <h4 className="text-white display-5 w-md-75 font-inter fw-600 mx-auto mb-4 pb-md-2">
            Möchten Sie uns eine Immobilie vorstellen?
          </h4>
          <p className="text-white fs-4 w-md-75 font-lato fw-normal mx-auto mb-4 pb-md-2 px-md-5 text-md-center">
            Hier gelangen Sie zu unserem Kontaktformular, wo Sie uns
            unkompliziertund unverbindlich die Kerndaten zu Ihrem Objekt
            übermitteln können.
          </p>
          <Link href="/contact" className="text-decoration-none text-dark">
            <button
              type="button"
              className="btn bg-white px-5 d-md-block mx-auto fs-6 fw-600 font-raleway"
            >
              Contact Us
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}