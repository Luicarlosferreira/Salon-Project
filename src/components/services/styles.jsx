import styled from "styled-components";

export const MapsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  padding: 2em;
  gap: 2em;
  text-align: center;
  background-color: #f1f7ef;

  .markerClass {
    color: red;
    font-size: 2em;
    background-color: #ffff007f;
    padding: 1em;
    font-family: "Cinzel", serif;
    font-weight: 600;
    position: absolute;
    left: -75px;
    top: -10px;
  }

  @media (max-width: 500px) {
    h1 {
      font-family: "Cinzel", serif;
      font-weight: 600;
      font-size: 1.5em;
    }
  }
`;
