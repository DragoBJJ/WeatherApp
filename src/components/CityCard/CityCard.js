import styled, { css } from "styled-components";

export const CityCard = styled.div`
  margin-top: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 40px 8%;
  border-radius: 20px;
  background-color: rgba(250, 250, 250, 0.5);
  box-shadow: 10px 10px 10px 10px rgba(15, 15, 15, 0.5);

  @media only screen and (max-width: 600px) {
    padding: 40px 20%;
  }
`;

export const HeaderCard = styled.h2`
  font-size: 2em;
`;

export const SupCard = styled.sup`
  ${({ country }) =>
    country &&
    css`
      padding: 0.2em 0.6em;
      margin-left: 0.4em;
      border-radius: 30px;
      color: #fff;
      background: #ff8c00;
    `}
`;

export const CityTemp = styled.div`
  font-size: 5rem;
  font-weight: bold;
  margin-top: 10px;
  color: #1e2432;
  text-align: center;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardImage = styled.img`
  margin-top: 10px;
  width: 100px;
  height: 100px;
`;

export const CardSpan = styled.span`
  ${({ desc }) =>
    desc &&
    css`
      font-size: 1.4em;
      letter-spacing: 2px;
      font-weight: bold;
      color: #fff;
    `}
`;

export const CardSup = styled.sup``;
