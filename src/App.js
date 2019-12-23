import React, { useEffect, useLayoutEffect } from "react";
import "./App.css";
import styled from "@emotion/styled";
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
    });
  });

  return (
    <div className='App'>
      <VideoContainer>
        <Video src={rubikVid} />
      </VideoContainer>
    </div>
  );
}

export default App;
