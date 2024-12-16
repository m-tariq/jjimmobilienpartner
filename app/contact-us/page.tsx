"use client";
import Image from 'next/image';
import Link from 'next/link';

export default function Contact() {
  return (
    <>
    <section className="page-title py-5">
      <div className="container my-md-5 py-md-3">
        <h4 className="text-white display-4 font-raleway fw-bold mb-4 pb-md-2">Contact Us</h4>
        <p className="text-white fs-md-5 fs-6 w-md-50 font-lato fw-normal">Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
    </section>

    <section className="pt-5 bg-grey mb-5">
             <div className="container mt-md-5">
              <div className="row">
                <div className="col-md-6 my-auto">
                  <Image 
                   className="object-fit-cover"
                    src="/images/logo.png"
                    alt="img1"
                    width={100}
                    height={100}
                  />
                  <h4 className="font-poppins fw-600 fs-3 mt-3 mb-0">JAN JACOBI</h4>
                  <p className="font-raleway fw-normal fs-6">Our opening and Accessibility times:</p>
                  <div className='divider my-3'></div>
                  <div className='d-flex align-items-center gap-3 mt-4'>
                    <div className='icon'>
                      <i className='fa fa-envelope-o'></i>
                    </div>
                    <div>
                      <h6 className='font-poppins fw-600 fs-6'>Email</h6>
                      <h6 className='font-poppins fw-500 fs-6 mb-0'>Info@janjacobi.com</h6>
                    </div>
                  </div>
                  <div className='d-flex align-items-center gap-3 mt-4'>
                    <div className='icon'>
                    <i className="fa fa-phone"></i>
                    </div>
                    <div>
                      <h6 className='font-poppins fw-600 fs-6'>Phone Number</h6>
                      <h6 className='font-poppins fw-500 fs-6 mb-0'>+00 9191829229, +00 9191829229</h6>
                    </div>
                  </div>
                  <div className='d-flex align-items-center gap-3 mt-4'>
                    <div className='icon'>
                      <i className='fa fa-map-marker'></i>
                    </div>
                    <div>
                      <h6 className='font-poppins fw-600 fs-6'>Address</h6>
                      <h6 className='font-poppins fw-500 fs-6 mb-0'>JAN JACOBI , Herderstr,  4th 42327 ,Wuppertal</h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-5 bg-white rounded-3 py-5 my-5">
                <form>
  <div className="mb-4">
    <label  className="form-label font-poppins fw-600 fs-6">Vor- und Nachname</label>
    <input type="text" className="form-control py-2" placeholder='Your Name'/>
  </div>
  <div className="mb-4">
    <label  className="form-label font-poppins fw-600 fs-6">E-Mail</label>
    <input type="email" className="form-control py-2" placeholder='creativelayers088@gmail.com'/>
  </div>
  <div className="mb-4">
    <label  className="form-label font-poppins fw-600 fs-6">Telefonnummer</label>
    <input type="tel" className="form-control py-2" placeholder='Your Number'/>
  </div>
  <div className="mb-4">
    <label  className="form-label font-poppins fw-600 fs-6">Nachricht (Pflichtfeld)</label>
    <textarea className="form-control"></textarea>
  </div>
  <h6 className='font-poppins fw-normal fs-6 my-4'>Es gilt unsere  <a href='' className='fw-600 text-black'>Datenschutzerklarung</a></h6>
  <a href='' type='submit' className="btn bg-light-blue text-white d-block rounded-3 py-2">Absenden</a>
</form>
                </div>
              </div>
            </div>
          </section>
    </>
  );
}
