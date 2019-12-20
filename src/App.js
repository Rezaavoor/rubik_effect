import React, { useEffect } from "react";
import "./App.css";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import rubikVid from "./video/rubik.mp4";

function App() {
  const VideoContainer = styled.div`
    width: 100%;
    height: 250vh;
    background: pink;
  `;
  const Video = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `;

  let videoDom;

  useEffect(() => {
    videoDom = document.querySelector("video");
    console.log((videoDom.currentTime = 3.2));
  }, []);

  return (
    <div className='App' onScroll={e => console.log(window.scrollY)}>
      <VideoContainer>
        <Video src={rubikVid} />
      </VideoContainer>
    </div>
  );
}

export default App;
