import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const ProblemSpace = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-8">
        <div className="container">
          <SectionTitle
            title="Problem"
            paragraph={
              <p>
                <p>
                  There is a lack of clear guidance for individuals who feel
                  overwhelmed or lost in pursuing their dream careers or
                  personal interests. Many people struggle to identify the
                  necessary steps and resources required to achieve their goals,
                  which can lead to feelings of frustration and hopelessness.
                </p>
                <br></br>
                <ul
                  style={{
                    listStyleType: "circle",
                    textAlign: "left",
                    width: "900px",
                  }}
                >
                  <li>
                    Understanding the common challenges and barriers individuals
                    face when trying to pursue their dream careers or personal
                    interests.
                  </li>
                  <li>
                    Identifying the specific skills, qualifications, and
                    experiences required for various career paths or personal
                    goals.
                  </li>
                  <li>
                    Investigating the availability and effectiveness of existing
                    career guidance resources and platforms.
                  </li>
                  <li>
                    Exploring the preferences and behaviors of users when
                    seeking career advice or skill development opportunities
                    online.
                  </li>
                  <li>
                    Assessing the impact of personalized guidance and practical
                    steps on individuals&apos; motivation and success in
                    achieving their goals.
                  </li>
                </ul>
              </p>
            }
            center
            width="900px"
          />

          {/* <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div> */}
        </div>
      </section>
    </>
  );
};

export default ProblemSpace;
