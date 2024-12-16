"use client";
import Image from 'next/image';
// Removed unused Link import

export default function About() {
  return (
    <>
    <section className="page-title py-5">
      <div className="container my-md-5 py-md-3">
        <h4 className="text-white display-4 font-raleway fw-bold mb-4 pb-md-2">About Us</h4>
        <p className="text-white fs-md-5 fs-6 w-md-50 font-lato fw-normal">Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
    </section>

    <section className="pt-5">
         <div className="container mt-md-5">
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
            <h4 className="text-light-blue fw-bold font-raleway fs-5">About Us</h4>
              <h4 className="font-poppins fw-600 display-6 mb-md-4 mb-3">The JAN JACOBI GROUP</h4>
              <p className="font-poppins fw-normal fs-5 mb-md-4 mb-3 text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
              <h6 className="font-poppins fw-500 fs-4 mb-3">Our Mission</h6>
              <p className="font-poppins fw-normal fs-5 mb-md-4 mb-3 text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
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
      </section>
    </>
  );
}