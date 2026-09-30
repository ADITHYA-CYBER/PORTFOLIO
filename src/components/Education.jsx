import {
  FaGraduationCap,
  FaCalendarAlt,
} from "react-icons/fa";

import "../styles/education.css";

export default function Education({ data }) {
  return (
    <section className="education" id="education">

      <div className="education-container">

        {/* Section Heading */}
        <div className="section-heading">

          <h2>EDUCATION</h2>

          <div className="heading-line"></div>
        </div>


        {/* Education Cards */}
        <div className="education-list">

          {data.education.map((item) => (

            <article
              className="education-card"
              key={`${item.name}-${item.date}`}
            >

              <div className="education-icon">
                <FaGraduationCap />
              </div>


              <div className="education-content">

                <span className="education-date">
                  <FaCalendarAlt />
                  {item.date}
                </span>

                <h3>
                  {item.name}
                </h3>

                <p>
                  {item.meta}
                </p>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}