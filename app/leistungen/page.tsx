"use client";
import Image from 'next/image';
import Link from 'next/link';

export default function Service() {
  return <>
    <section className="page-title py-5">
      <div className="container my-md-5 py-md-3">
        <h4 className="text-white display-4 font-raleway fw-bold mb-4 pb-md-2">Our Services</h4>
        <p className="text-white fs-md-5 fs-6 w-md-50 font-lato fw-normal">Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
    </section>

    {/* Service sections using array mapping for DRY code */}
    {[
      {
        title: "Anlagenberatung",
        imageRight: true
      },
      {
        title: "Immobilienmakler",
        imageRight: false
      },
      {
        title: "Vermietung von Wohnraum und Gewerbeflächen",
        imageRight: true
      },
      {
        title: "Sonderverwaltung & Auftragsvermittlung",
        imageRight: false
      },
      {
        title: "Ankauf von Immobilien & Grundstücke",
        imageRight: true
      }
    ].map((service, index) => (
      <section className="py-5" key={index}>
        <div className="container my-md-5">
          <div className="row justify-content-between">
            {!service.imageRight ? (
              <>
                <div className="col-md-5">
                  <Image 
                    className="img-corner-round mt-3 mt-md-0"
                    src="/images/img1.jpeg"
                    alt={service.title}
                    width={500}
                    height={300}
                  />
                </div>
                <div className="col-md-5 my-auto">
                  <h4 className="font-poppins fw-600 display-6 mb-md-4 mb-3">{service.title}</h4>
                  <p className="font-lato fw-normal fs-6 mb-md-4 mb-3 text-justify">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                  <button type="button" className="btn btn-outline-dark font-raleway fw-600 fs-6">
                    Explore Service
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="col-md-5 my-auto">
                  <h4 className="font-poppins fw-600 display-6 mb-md-4 mb-3">{service.title}</h4>
                  <p className="font-lato fw-normal fs-6 mb-md-4 mb-3 text-justify">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                  <button type="button" className="btn btn-outline-dark font-raleway fw-600 fs-6">
                    Explore Service
                  </button>
                </div>
                <div className="col-md-5">
                  <Image 
                    className="img-corner-round mt-3 mt-md-0"
                    src="/images/img1.jpeg"
                    alt={service.title}
                    width={500}
                    height={300}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    ))}

    <section className="contact-banner py-5">
      <div className="my-md-5 container">
        <h4 className="text-white display-5 text-md-center font-inter fw-600 mx-md-5 mb-4 pb-md-2">
          Möchten Sie uns eine Immobilie vorstellen?
        </h4>
        <p className="text-white fs-4 font-lato fw-normal mx-md-5 mb-4 pb-md-2 px-md-5 text-md-center">
          Hier gelangen Sie zu unserem Kontaktformular, wo Sie uns unkompliziertund unverbindlich die Kerndaten zu Ihrem Objekt übermitteln können.
        </p>
        <Link href="/contact-us" className='text-decoration-none text-dark'>
          <button type="button" className="btn bg-white px-5 py-3 d-md-block mx-auto fs-6 fw-600 font-raleway">
            Contact Us
          </button>
        </Link>
      </div>
    </section>
  </>;
}