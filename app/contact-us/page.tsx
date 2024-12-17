"use client";
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Add your form submission logic here
      console.log('Form data:', formData);
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <>
      <section className="page-title py-5">
        <div className="container my-md-5 py-md-3">
          <h4 className="text-white display-4 font-raleway fw-bold mb-4 pb-md-2">
            Contact Us
          </h4>
          <p className="text-white fs-md-5 fs-6 w-md-50 font-lato fw-normal">
            Lorem Ipsum has been the industry&apos;s standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
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
              <p className="font-raleway fw-normal fs-6">
                Our opening and Accessibility times:
              </p>
              <div className="border-b-2 border-[#b3cbd8] my-3"></div>
              <div className="d-flex align-items-center gap-3 mt-4">
                <div className="icon min-w-[35px] md:min-w-[70px] md:w-[70px] w-[35px] md:h-[70px] h-[35px] md:text-2xl text-sm bg-[#D9D9D9] rounded-circle d-flex align-items-center justify-content-center">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div>
                  <h6 className="font-poppins fw-600 fs-6">Email</h6>
                  <h6 className="font-poppins fw-500 fs-6 mb-0">
                    Info@janjacobi.com
                  </h6>
                </div>
              </div>
              <div className="d-flex align-items-center gap-3 mt-4">
                <div className="icon min-w-[35px] md:min-w-[70px] md:w-[70px] w-[35px] md:h-[70px] h-[35px] md:text-2xl text-sm bg-[#D9D9D9] rounded-circle d-flex align-items-center justify-content-center">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div>
                  <h6 className="font-poppins fw-600 fs-6">Phone Number</h6>
                  <h6 className="font-poppins fw-500 fs-6 mb-0">
                    +00 9191829229, +00 9191829229
                  </h6>
                </div>
              </div>
              <div className="d-flex align-items-center gap-3 mt-4">
                <div className="icon min-w-[35px] md:min-w-[70px] md:w-[70px] w-[35px] md:h-[70px] h-[35px] md:text-2xl text-sm bg-[#D9D9D9] rounded-circle d-flex align-items-center justify-content-center">
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <div>
                  <h6 className="font-poppins fw-600 fs-6">Address</h6>
                  <h6 className="font-poppins fw-500 fs-6 mb-0">
                    JAN JACOBI , Herderstr, 4th 42327 ,Wuppertal
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-5 bg-white rounded-3 py-5 my-5">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="form-label font-poppins fw-600 fs-6">
                    Vor- und Nachname
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control py-2"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label font-poppins fw-600 fs-6">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control py-2"
                    placeholder="creativelayers088@gmail.com"
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label font-poppins fw-600 fs-6">
                    Telefonnummer
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-control py-2"
                    placeholder="Your Number"
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label font-poppins fw-600 fs-6">
                    Nachricht (Pflichtfeld)
                  </label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control"
                  ></textarea>
                </div>
                <h6 className="font-poppins fw-normal fs-6 my-4">
                  Es gilt unsere{" "}
                  <a href="" className="fw-600 text-black">
                    Datenschutzerklarung
                  </a>
                </h6>
                <button
                  type="submit"
                  className="btn bg-light-blue text-white d-block rounded-3 py-2 w-100"
                >
                  Absenden
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}