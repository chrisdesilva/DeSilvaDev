import React from "react";
import styled from "styled-components";

import Bitmoji from "images/bitmoji.png";
import { BREAKPOINT } from "utils/breakpoints";
import { Layout } from "components/layout/Layout";
import Seo from "components/layout/SEO";
import { VisuallyHidden } from "utils/styles";

const AboutPage = () => {
  return (
    <Layout>
      <Seo title={"About"} />
      <Wrapper>
        <Content>
          <VisuallyHidden>
            <h1>About Page</h1>
          </VisuallyHidden>
          <h2>
            <span>Hey! I'm Chris DeSilva.</span>
          </h2>
          <p>
            I'm a developer currently based out of Austin, Texas. Yeehaw and
            whatnot. I love working on web and mobile applications with a
            specialty in all things JavaScript. My current focus is React and
            React Native, but I've played a bit with Next.js, Gatsby, Angular,
            Express, and Node as well.
          </p>
          <div className="bitmoji">
            <img src={Bitmoji} alt="Animated Chris DeSilva" />
          </div>
          <h2>
            <span>I'm a teacher at heart.</span>
          </h2>
          <p>
            After teaching middle school for 8 years and taking a
            non-traditional route into software development, I found myself
            missing the experience of helping others learn and grow. This site
            aims to lend a hand to those on their development journey through
            videos and blog posts.
          </p>
          <h2>
            <span>I love music, sports, and outdoor adventure.</span>
          </h2>
          <p>
            My wife and I have gone to 15 U.S. National Parks and are ready for
            more once our daughter can sit up safely in one of those sweet baby
            hiking backpacks. I like to take advantage of the vibrant music
            scene here in Austin and enjoy playing guitar and singing as well.
            Fall weekends typically involve lots of couch time being
            disappointed by the Wisconsin Badgers and Dallas Cowboys. Other
            parts of the year are spent with the Cubs and Bulls.
          </p>
        </Content>
      </Wrapper>
    </Layout>
  );
};

export default AboutPage;

const Wrapper = styled.section`
  margin: 32px auto;
`;

const Content = styled.div`
  padding: 0 48px 48px 48px;
  margin: 0 auto;
  max-width: 900px;
  background: var(--white);
  border-radius: 16px;
  box-shadow: var(--box-shadow);

  .bitmoji {
    box-shadow: var(--box-shadow);
  }

  .title {
    margin-bottom: 32px;
  }

  a {
    color: var(---dark-green);
    transition: color 300ms;
    :hover {
      color: var(--light-green);
    }
  }

  h2 {
    font-style: italic;
    position: relative;
    font-size: 2rem;
    margin: 16px 0;

    span {
      position: relative;
    }

    ::before {
      width: 1em;
      height: 1em;
      content: "";
      background: var(--light-green);
      position: absolute;
      border-radius: 50%;
      z-index: 0;
      top: 0;
      left: -16px;
    }
  }

  p {
    font-size: 1.25rem;
    margin: 16px 0;
  }

  img {
    margin-left: 25%;
    display: block;
    height: 240px;
    position: relative;
  }

  div {
    margin-top: 32px;
    padding: 16px 0;
    position: relative;
    border-radius: 8px;
    border: 3px solid var(--dark-brown);
    background: linear-gradient(
      1deg,
      var(--dark-green) 25%,
      var(--dark-brown) 30%,
      var(--sky-blue) 31%,
      var(--white) 95%
    );
  }

  @media ${BREAKPOINT.md} {
    div {
      width: 50%;
    }
  }
`;
