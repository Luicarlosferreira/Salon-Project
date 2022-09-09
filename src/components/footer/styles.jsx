import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px;
  font-family: "Cinzel", serif;
  font-weight: 400;
  text-align: center;
  flex-flow: wrap;

  span {
    color: #adc2a9;
  }

  @media (max-width: 486px) {
    p {
      font-size: 13px;
    }
    span {
      font-size: 13px;
    }
  }
  @media (max-width: 356px) {
    p {
      font-size: 11px;
    }
    span {
      font-size: 11px;
    }
  }
`;
