import styled from "styled-components";
import snowTree from "../../assets/snowTree.jpg";

export const Wrapper = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${snowTree}) no-repeat;
  background-size: cover;
  background-position: bottom;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const InputSearch = styled.input`
  margin-top: 10vh;
  outline: none;
  padding: 20px 7%;
  border-radius: 20px;
  border: none;
  background: rgba(250, 250, 250, 0.7);
  box-shadow: 5px 5px 5px 5px rgba(5, 5, 5, 0.4);
  opacity: 0.8;
  text-align: center;
  font-size: 1.5rem;

  ::placeholder {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 600px) {
    .search {
      padding: 20px 15%;
    }
  }
`;
