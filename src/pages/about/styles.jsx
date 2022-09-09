import styled from "styled-components";

export const AboutContainer = styled.div`
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
    background-color: #59b34957;
    padding: 2em 0;
    color: white;
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

  .imagePerfil {
    max-width: 200px;
    border-radius: 25px;
  }

  @media (max-width: 456px) {
    height: 100%;
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
      letter-spacing: 1px;
    }
    section div p {
      font-family: "Cinzel", serif;
      font-weight: 400;
      font-size: 14px;
    }
  }
  @media (max-width: 396px) {
    height: 100%;
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

  @media (max-width: 333px) {
    .topBack {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 10px;
    }
    .topBack img {
      width: 50px;
    }
    gap: 10px;
    height: 100%;
    section div {
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-flow: column wrap;
      gap: 25px;
      max-width: 100%;
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
    section div img {
      width: 100px;
    }
  }

  @media (max-width: 323px) {
    .topBack {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 10px;
    }
    .topBack img {
      width: 50px;
    }
    gap: 10px;
    height: 100%;
    section div {
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-flow: column wrap;
      gap: 25px;
      max-width: 100%;
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
    section div img {
      width: 100px;
    }
  }
`;
