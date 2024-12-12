import LandingPage from "./components/LandingPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker, faPhone } from "@fortawesome/free-solid-svg-icons";
export default function Home() {
  return (
    <main>
      <p>
        <FontAwesomeIcon icon={faPhone} className="me-3" />
        <a className="text-reset" href="tel:+41782418704">
          +41 78 241 87 04
        </a>
      </p>
      <button type="button" className="btn btn-primary">
        Primary
      </button>
      <button type="button" className="btn btn-secondary">
        Secondary
      </button>
      <LandingPage />
    </main>
  );
}
