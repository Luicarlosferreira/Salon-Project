import styled from "styled-components";

export const ServiceContainer = styled.div`
  padding: 15px;
  background-image: url("/images/bg.jpg");
  background-size: cover;
  background-position: center;
  height: 100vh;
  gap: 2em;
  display: flex;
  flex-flow: column;

  .topBack {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
  }
  a {
    text-decoration: none;
    color: #668360;
    padding: 10px;
    background-color: #d8f3d3;
    border-radius: 4px;
    transition: all 0.2s linear;
  }
  a:hover {
    background-color: #c1f7b7;
  }

  section {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #d8f3d358;
    padding: 2em 0;
  }
  section div {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column wrap;
    gap: 25px;
    max-width: 90%;
  }
  section div h1 {
    font-family: "Qwitcher Grypen", cursive;
    font-weight: 400;
    font-size: 5em;
    letter-spacing: 2px;
  }
  section div p {
    font-family: "Cinzel", serif;
    font-weight: 400;
  }
  section div span {
    color: black;
    font-weight: 600;
    letter-spacing: 2px;
    background-color: yellow;
    padding: 5px;
    border-radius: 5px;
  }

  @media (max-width: 456px) {
    height: 100vh;
    section div {
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-flow: column wrap;
      gap: 25px;
      max-width: 90%;
    }
    section div h1 {
      font-family: "Qwitcher Grypen", cursive;
      font-weight: 400;
      font-size: 4em;
      letter-spacing: 2px;
    }
    section div p {
      font-family: "Cinzel", serif;
      font-weight: 400;
      font-size: 14px;
    }
  }
  @media (max-width: 396px) {
    height: 100vh;
    section div {
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-flow: column wrap;
      gap: 25px;
      max-width: 90%;
    }
    section div h1 {
      font-family: "Qwitcher Grypen", cursive;
      font-weight: 400;
      font-size: 3em;
      letter-spacing: 2px;
    }
    section div p {
      font-family: "Cinzel", serif;
      font-weight: 400;
      font-size: 14px;
    }
  }
`;
