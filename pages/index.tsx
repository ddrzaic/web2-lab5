/* eslint-disable @next/next/no-img-element */
import Webcam from "react-webcam";
import * as React from "react";
import styled, { css } from "styled-components";

export default function Home() {
  return (
    <Div>
      <Webcam />
      <img
        src="/assets/photos/chair.jpg"
        width={379}
        height={590}
        alt={"Chair"}
      />
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  width: 100vw;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
