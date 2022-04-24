import React from 'react';
import styled from 'styled-components';
import AboutMe from '../Components/AboutMe/AboutMe';
import Me from '../Components/Me/Me';
import Skills from '../Components/Skills/Skills';
import { borderPrime, primary, StdPageEl } from '../Components/Style';

function AboutPage() {
  return (
    <StdSection>
      <StdPageEl>
        <img src="62550592.png" alt="me" />
      </StdPageEl>
      <StdPageEl>
        <h2>SUMMARY</h2>
        <p>
          Results-focused Full-Stack developer with strength in React.js and
          Node.js. Proactive leader with strengths in communication and
          collaboration. Works great with team members under Agile and Scrum
          frameworks. Adept at managing concurrent objectives to promote
          efficiency and influence positive outcomes.
        </p>
      </StdPageEl>
      <StdPageEl>
        <h2>SKILLS</h2>
        <Skills />
      </StdPageEl>
      {/* <StdPageEl>
        <h2>EXPERIENCE</h2>
        <p>
          ProEats, Melbourne - Full-Stack Developer Dec 2021 - PRESENT link -
          https://www.proeats.com.au/ Description: ProEats is A startup website,
          which aims to provide customers a comprehensive restaurant reservation
          booking experience, based in Melbourne. Key responsibility/
          Achievements: Worked with 14 people including 9 developers, 4 Devops
          and a Business Analyst on an Agile (Scrum) Development Team using Jira
          to deliver regular updates. As a team lead, participated in and
          organized daily stand-up meetings, sprint meetings, strong reporting
          and effective communication with team members. Providing a strong
          technical direction involves establishing a technical vision,
          resolving technical disagreements and managing the technical quality
          of team deliverables, helping team members find solutions, and
          negotiating with team members in order to work together more
          effectively. Performed code review for pe
        </p>
      </StdPageEl>
      <StdPageEl>
        <h2>EXPERIENCE</h2>
        <p>
          Results-focused Full-Stack developer with strength in React.js and
          Node.js. Proactive leader with strengths in communication and
          collaboration. Works great with team members under Agile and Scrum
          frameworks. Adept at managing concurrent objectives to promote
          efficiency and influence positive outcomes.
        </p>
      </StdPageEl> */}
    </StdSection>
  );
}
const StdSection = styled.section`
  > li {
    display: flex;
    flex-direction: column;
    > img {
      margin: auto;
      align-items: center;
      width: 20%;
    }
    > h2 {
      margin-bottom: 2rem;
      text-align: center;
    }
  }
`;

export default AboutPage;
