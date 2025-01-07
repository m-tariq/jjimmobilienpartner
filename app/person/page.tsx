"use client";
import Image from 'next/image';
// Removed unused Link import

export default function About() {
  return (
    <>
    <section className="page-title py-5">
      <div className="container my-md-5 py-md-3">
        <h4 className="text-white display-4 font-raleway fw-bold mb-4 pb-md-2">Über mich</h4>
        <p className="text-white fs-md-5 fs-6 w-md-50 font-lato fw-normal">Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
    </section>

    <section className="py-5">
         <div className="container my-md-5">
          <div className="row">
            <div className="col-md-5">
              <Image 
                className="img-corner-round mt-3 mt-md-0"
                src="/images/img1.jpeg"
                alt="img1"
                width={500}
                height={300}
              />
              <div className='polkadot d-block ms-auto mt-2'></div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-6 my-auto">
            <h4 className="text-light-blue fw-bold font-raleway fs-5">Über mich</h4>
              <h4 className="font-poppins fw-600 display-6 mb-md-5 mb-3">JJ Immobilienpartner</h4>
              <p className="font-poppins fw-normal fs-6 mb-md-4 mb-3">Mein Name ist Jan Jacobi, Gründer von Jan Jacobi Immobilienpartner.</p>
              <p className="font-poppins fw-normal fs-6 mb-md-4 mb-3">Als gebürtiger Wuppertaler mit über 10 Jahren Erfahrung im Immobiliengeschäft, habe ich mich auf den Aufbau und die Optimierung von Immobilienportfolios sowie auf die professionelle Betreuung von Immobilienverkäufen und -käufen spezialisiert. </p>
              <p className="font-poppins fw-normal fs-6 mb-md-4 mb-3">Durch meine langjährige Tätigkeit als Hausverwalter und Portfolio-Manager für vermögensverwaltende Gesellschaften sowie die aktive Beteiligung am Ankauf und der Verwaltung von Immobilien innerhalb des Familienbestands und dem Portfolioaufbau unserer Kunden, habe ich fundierte Kenntnisse und ein breites Netzwerk aufgebaut und konnte umfassende Expertise in verschiedenen Bereichen der Immobilienwirtschaft gewinnen.</p>
              <p className="font-poppins fw-normal fs-6 mb-md-4 mb-3">Meine Philosophie basiert auf einer vertrauensvollen Partnerschaft, bei der ich auf Ihre individuellen Projekte und Anliegen eingehe. Es ist mir besonders wichtig, Sie bei der Umsetzung Ihrer Wünsche und Ziele mit maßgeschneiderten Lösungen und flexibler Unterstützung zu begleiten.</p>
              <p className="font-poppins fw-normal fs-6 mb-md-4 mb-3">Unser Ziel ist es, Ihnen maßgeschneiderte Lösungen für die erfolgreiche Umsetzung Ihrer Immobilienprojekte zu bieten, Ihre Immobilienbestände durch gezielte Optimierung langfristig zu stärken und den Wert Ihrer Objekte zu steigern.</p>
              <p className="font-poppins fw-normal fs-6 mb-md-4 mb-3">Ich habe eine starke Passion für die Immobilienbranche und fokussiere mich auf dieEntwicklung und Optimierung von Immobilienprojekten und setze mich mit Begeisterung dafür ein, den größtmöglichen Wert für meine Kunden zu schaffen.</p>
              <p className="font-poppins fw-normal fs-6 mb-md-4 mb-3">Ich freue mich auf den Austausch und darauf, Sie bei Ihren Immobilienprojekten zu unterstützen.</p>
              <p className="font-poppins fw-normal fs-6 mb-md-4 mb-3">Meine Leistungsübersicht und das Ankaufsprofil finden Sie hier:    XXX      XXXX</p>
              <p className="font-poppins fw-normal fs-6 mb-md-4 mb-3">Kontaktieren können Sie mich gerne per Mail oder direkt hier:   XXX </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-5">
      <div className="container my-md-5">
        <h4 className="font-raleway fw-500 display-6 text-center">Partner</h4>
        <div className='d-flex justify-content-evenly flex-wrap flex-wrap gap-3 mt-md-5 mt-3'>
        <Image 
          className="object-fit-cover mt-3 mt-md-0"
          src="/images/logo.png"
          alt="img1"
          width={100}
          height={100}
        />
        <Image 
          className="object-fit-cover mt-3 mt-md-0"
          src="/images/logo.png"
          alt="img1"
          width={100}
          height={100}
        />
        <Image 
          className="object-fit-cover mt-3 mt-md-0"
          src="/images/logo.png"
          alt="img1"
          width={100}
          height={100}
        />
        <Image 
          className="object-fit-cover mt-3 mt-md-0"
          src="/images/logo.png"
          alt="img1"
          width={100}
          height={100}
        />
        <Image 
          className="object-fit-cover mt-3 mt-md-0"
          src="/images/logo.png"
          alt="img1"
          width={100}
          height={100}
        />
        </div>
      </div>
      </section> */}
    </>
  );
}