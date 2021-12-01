import React from "react";
import styled from "styled-components";

import { Footer } from "./Footer";
import { GlobalStyle } from "utils/styles";
import { Header } from "./Header";
import Hero from "images/low_poly_forest.png";

export const Layout = ({ children }) => {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <PageContainer
        css={{ background: `url(${Hero}) no-repeat center fixed` }}
      >
        <Spacer />
        {children}
      </PageContainer>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const PageContainer = styled.main`
  max-width: 100vw;
  background-color: var(--light-green);
  flex-grow: 1;
  padding: 0 16px;
  position: relative;
  background-size: cover;
`;

const Spacer = styled.div`
  height: 140px;
  width: 100%;
`;
