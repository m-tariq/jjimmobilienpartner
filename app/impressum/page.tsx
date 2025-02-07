import Image from "next/image";

export default function Purchase() {
  return (
    <>
      <div className="container my-5 py-md-3">
        <h4 className="display-4 font-raleway fw-bold pb-md-2">Impressum</h4>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-8 mb-5">
            <h2>Anbieter:</h2>
            <p>Jan Jacobi Immobilienpartner</p>
            <p>Herderstr. 4</p>
            <p>42327 Wuppertal</p>
            <div>
              <p>Deutschland</p>
            </div>
            <p>Telefonnummer: +49 173 2725720</p>
            <p>E-Mail-Adresse: info@jj-immobilienpartner.de</p>
            <div>
              <h2>Aufsichtsbehörde: </h2>
              <p>Stadt Wuppertal Ordnungsamt</p>
              <p>Johannes-Rau-Platz 1</p>
              <p>42275 Wuppertal</p>
              <p>Deutschland</p>
              <br />
            </div>
            <p>
              Im Falle von Abweichungen zwischen der deutschen und der
              englischen Fassung hat die deutsche Fassung Vorrang.
            </p>
          </div>

          <div className="col-md-4"></div>
        </div>
        <div className="d-flex justify-content-end">
          <div
            style={{ position: "relative", width: "300px", height: "200px" }}
          >
            <Image
              src="/images/impressum.png"
              alt="Impressum"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
}
