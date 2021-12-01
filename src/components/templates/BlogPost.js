import React from "react";
import { MARKS } from "@contentful/rich-text-types";
import { graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import styled from "styled-components";

import Seo from "components/layout/SEO";
import { Layout } from "components/layout/Layout";

const options = {
  renderMark: {
    [MARKS.CODE]: (text) => <pre>{text}</pre>,
  },
};

export const data = graphql`
  query ($slug: String!) {
    post: contentfulBlog(slug: { eq: $slug }) {
      slug
      title
      richText: post {
        raw
      }
      date(formatString: "MM.DD.yyyy")
      tags
    }
  }
`;

const BlogPost = ({ data }) => {
  return (
    <Layout>
      <Seo title={data.post.title} />
      <Wrapper>
        <Content>
          <div className="title">
            <h1>{data.post.title}</h1>
            <small>{data.post.date}</small>
          </div>
          {renderRichText(data.post.richText, options)}
        </Content>
      </Wrapper>
    </Layout>
  );
};

export default BlogPost;

const Wrapper = styled.section`
  margin: 32px auto;
`;

const Content = styled.div`
  padding: 32px 64px;
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
    margin-bottom: 32px;
  }
`;
