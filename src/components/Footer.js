import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Sparsh Saxena</h1>
          <PText>
            A developer from Bareilly, Uttar Pradesh, India. I always build on
            basis of good and new functionality and unique design .
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+918439803019',
                path: 'tel:+918439803019',
              },
              {
                title: 'sparsh0987654321@gmail.com',
                path: 'mailto:sparsh0987654321@gmail.com',
              },
              {
                title: 'North City Extension, Bareilly, India',
                path: 'http://google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: 'Facebook',
                path: 'http://facebook.com/sparsh.saxena.50746/',
              },
              {
                title: 'Twitter',
                path: 'http://twitter.com/SparshItsme',
              },
              {
                title: 'Instagram',
                path: 'http://instagram.com/sparsh_459',
              },
              {
                title: 'Github',
                path: 'https://github.com/sparsh459',
              },
              {
                title: 'LinkedIn',
                path: 'https://www.linkedin.com/in/saxenasparsh',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            © 2021 - Sparsh Saxena | Designed By{' '}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/saxenasparsh"
            >
              Sparsh
            </a>{' '}
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}
