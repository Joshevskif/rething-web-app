import React, { useState } from "react";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import classes from "./Career.module.css";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import Footer from "../Footer/Footer";

const Career = () => {
  const [visibleDetails, setVisibleDetails] = useState({});

  const toggleDetails = (position) => {
    setVisibleDetails((prevState) => ({
      ...prevState,
      [position]: !prevState[position],
    }));
  };

  const jobPositions = [
    {
      department: "Software Development Department",
      positions: [],
    },
    {
      department: "Department of Marketing and Sales",
      positions: [
        {
          title: "Partnership and AI Content Specialist",
          details: `
            <p><strong>Partnership and AI Content Specialist</strong></p>
            <p>We are seeking a driven <strong>Partnership and AI Content Specialist</strong> to lead partnerships with publishers and create audiobooks using advanced AI tools in Macedonian. Join us to innovate and transform publishing with AI!</p>
            <h4>Key Responsibilities:</h4>
            <ul>
              <li>Establish and manage partnerships with regional publishers.</li>
              <li>Facilitate onboarding of partners onto the Boksy platform.</li>
              <li>Use AI tools to convert books (PDFs/Word documents) into high-quality audiobooks in Macedonian.</li>
              <li>Ensure the accuracy and quality of AI-generated content.</li>
              <li>Work closely with the product team to enhance Boksy’s features and user experience.</li>
              <li>Stay updated on AI advancements to optimize workflows.</li>
            </ul>
            <h4>What We’re Looking For:</h4>
            <ul>
              <li><span style="color: #4CAF50;">Strong communication and relationship-building skills.</span></li>
              <li><span style="color: #4CAF50;">Experience with publishers or an interest in publishing processes.</span></li>
              <li><span style="color: #4CAF50;">Familiarity with AI tools (audio or text-to-speech).</span></li>
              <li><span style="color: #4CAF50;">Proficiency in Macedonian.</span></li>
              <li><span style="color: #4CAF50;">A proactive, problem-solving mindset suitable for a startup environment.</span></li>
            </ul>
            <p>Join us to revolutionize publishing and grow the Boksy app across the region.</p>
          `,
        },
        {
          title: "Marketing and Advertising Specialist",
          details: `
            <p><strong>Marketing and Advertising Specialist</strong></p>
            <p>We’re looking for a creative and results-driven <strong>Marketing and Advertising Specialist</strong> to design and execute campaigns that scale businesses.</p>
            <h4>Key Responsibilities:</h4>
            <ul>
              <li>Campaign Management: Plan and execute multi-channel campaigns across digital, social, and traditional media.</li>
              <li>Brand Building: Ensure consistent messaging and enhance brand awareness.</li>
              <li>Market Insights: Conduct research and analyze trends to target audiences effectively.</li>
              <li>Content Coordination: Collaborate on marketing collateral and engaging content.</li>
              <li>Performance Tracking: Measure campaign ROI and optimize based on analytics.</li>
            </ul>
            <h4>Qualifications:</h4>
            <ul>
              <li>Bachelor’s degree in Marketing, Advertising, or related field.</li>
              <li>2+ years in marketing or advertising with proven campaign success.</li>
              <li>Strong skills in digital tools (Google Analytics, Ads Manager, etc.) and creative problem-solving.</li>
              <li>Data-driven and loves to bring initiatives.</li>
            </ul>
          `,
        },
      ],
    },
    {
      department: "ICT Department",
      positions: [
        {
          title: "QA - Software Tester",
          details: `
            <p><strong>QA - Software Tester</strong></p>
            <p>We’re searching for a talented <strong>QA Software Tester</strong> to ensure our platform meets the highest standards of performance, reliability, and user satisfaction. If you thrive in a fast-paced environment and love solving problems, this role is for you!</p>
            <h4>Key Responsibilities:</h4>
            <ul>
              <li>Develop, execute, and maintain manual and automated test cases for our platform.</li>
              <li>Identify, document, and track software bugs and performance issues.</li>
              <li>Collaborate with developers to ensure complete test coverage.</li>
              <li>Conduct regression, functional, integration, and performance testing.</li>
              <li>Improve testing processes and tools for product quality enhancement.</li>
            </ul>
            <h4>What We’re Looking For:</h4>
            <ul>
              <li><span style="color: #3F51B5;">Experience in manual and automated testing.</span></li>
              <li><span style="color: #3F51B5;">Excellent analytical and problem-solving skills.</span></li>
              <li><span style="color: #3F51B5;">A collaborative mindset that fits our startup culture.</span></li>
              <li><span style="color: #3F51B5;">Bonus: Experience testing mobile apps or knowledge of agile practices.</span></li>
            </ul>
            <p>Be a key player in delivering seamless user experiences on our platform!</p>
          `,
        },
      ],
    },
  ];

  return (
    <>
      <div className={classes.div}>
        <NavigationMenu />
        <ContentWrapper className={classes.wrapper}>
          <div className="animate__animated animate__slideInUp">
            <h1 className={classes.heading}>Career</h1>
            <p className={classes.para}>
              Join the ReThing team and be part of a dynamic and innovative work
              culture. Discover exciting career opportunities and become a
              driving force behind the next wave of digital transformation.
            </p>
          </div>

          <h2 className={classes.heading2}>Open positions</h2>

          {jobPositions.map((department, deptIndex) => (
            <div key={deptIndex}>
              <p className={classes.soft}>{department.department}</p>
              <hr className={classes.hr} />
              {department.positions.map((position, posIndex) => (
                <div key={posIndex}>
                  <h4
                    className={classes.h4}
                    onClick={() => toggleDetails(position.title)}
                  >
                    {position.title}
                    <span className={classes.details}>
                      Details <span className={classes.arrow}>↓</span>
                    </span>
                  </h4>
                  {visibleDetails[position.title] && (
                    <div
                      className={classes.detailsText}
                      dangerouslySetInnerHTML={{ __html: position.details }}
                    />
                  )}
                </div>
              ))}
            </div>
          ))}
        </ContentWrapper>
      </div>
      <Footer />
    </>
  );
};

export default Career;
