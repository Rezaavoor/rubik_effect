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

    const showNewFrame = (curretPos, height) => {
      let prevFrame = videoDom.currentTime;
      const currentFrame = (curretPos * 5) / height;
      console.log(prevFrame, currentFrame);
      videoDom.currentTime = currentFrame;
    };

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
