import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Container>
      <HeaderBox>
        <HeaderLeft>
          <button>
            <FontAwesomeIcon icon={faAlignJustify} />
          </button>
          <Link to="/">
            <h1>ZARA</h1>
          </Link>
        </HeaderLeft>
        <HeaderRight>
          <div>
            <Link to="/">
              <span>Search</span>
            </Link>
          </div>
          <Link to="/">
            <span>log in</span>
          </Link>
          <Link to="/">
            <span>home</span>
          </Link>
          <Link to="/">
            <FontAwesomeIcon icon={faBasketShopping} />
          </Link>
        </HeaderRight>
      </HeaderBox>
    </Container>
  );
}
const Container = styled.div`
  background-color: transparent;
  position: fixed;
  top: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  z-index: 10;
  text-transform: uppercase;
`;

const HeaderBox = styled.div`
  padding: 24px 30px 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

const HeaderLeft = styled.div`
  align-items: flex-start;
  display: flex;
  button {
    margin-top: 6px;
    margin-right: 10px;
    border: 0px;
    outline: 0px;
    background-color: transparent;
    svg {
      width: 24px;
      height: 24px;
    }
  }
  h1 {
    margin-left: 56.5px;
    font-family: 'DM Serif Display', serif;
    font-size: 100px;
    letter-spacing: -15px;
    transform: scaleY(1.5);
    color: black;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  height: 100%;
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-end;
  text-align: right;
  margin-left: 19px;
  font-size: 18px;
  div {
    a {
      margin-right: 230px;
      padding-right: 32px;
      border-bottom: 0.5px solid black;
      span {
        font-weight: 500;
        color: black;
      }
    }
  }
  a {
    margin-left: 24px;
    span {
      font-weight: lighter;
      color: black;
    }
    svg {
      color: black;
      padding-right: 6px;
    }
  }
`;

export default Header;
