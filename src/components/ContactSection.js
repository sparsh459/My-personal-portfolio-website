import React from 'react';
import styled from 'styled-components';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import SectionTitle from './SectionTitle';
import ContactInfoItem from './ContactInfoItem';
import ContactForm from './ContactForm';

const ContactSectionStyle = styled.div`
  padding: 10rem 0;
  .contactSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
  }
  .contactSection__wrapper::after {
    position: absolute;
    content: '';
    width: 2px;
    height: 50%;
    background-color: var(--gray-1);
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
  .left {
    width: 100%;
    max-width: 500px;
  }
  .right {
    max-width: 500px;
    width: 100%;
    border-radius: 12px;
    /* padding-left: 3rem; */
  }
  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
    }
    .contactSection__wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
`;

export default function ContactSection() {
  return (
    <ContactSectionStyle>
      <div className="container">
        <SectionTitle heading="contact" subheading="get in touch" />
        <div className="contactSection__wrapper">
          <div className="left">
            <a href="tel:+918439803019" target="_blank" rel="noreferrer">
              <ContactInfoItem icon={<MdLocalPhone />} text="+918439803019" />
            </a>
            <a
              href="mailto:sparsh0987654321@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <ContactInfoItem
                icon={<MdEmail />}
                text="sparsh0987654321@gmail.com@gmail.com"
              />
            </a>
            <a
              href="https://www.google.com/maps/place/28%C2%B024'15.1%22N+79%C2%B027'00.3%22E/@28.4042016,79.4478804,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x4921c79adc022b36!8m2!3d28.4042016!4d79.4500691?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              <ContactInfoItem text="Bareilly, India" />
            </a>
          </div>
          <div className="right">
            <ContactForm />
          </div>
        </div>
      </div>
    </ContactSectionStyle>
  );
}
