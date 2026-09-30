import {
  FaUserShield,
  FaBug,
  FaCode,
  FaSearch
} from "react-icons/fa";
import '../styles/about.css'

export default function About({ data }) {
  return (
    <section className="about" id="about">

      <div className="about-container">

        {/* Section Heading */}
        <div className="section-heading">

          <h2>ABOUT ME</h2>
          <div className="heading-line"></div>
        </div>

        <div className="about-content">

          {/* Left - Description */}
          <div className="about-text">

            <p>
              {data.summary}
            </p>


          </div>


        
        </div>

      </div>

    </section>
  );
}