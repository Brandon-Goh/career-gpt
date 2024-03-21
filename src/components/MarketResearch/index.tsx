import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const MarketResearch = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-8">
        <div className="container">
          <SectionTitle
            title="Market Research"
            paragraph={
              <table
                style={{
                  width: "1000px",
                  borderCollapse: "collapse",
                  border: "1px solid black",
                }}
              >
                <thead>
                  <tr>
                    <th style={{ border: "1px solid black" }}>Competitor</th>
                    <th style={{ border: "1px solid black" }}>Description</th>
                    <th style={{ border: "1px solid black" }}>Main Features</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ border: "1px solid black" }}>
                      <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin">
                        LinkedIn
                      </a>
                      <br></br>
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png"
                        alt="LinkedIn Logo"
                        style={{
                          width: "50px",
                          margin: "auto",
                          display: "block",
                        }}
                      />
                    </td>
                    <td style={{ border: "1px solid black", width: "60%" }}>
                      This tool is a social networking platform focused on
                      employment. It uses AI algorithms for suggesting network
                      connections, making job recommendations, and populating
                      social media feed.
                    </td>
                    <td style={{ border: "1px solid black" }}>
                      <ul>
                        <li>Potential employees:</li>
                        <ul>
                          <li>Job recommendations</li>
                          <li>Connection recommendations</li>
                          <li>AI-assisted messages</li>
                        </ul>
                        <li>Employers:</li>
                        <ul>
                          <li>Generating job descriptions</li>
                        </ul>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ border: "1px solid black" }}>
                      <a href="https://www.jobcopy.io/">Jobcopy</a>
                    </td>
                    <td style={{ border: "1px solid black" }}>
                      This tool uses an AI model to write resumes and cover
                      letters for specific jobs.
                    </td>
                    <td style={{ border: "1px solid black" }}>
                      <ul>
                        <li>Job-seekers:</li>
                        <ul>
                          <li>Job compatibility calculator</li>
                          <li>Resume generator</li>
                          <li>Cover letter generator</li>
                          <li>Interview Q&A generator</li>
                        </ul>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ border: "1px solid black" }}>
                      <a href="https://applypass.com/">ApplyPass</a>
                    </td>
                    <td style={{ border: "1px solid black" }}>
                      This tool automatically matches profiles to jobs and
                      applies on behalf of the applicant using AI.
                    </td>
                    <td style={{ border: "1px solid black" }}>
                      <ul>
                        <li>Job-appliers:</li>
                        <ul>
                          <li>Profile matching with jobs</li>
                          <li>Auto-fill and submissions of job applications</li>
                        </ul>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ border: "1px solid black" }}>
                      <a href="https://www.finalroundai.com/interview-copilot">
                        Final Round AI
                      </a>
                    </td>
                    <td style={{ border: "1px solid black" }}>
                      This tool uses AI-powered chatbots to help prepare users
                      for interviews. It is also used unethically during actual
                      interviews.
                    </td>
                    <td style={{ border: "1px solid black" }}>
                      <ul>
                        <li>Job-interviewers:</li>
                        <ul>
                          <li>Live transcription</li>
                          <li>AI-powered mock interviews</li>
                          <li>Technical assessment support</li>
                          <li>Case analysis support</li>
                        </ul>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ border: "1px solid black" }}>
                      <a href="https://www.futurefit.ai/">FutureFit AI</a>
                    </td>
                    <td style={{ border: "1px solid black" }}>
                      Given a career starting point, this tool helps navigate
                      users to the best career destination by sharing learning
                      opportunities, resources, and jobs. Recommendations are
                      based on an AI model that leverages data related to the
                      labor market.
                    </td>
                    <td style={{ border: "1px solid black" }}>
                      <ul>
                        <li>Career-seekers:</li>
                        <ul>
                          <li>
                            Assessments to figure out career starting point
                          </li>
                          <li>Recommendations for career destination</li>
                          <li>Educational programs to teach skills</li>
                          <li>Resources for job preparation</li>
                          <li>Work opportunities</li>
                        </ul>
                        <li>Career coaches:</li>
                        <ul>
                          <li>Send resources</li>
                          <li>Track progress</li>
                          <li>Document notes</li>
                        </ul>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ border: "1px solid black" }}>Blueprint</td>
                    <td style={{ border: "1px solid black" }}>
                      A tool used in high school to help students figure out an
                      appropriate career path and then take appropriate courses
                      in preparation for applying to relevant university
                      programs.
                    </td>
                    <td style={{ border: "1px solid black" }}>
                      <ul>
                        <li>Personality quiz for career selection</li>
                        <li>University program recommendations</li>
                        <li>Course planning guide</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
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

export default MarketResearch;
