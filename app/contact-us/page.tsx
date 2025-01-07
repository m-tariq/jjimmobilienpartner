"use client";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormStatus {
  type: "success" | "error" | null;
  message: string;
}

const Alert = ({
  type,
  message,
}: {
  type: "success" | "error";
  message: string;
}) => {
  const bgColor = type === "success" ? "alert-success" : "alert-danger";
  return (
    <div className={`alert ${bgColor} mb-4`} role="alert">
      {message}
    </div>
  );
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [formStatus, setFormStatus] = useState<FormStatus>({
    type: null,
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setFormStatus({ type: null, message: "" });

    // Split the name field into first name and last name
    const nameParts = formData.name.trim().split(" ");
    const payload = {
      fname: nameParts[0] || "",
      lname: nameParts.slice(1).join(" ") || "",
      email: formData.email,
      phone: formData.phone,
      content: formData.message,
    };

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setFormStatus({
        type: "success",
        message: data.message,
      });

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      setFormStatus({
        type: "error",
        message:
          error instanceof Error ? error.message : "Failed to send message",
      });
    } finally {
      setIsLoading(false);
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

      <section className="py-5 bg-grey">
        <div className="container my-md-5">
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
              <div className="divider mt-3 mb-5"></div>
              <p className="font-raleway fw-normal fs-6 mb-0">
                If you have urgent concerns, you can call us at any time or
                speak to us in the mailbox and provide a telephone number. We
                will get back as soon as possible.
              </p>
              <p className="font-raleway fw-600 fs-6">
                Visits must always be arranged on time.
              </p>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-5 bg-white rounded-3 py-3">
              {formStatus.type && (
                <Alert type={formStatus.type} message={formStatus.message} />
              )}

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
                    required
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
                    required
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
                    required
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
                  disabled={isLoading}
                >
                  {isLoading ? "Wird gesendet..." : "Absenden"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 my-md-5">
        <h4 className="font-inter fw-bold text-center mb-5">
          Meine Kontaktinformationen
        </h4>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="d-flex justify-content-center">
                <div className="icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
              </div>
              <h6 className="font-poppins fw-600 fs-6 text-center mt-3 mb-4">
                Email
              </h6>
              <h6 className="font-poppins fw-500 fs-6 mb-0 text-center">
                Info@jj-immobilienpartner.de
              </h6>
            </div>
            <div className="col-md-4">
              <div className="d-flex justify-content-center">
                <div className="icon">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
              </div>
              <h6 className="font-poppins fw-600 fs-6 text-center mt-3 mb-4">
                Telefon
              </h6>
              <h6 className="font-poppins fw-500 fs-6 mb-0 text-center mb-1">
                +00 9191829229
              </h6>
              <h6 className="font-poppins fw-500 fs-6 mb-0 text-center">
                +00 9191829229
              </h6>
            </div>
            <div className="col-md-4">
              <div className="d-flex justify-content-center">
                <div className="icon">
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
              </div>
              <h6 className="font-poppins fw-600 fs-6 text-center mt-3 mb-4">
                Adresse
              </h6>
              <h6 className="font-poppins fw-500 fs-6 mb-0 text-center">
                JAN JACOBI
                <br /> Herderstr. 4 <br />
                42327 Wuppertal
              </h6>
            </div>
          </div>
        </div>
      </section>

      <section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2498.084288986628!2d7.077071475251197!3d51.23594253049968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8d6b66433f8a3%3A0x6845367a2943e56d!2sHerderstra%C3%9Fe%204%2C%2042327%20Wuppertal%2C%20Germany!5e0!3m2!1sen!2s!4v1735138137159!5m2!1sen!2s"
          width="100%"
          height="450"
          loading="lazy"
        ></iframe>
      </section>
    </>
  );
}
