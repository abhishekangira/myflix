import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import logo from "../assets/logo.png";

import getCountryName from "../utils/getCountryName";

const Nav = styled.nav`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 6rem;
  transition: 0.5s;
  background-color: rgba(255, 255, 255, 0.2);
  ${({ scrolled }) =>
    scrolled &&
    css`
      background-color: rgba(255, 255, 255, 0.7);
      height: 4rem;
      padding: 0 1.5rem;
      box-shadow: 0 0 1rem 0.2rem rgba(0, 0, 0, 0.3);
    `}
  backdrop-filter: blur(5px) saturate(100%) contrast(50%) brightness(120%);
  position: fixed;
  top: 0;
  z-index: 10;
`;

const Logo = styled.img`
  width: var(--logo-size);
  ${({ scrolled }) =>
    scrolled &&
    css`
      width: var(--logo-size-s);
    `}
`;

const Right = styled.div`
  display: flex;
  position: relative;
  font-size: var(--font-size);
  height: inherit;
  button {
    background: none;
    height: 100%;
    padding: 0 2rem;
    color: inherit;
    border: none;
    outline: none;
    cursor: pointer;
    &:hover {
      background: rgba(255, 255, 255, 0.5);
    }
  }
`;

const RegionMenu = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.8);
  top: 6rem;
  right: 2rem;
  transition: 0.5s;
  button {
    padding: 1.5rem 2rem;
  }
  ${({ scrolled }) =>
    scrolled &&
    css`
      top: 4rem;
    `}
`;

export default function Navbar({ country, setCountry }) {
  const [scrolled, setScrolled] = useState(false);
  const [regionMenuVisible, setRegionMenuVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) setScrolled(true);
    else setScrolled(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Nav scrolled={scrolled}>
      <Link to="/">
        <Logo scrolled={scrolled} src={logo} alt="myflix logo" />
      </Link>
      <Right>
        <Link to="/favourites">
          <button>Favourites</button>
        </Link>
        <button onClick={() => setRegionMenuVisible((prev) => !prev)}>Region ({country})</button>
        {regionMenuVisible && (
          <RegionMenu scrolled={scrolled}>
            <button
              title="US button"
              onClick={() => {
                setCountry("US");
                setRegionMenuVisible(false);
              }}
            >
              {getCountryName("US")}
            </button>
            <button
              onClick={() => {
                setCountry("GB");
                setRegionMenuVisible(false);
              }}
            >
              {getCountryName("GB")}
            </button>
            <button
              onClick={() => {
                setCountry("JP");
                setRegionMenuVisible(false);
              }}
            >
              {getCountryName("JP")}
            </button>
            <button
              onClick={() => {
                setCountry("CN");
                setRegionMenuVisible(false);
              }}
            >
              {getCountryName("CN")}
            </button>
            <button
              onClick={() => {
                setCountry("AU");
                setRegionMenuVisible(false);
              }}
            >
              {getCountryName("AU")}
            </button>
          </RegionMenu>
        )}
      </Right>
    </Nav>
  );
}
