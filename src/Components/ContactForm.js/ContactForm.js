import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import { ButtondPrime, lightPrimry, primary } from '../Style';

export const ContactForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [success, setSuccess] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_6ogothw',
        'template_fbwnu9i',
        form.current,
        'dFN3nSgws2R5svVEu',
      )
      .then(
        (result) => {
          setFormData({ name: '', email: '', subject: '', message: '' });
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
        },
      );
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <>
      {success ? (
        <h2 className="text-cen">Your email has been sent</h2>
      ) : (
        <StdForm ref={form} onSubmit={handleFormSubmit} className={'flex-col'}>
          <ul>
            <li className="flex-row">
              <section className="flex-col">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </section>
              <section className="flex-col">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </section>
            </li>
            <li>
              <section className="flex-col">
                <label>Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </section>
            </li>
            <li>
              <section className="flex-col">
                <label>Message</label>
                <textarea
                  name="message"
                  rows="10"
                  cols="50"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </section>
            </li>
          </ul>
          <ButtondPrime type="submit">Send Message</ButtondPrime>
        </StdForm>
      )}
    </>
  );
};

const StdForm = styled.form`
  > ul {
    width: 500px;
    margin: auto;
    @media (max-width: 800px) {
      width: 100%;
    }
    li {
      margin-bottom: 2rem;
      @media (max-width: 800px) {
        flex-direction: column;
        padding: 0 1rem;
      }
      section {
        flex-basis: 0;
        flex-grow: 1;
        :not(:last-child) {
          margin-right: 2rem;
          @media (max-width: 800px) {
            margin:0 0 2rem 0;
          }
        }
        label {
          color: gray;
        }
        input {
          height: 3rem;
          border-radius: 4px;
          border: 2px solid lightgray;
        }
        textarea {
          border-radius: 4px;
          border: 2px solid lightgray;
        }
      }
    }
  }
  button {
    margin: auto;
  }
`;
