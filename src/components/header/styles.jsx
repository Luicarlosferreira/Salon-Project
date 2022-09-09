import styled from "styled-components";

export const HeaderContainer = styled.header`
  /* width: 100%; */
  height: 100vh;
  background-image: url("/public/images/bg.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: column;
  padding: 2em 0;
`;

export const HeaderContent = styled.div`
  /* background-color: #adc2a9; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-family: "Cinzel", serif;
  font-weight: 600;
  color: #adc2a9;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
  ul a {
    cursor: pointer;
    padding: 10px;
    transition: all 0.2s linear;
    letter-spacing: 1px;
    text-decoration: none;
    color: #adc2a9;
  }
  ul a:hover {
    color: #7d9c77;
  }

  #mobileMenu {
    font-size: 2em;
    color: #adc2a9;
    cursor: pointer;
    transition: all 0.2s linear;
    display: none;
  }
  #mobileMenu:hover {
    color: #7d9c77;
  }

  @media (max-width: 900px) {
    justify-content: space-between;
    padding: 0 30px;

    #mobileMenu {
      display: block;
      z-index: 1000;
    }
    .firstUl {
      display: none;
    }
    .ulMobileOpen {
      display: flex;
      position: fixed;
      background-color: #e7f5e4ae;
      height: 100%;
      width: 100%;
      align-items: center;
      justify-content: center;
      flex-flow: column wrap;
      gap: 20px;
      opacity: 1;
    }

    ul {
      display: flex;
      position: fixed;
      right: 0;
      top: 0;
      height: 100%;
      width: 0;
      align-items: center;
      justify-content: center;
      flex-flow: column wrap;
      gap: 0;
      opacity: 0;
      transition: all 0.2s linear;
    }
    ul a {
      cursor: pointer;
      padding: 10px;
      transition: all 0.2s linear;
      letter-spacing: 1px;
      text-decoration: none;
      color: #7d9c77;
    }
  }
`;

export const HeaderInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  gap: 10px;
  padding: 40px 0;

  h1 {
    font-family: "Qwitcher Grypen", cursive;
    font-weight: 400;
    color: white;
    letter-spacing: 4px;
    font-size: 10em;
  }

  p {
    font-family: "Cinzel", serif;
    font-weight: 600;
    color: white;
    letter-spacing: 2px;
  }

  button {
    padding: 10px 40px;
    outline: none;
    border: none;
    border-radius: 4px;

    background-color: #7d9c77;
    font-family: "Cinzel", serif;
    font-weight: 600;
    color: #faf3f3;
    letter-spacing: 2px;
    cursor: pointer;
    transition: all 0.2s linear;
  }
  button:hover {
    background-color: #aab9a6;
  }

  @media (max-width: 750px) {
    text-align: center;

    h1 {
      font-family: "Qwitcher Grypen", cursive;
      font-weight: 400;
      color: white;
      letter-spacing: 4px;
      font-size: 8em;
    }

    p {
      font-family: "Cinzel", serif;
      font-weight: 600;
      color: white;
      letter-spacing: 2px;
    }
  }

  @media (max-width: 520px) {
    padding: 0 12px;
    h1 {
      font-family: "Qwitcher Grypen", cursive;
      font-weight: 400;
      color: white;
      letter-spacing: 4px;
      font-size: 5em;
    }

    p {
      font-family: "Cinzel", serif;
      font-weight: 600;
      color: white;
      letter-spacing: 2px;
      font-size: 15px;
    }
  }
`;
