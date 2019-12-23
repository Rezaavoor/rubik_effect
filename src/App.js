import React, { useLayoutEffect } from "react";
import "./App.css";
import styled from "@emotion/styled";
/** @jsx jsx */
import { css, jsx, keyframes } from "@emotion/core";
import rubikVid from "./video/rubik.mp4";

function App() {
  const VideoContainer = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    background: pink;
  `;
  const Video = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `;
  const TextContainer = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1;
  `;
  const fade = keyframes`
    0%{
      opacity:1;
    }
    50%{
      opacity:0;
    }
    100%{
      opacity:1;
    }
  `;

  useLayoutEffect(() => {
    const videoDom = document.querySelector("video");

    let prevFrame = 0;
    let currentFrame = 0;
    const showNewFrame = (curretPos, height) => {
      currentFrame = (curretPos * 5) / height;
    };

    //easing the transition from one frame to another
    const accelamount = 0.5;
    setInterval(() => {
      prevFrame += (currentFrame - prevFrame) * accelamount;
      videoDom.currentTime = prevFrame;
    }, 100);

    //eventlistener for scrolling
    window.addEventListener("scroll", () => {
      const body = document.body.getBoundingClientRect();
      const height = body.bottom - body.top - videoDom.offsetHeight;

      if (-body.top % 5 < 1) showNewFrame(-body.top, height);

      const rubik = document.querySelector(".rubik");
      rubik.style.opacity = 1 - -body.top / height;
    });
  });

  return (
    <div className='App'>
      <VideoContainer>
        <Video src={rubikVid} />
      </VideoContainer>
      <TextContainer>
        <div
          css={css`
            display: flex;
            color: white;
            justify-content: space-around;
            position: relative;
            top: 10px;
          `}
        >
          <h1>Meet</h1>
          <h1>The</h1>
          <h1
            css={css`
              animation: ${fade} 5s ease infinite;
            `}
          >
            Future...
          </h1>
        </div>
        <h1
          className='rubik'
          css={css`
            font-size: 5rem;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -90%);
            color: white;
          `}
        >
          Rubik
        </h1>
      </TextContainer>
    </div>
  );
}

export default App;
