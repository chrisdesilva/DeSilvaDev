import React from "react";
import styled from "styled-components";

import Bitmoji from "images/bitmoji.png";
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
          <p>
            I'm a developer, musician, and outdoors enthusiast currently based
            out of Austin, Texas. I love working on web and mobile applications
            with a specialty in React and React Native.
          </p>
          <p>
            After teaching middle school for 8 years and taking a
            non-traditional route into software development, I found myself
            missing the experience of helping others learn and grow. This site
            aims to lend a hand to those on their development journey.
          </p>
          <div>
            <img src={Bitmoji} alt="Animated Chris DeSilva" />
          </div>
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
  padding: 0 64px 32px 64px;
  margin: 0 auto;
  max-width: 900px;
  background: var(--white);
  border-radius: 8px;
  box-shadow: var(--box-shadow);

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
  p {
    font-size: 1.25rem;
    margin-bottom: 16px;
  }

  img {
    margin-left: 25%;
    display: block;
    height: 240px;
  }

  div {
    margin-top: 32px;
    width: 50%;
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
`;
