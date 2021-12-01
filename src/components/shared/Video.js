import React from "react";
import styled from "styled-components";

const Video = ({ videoId, videoTitle, ...props }) => (
  <Wrapper>
    <iframe
      className="iframe"
      src={`https://www.youtube.com/embed/${videoId}`}
      title={videoTitle}
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
      modestbranding={1}
    />
  </Wrapper>
);
export default Video;

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;
  border-radius: 12px;
  border: 2px solid var(--black);
  box-shadow: var(--box-shadow);

  .iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`;
