import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

import { BREAKPOINT } from "utils/breakpoints";
import { Layout } from "components/layout/Layout";
import Seo from "components/layout/SEO";
import { VisuallyHidden } from "utils/styles";

const BlogPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        posts: allContentfulBlog(sort: { fields: date, order: ASC }) {
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
      }
    `
  );

  return (
    <Layout>
      <Seo title="Blog" />
      <Wrapper>
        <Content>
          <VisuallyHidden>
            <h1>Blog Page</h1>
          </VisuallyHidden>
          <div>
            {data.posts.edges.map((post) => (
              <Post key={post.node.slug} to={`/blog/${post.node.slug}`}>
                <h3>{post.node.title}</h3>
                <p>{post.node.preview.childMdx.excerpt}</p>
                <p>More &rarr;</p>
              </Post>
            ))}
          </div>
        </Content>
      </Wrapper>
    </Layout>
  );
};

export default BlogPage;

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

const Post = styled(Link)`
  background-color: var(--transparent-white-75);
  border: 2px solid var(--black);
  box-shadow: var(--box-shadow);
  padding: 16px 32px;
  border-radius: var(--card-radius);
  margin-bottom: 16px;
  display: block;
  width: 100%;
  color: var(--dark-green);
  text-decoration: unset;

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
