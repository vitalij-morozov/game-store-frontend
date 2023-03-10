import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <Container>
      <h5>&copy; {new Date().getFullYear()}</h5>
      <span>GameBuy Pet Project (ReactJs, MongoDb, Express, NodeJs)</span>{' '}
      <a href='/' target='_blank'>
        PORTFOLIO
      </a>
    </Container>
  );
}

const Container = styled.footer`
  /* height: 5rem; */
  background-color: var(--clr-black);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem 0;
  span {
    color: var(--clr-primary-5);
  }
  h5 {
    color: var(--clr-white);
  }
`;
export default Footer;
