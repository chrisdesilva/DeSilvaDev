import React from "react";
import { MARKS } from "@contentful/rich-text-types";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import styled from "styled-components";

import Seo from "components/layout/SEO";
import { Layout } from "components/layout/Layout";

const options = {
  renderMark: {
    [MARKS.CODE]: (text) => <pre>{text}</pre>,
  },
  renderNode: {
    "embedded-asset-block": (node) => {
      const { gatsbyImageData } = node.data.target;
      if (!gatsbyImageData) {
        // asset is not an image
        return null;
      }
      console.log(node.data.target.title);
      return (
        <GatsbyImage image={gatsbyImageData} alt={node.data.target.title} />
      );
    },
  },
};

export const data = graphql`
  query ($slug: String!) {
    post: contentfulBlog(slug: { eq: $slug }) {
      slug
      title
      richText: post {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            title
            gatsbyImageData(width: 600, placeholder: BLURRED, cornerRadius: 8)
          }
        }
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
  padding: 32px;
  margin: 0 auto;
  max-width: 900px;
  background: var(--white);
  border-radius: 8px;
  box-shadow: var(--box-shadow);

  .gatsby-image-wrapper {
    display: block;
    max-width: 600px;
    margin: 16px auto;
  }

  .title {
    margin-bottom: 32px;
  }

  a {
    position: relative;
    text-decoration: none;
    color: var(--black);

    :hover::after {
      transform: rotate(2deg) scale(1.05);
    }
    ::after {
      transition: transform 300ms;
      position: absolute;
      height: 4px;
      bottom: -4px;
      left: 5%;
      content: "";
      background-color: var(--light-green);
      width: 90%;
      transform: rotate(0deg) scale(1);
    }
  }

  p {
    font-size: 1.25rem;
    margin-bottom: 32px;
  }

  img {
    margin: 0 auto;
  }
`;
