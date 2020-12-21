import styled from "styled-components";

export const SearchBarContainer = styled.div`
  background: black;
  height: 160px;
  display: flex;
`;

export const Input = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: black;
  border-radius: 4px;
  cursor: pointer;
  font-size: 25px;
  box-sizing: border-box;
  align-items: center;
  margin-left: 10%;
  margin-top: 80px;
  margin-right: 10px;
  width: 50%;
  height: 60px;

  :hover {
    border-color: white;
    box-shadow: 0 0 15px 0 white;
  }
`;

export const Icon = styled.p`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #01bf71;
`;
