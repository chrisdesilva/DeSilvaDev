import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { BREAKPOINT } from "utils/breakpoints";
import Logo from "images/logo_black.svg";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 20;
      if (navRef.current !== show) {
        setScrolled(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Wrapper ref={navRef}>
      <Links scrolled={scrolled}>
        <div>
          <Link to="/" className="logo">
            <img src={Logo} alt="DeSilvaDev" />
            {`<DeSilvaDev />`}
          </Link>
          <ul>
            <li>
              <Link activeClassName="active" to="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link activeClassName="active" to="/videos">
                Videos
              </Link>
            </li>
            <li>
              <Link activeClassName="active" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
      </Links>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  padding: 0 16px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  background-color: transparent;
`;

const Links = styled.div`
  transition: transform 300ms;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) =>
    props.scrolled ? "var(--white)" : "var(--transparent-white-75)"};
  transform: ${(props) =>
    props.scrolled ? "translateY(-16px)" : "translateY(0px)"};
  border: 2px solid var(--black);
  border-radius: 50px;
  margin: 16px auto;
  padding: 8px;
  width: 100%;
  max-width: 1200px;
  box-shadow: ${(props) => (props.scrolled ? "var(--box-shadow)" : null)};

  div {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  img {
    width: 48px;
    height: 48px;
    margin-top: 0;
  }

  ul {
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0;
  }

  li {
    list-style: none;
    font-size: 1.25rem;
    margin-left: 32px;
  }

  .logo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  a {
    color: var(--dark-green);
    text-decoration: none;
    position: relative;
    transition: color 300ms;

    :hover {
      color: var(--light-green);
    }
  }

  .active {
    color: var(--light-green);
  }

  @media ${BREAKPOINT.md} {
    padding: 16px 32px;

    div {
      justify-content: space-between;
    }

    ul {
      justify-content: space-between;
      flex-direction: row;
    }

    .active {
      position: relative;
      color: var(--dark-green);
      ::after {
        position: absolute;
        height: 5px;
        bottom: -8px;
        left: 5%;
        content: "";
        background-color: var(--light-green);
        width: 90%;
        transform: rotate(2deg);
      }
    }
  }
`;
