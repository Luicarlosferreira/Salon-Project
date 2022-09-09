import styled from "styled-components";

export const ContactContainer = styled.div`
  padding: 15px;
  background-image: url("public/images/bg.jpg");
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
    flex-flow: column wrap;
    gap: 2em;
  }

  section h1 {
    font-family: "Qwitcher Grypen", cursive;
    font-weight: 400;
    font-size: 5em;
    letter-spacing: 2px;
  }
  .socialMediaContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 40px;
  }
  .socialMedia {
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column wrap;
    gap: 5px;
  }
  .socialMedia span {
    color: black;
  }
  .socialMedia svg {
    width: 30px;
    height: 30px;
    color: black;
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
