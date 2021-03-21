import { useEffect, useState } from "react";

import styled, { css } from "styled-components";

import logo from "../assets/logo.png";

const Nav = styled.nav`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  transition: 1s;
  background-color: rgba(255, 255, 255, 0.2);
  ${({ scrolled }) =>
    scrolled &&
    css`
      background-color: rgba(255, 255, 255, 0.7);
      height: 2rem;
      padding: 2rem 1.5rem;
      box-shadow: 0 0 1rem .2rem rgba(0, 0, 0, 0.3);
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
  font-size: var(--font-size);
  span:not(:first-child) {
    margin-left: 1rem;
  }
`;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
      <Logo scrolled={scrolled} src={logo} alt="myflix logo" />
      <Right>
        <span>Search</span>
        <span>Favourites</span>
        <span>Country</span>
      </Right>
    </Nav>
  );
}
