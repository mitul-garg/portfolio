import { FaDownload } from "react-icons/fa";
import CV from "../assets/cv.pdf";

export const DownloadButton = (props) => {
  return (
    <button className="hero-btn resume">
      <a
        href={CV}
        download="MitulGarg"
        target="_blank"
        rel="noreferrer"
        className="resume-link"
      >
        Resume <FaDownload />
      </a>
    </button>
  );
};
