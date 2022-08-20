import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <Container>
      <FooterBox>
        <h2>Explore Winter Collection</h2>
        <ul>
          <Link to="/">
            <li>TIKTOK</li>
          </Link>
          <Link to="/">
            <li>INSTAGRAM</li>
          </Link>
          <Link to="/">
            <li>FACEBOOK</li>
          </Link>
          <Link to="/">
            <li>TWITTER</li>
          </Link>
          <Link to="/">
            <li>PINTEREST</li>
          </Link>
          <Link to="/">
            <li>KAKAO</li>
          </Link>
          <Link to="/">
            <li>YOUTUBE</li>
          </Link>
          <Link to="/">
            <li>SPOTIFY</li>
          </Link>
        </ul>
      </FooterBox>
      <CompanyInfo>
      NAME AND ADDRESS OF THE MANUFACTURER INDUSTRIA DE DUNO TEXTIL, S.A. (INDITEX, SA) AVENIDA DE LA DIPUTACIÓN, EDIFICIO INDITEX, 15143, ARTEIXO (A CORUÑA). SPAIN
      </CompanyInfo>
    </Container>
  );
}
const Container = styled.div`
  /* margin: 0 auto; */
  margin: 0 70px;
`;
const FooterBox = styled.div`
  flex-grow: 1;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  h2 {
    margin-top: 200px;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 3px;
    font-weight: lighter;
  }
  ul {
    margin-bottom: 200px;
    margin-top: 100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0;
    margin-top: 100px;
    font-size: 10px;
    line-height: 14px;
    li {
      margin: 8px;
      letter-spacing: 0.8px;
      transform: scaleY(1.3);
      color: black;
    }
  }
`;
const CompanyInfo = styled.div`
  margin: 12px 0 56px 56.5px;
  padding: 8px 0;
  width: 40%;
  font-size: 9px;
  line-height: 16px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
`;

export default Footer;
