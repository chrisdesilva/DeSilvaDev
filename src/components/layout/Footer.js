import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import Logo from "images/logo_white.svg";
import { BREAKPOINT } from "../../utils/breakpoints";

export const Footer = (props) => {
  return (
    <Wrapper>
      <Links>
        <div>
          <Link to="/">
            <img src={Logo} alt="DeSilvaDev" />
            {`<DeSilvaDev />`}
          </Link>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/videos">Videos</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <ul>
            <li>
              <a
                href="mailto:chris@desilvadev.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCsqk14rHyDlGnn5SrP8bN3A"
                target="_blank"
                rel="noreferrer noopener"
              >
                YouTube
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/chris-desilva"
                target="_blank"
                rel="noreferrer noopener"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/desilvadev"
                target="_blank"
                rel="noreferrer noopener"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </Links>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background-color: var(--brown);
  padding: 16px 32px;
  border-top: 3px solid var(--dark-brown);
`;

const Links = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    color: var(--white);
    text-decoration: none;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: color 300ms;

    :hover {
      color: var(--transparent-white-75);
    }
  }

  img {
    width: 48px;
    height: 48px;
    margin-top: 0;
  }

  ul {
    margin: 16px 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;

    ::before {
      position: absolute;
      top: -8px;
      left: -50%;
      content: "";
      height: 2px;
      background-color: var(--dark-brown);
      width: 200%;
    }
  }

  li {
    list-style: none;
  }

  @media ${BREAKPOINT.md} {
    flex-direction: row;
    justify-content: space-evenly;

    div {
      display: flex;
      align-items: flex-start;
    }

    img {
      width: 96px;
      height: 96px;
      margin-top: 0;
    }

    ul {
      :first-of-type {
        ::before {
          width: 0px;
          height: 0px;
        }
      }
      :last-of-type {
        margin-left: 32px;
        ::before {
          width: 2px;
          height: 110%;
          top: -5%;
          left: -25%;
        }
      }
      li {
        padding-bottom: 8px;
      }
    }
  }
`;
