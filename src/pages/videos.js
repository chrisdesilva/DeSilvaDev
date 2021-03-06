import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

import { BREAKPOINT } from "utils/breakpoints";
import { Layout } from "components/layout/Layout";
import Seo from "components/layout/SEO";
import Video from "components/shared/Video";
import { VisuallyHidden } from "utils/styles";

const VideoPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        videos: allYoutubeVideo {
          edges {
            node {
              id
              title
              description
              videoId
              publishedAt
              thumbnail {
                url
              }
            }
          }
        }
      }
    `
  );

  return (
    <Layout>
      <Seo title="Videos" />
      <Wrapper>
        <Content>
          <VisuallyHidden>
            <h1>Videos Page</h1>
          </VisuallyHidden>
          <div>
            {data.videos.edges.length
              ? data.videos.edges.map((video) => <Video video={video.node} />)
              : null}
          </div>
        </Content>
      </Wrapper>
    </Layout>
  );
};

export default VideoPage;

const Wrapper = styled.section`
  margin: 32px auto;
  max-width: 1200px;
`;

const Content = styled.div`
  padding: 16px;
  background: var(--transparent-dark-brown-90);
  border: 3px solid var(--black);
  border-radius: var(--container-radius);
  box-shadow: var(--box-shadow);

  div {
    display: grid;
    grid-gap: 16px;

    @media ${BREAKPOINT.md} {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
