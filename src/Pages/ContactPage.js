import React from 'react';
import styled from 'styled-components';
import { ContactForm } from '../Components/ContactForm.js/ContactForm';
import Me from '../Components/Me/Me';
import { StdPageEl } from '../Components/Style';

function ContactPage() {
  return (
    <StdSection>
      <StdPageEl>
        <section>
          <img src="62550592.png" alt="me" />
        </section>
      </StdPageEl>
      <StdPageEl>
        <h1 className="text-cen">Want to discuss a startup collaboration?</h1>
      </StdPageEl>
      <StdPageEl>
        <ContactForm />
      </StdPageEl>
    </StdSection>
  );
}
const StdSection = styled.section`
  > li {
    display: flex;
    flex-direction: column;
    > section {
      width: 20%;
      align-items: center;
      overflow: hidden;
      margin: auto;
      display: flex;
      background-color: #ffffff;
      margin-bottom: -7rem;
      aspect-ratio: 1/1;
      img {
        width: 60%;
        margin: auto;
      }
    }
  }
`;

export default ContactPage;
