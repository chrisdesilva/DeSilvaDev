import React from "react";
import styled from "styled-components";

const Video = ({ video }) => (
  <Wrapper>
    <a
      rel="noopener noreferrer"
      target="_blank"
      href={`https://youtu.be/${video.videoId}`}
    >
      <img src={video.thumbnail.url} alt={video.title} />
    </a>
  </Wrapper>
);
export default Video;

const Wrapper = styled.article`
  overflow: hidden;
  border-radius: var(--card-radius);
  border: 2px solid var(--black);
  box-shadow: var(--box-shadow);

  img {
    border-radius: var(--card-radius);
    aspect-ratio: 16/9;
    width: 100%;
    object-fit: cover;
    transform: scale(1) rotate(0deg);
    transition: transform 150ms;

    :hover {
      transform: scale(1.05) rotate(2deg);
    }
  }
`;
