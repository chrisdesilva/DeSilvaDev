import React from "react";
import styled from "styled-components";
import { Link, graphql, useStaticQuery } from "gatsby";

import { BREAKPOINT } from "utils/breakpoints";
import { Layout } from "components/layout/Layout";
import Seo from "components/layout/SEO";
import Video from "components/shared/Video";

const IndexPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        posts: allContentfulBlog(limit: 3, sort: { fields: date, order: ASC }) {
          edges {
            node {
              title
              slug
              preview {
                childMdx {
                  excerpt(truncate: true)
                }
              }
              post {
                raw
              }
              date(formatString: "MM.DD.yyyy")
              tags
            }
          }
        }
        videos: allYoutubeVideo(limit: 3) {
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
    <Layout showBg>
      <Seo title="Home" />
      <Wrapper>
        <VisuallyHidden>
          <h1>DeSilvaDev homepage</h1>
        </VisuallyHidden>
        <PostContainer>
          <h2>Latest Posts</h2>
          <div>
            {data.posts.edges.map((post) => (
              <Post to={`/blog/${post.node.slug}`}>
                <h3>{post.node.title}</h3>
                <p>{post.node.preview.childMdx.excerpt}</p>
                <p>More &rarr;</p>
              </Post>
            ))}
          </div>
        </PostContainer>
        <VideoContainer>
          <h2>Latest Videos</h2>
          <div>
            {data.videos.edges.length
              ? data.videos.edges.map((video) => <Video video={video.node} />)
              : null}
          </div>
        </VideoContainer>
      </Wrapper>
    </Layout>
  );
};

export default IndexPage;

const Wrapper = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  padding: 32px 0;
`;

const VisuallyHidden = styled.div`
  position: absolute;
  visibility: hidden;
  clip: rect(0px, 0px, 0px, 0px);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0px none;
`;

const ContentContainer = styled.section`
  border-radius: var(--container-radius);
  padding: 16px 32px;
  box-shadow: var(--box-shadow);

  h2 {
    color: var(--white);
    text-transform: uppercase;
    margin-bottom: 16px;
    position: relative;
    display: inline-block;

    ::after {
      content: "";
      position: absolute;
      height: 2px;
      width: 90%;
      bottom: 0;
      left: 5%;
      background-color: var(--white);
      margin: 0 auto;
    }
  }

  div {
    display: grid;
    grid-gap: 16px;

    @media ${BREAKPOINT.md} {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

const PostContainer = styled(ContentContainer)`
  background-color: var(--transparent-dark-green-90);
  margin-bottom: 32px;
  border: 3px solid var(--dark-green);
`;

const VideoContainer = styled(ContentContainer)`
  background-color: var(--transparent-dark-brown-90);
  border: 3px solid var(--dark-brown);
  margin-bottom: 16px;
  padding-bottom: 32px;
`;

const Post = styled(Link)`
  background-color: var(--transparent-white-75);
  border: 2px solid var(--black);
  padding: 16px 32px;
  border-radius: var(--card-radius);
  margin-bottom: 16px;
  display: block;
  width: 100%;
  color: var(--dark-green);
  text-decoration: unset;
  box-shadow: var(--box-shadow);

  h3 {
    font-size: 1.5rem;
  }

  :hover {
    p:last-of-type {
      color: var(--light-green);
    }
  }

  p:last-of-type {
    margin-top: 16px;
    font-size: 0.75rem;
    transition: color 300ms;
  }
`;
