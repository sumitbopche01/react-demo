import styled from "styled-components";

export const InfoContainer = styled.div`
  width: 80%;
  /* height: 400px; */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  margin-top: 6px;
  margin-left: 10%;
  margin-bottom: 20px;
  align-items: center;
  padding: 6px 16px;
  background-color: white;
  border-radius: 10px;
`;

export const Heading = styled.h2`
  margin-bottom: 8px;
  font-size: 34px;
  line-height: 1;
  font-weight: 600;
  color: "#010606";

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const InfoPop = styled.h4`
  color: #010606;
  font-size: 20px;
  font-weight: 600;
`;

export const InfoCurrencyWrapper = styled.div`
  background-color: black;
  color: white;
  height: 20%;
  border-radius: 10px;
  font-weight: 600;
  padding: 10px;
  align-items: center;
  margin-top: 5px;
  line-height: 25px;
`;

export const Input = styled.input`
  height: 30px;
  border-radius: 10px;
  margin-right: 5px;
  margin-left: 5px;
  width: 60%;
  padding: 16px;
  font-weight: 600;
`;

export const CurrencyConversion = styled.div`
  display: flex;
  background-color: #009999;
  padding: 16px;
  flex-direction: column;
  border-radius: 10px;
`;

export const Heading2 = styled.p`
  font-weight: 600;
`;

export const Button = styled.button`
  background-color: black;
  color: white;
  font-weight: 600;
  margin-top: 10px;
  padding: 10px;
  border-radius: 10px;
`;

export const AmountP = styled.p`
  width: 60%;
  height: 35px;
  color: black;
  padding: 8px;
  padding-left: 16px;
  border-radius: 10px;
  margin-right: 5px;
  margin-left: 5px;
  font-weight: 600;
  background-color: white;
`;

export const ISpan = styled.div`
  display: flex;
  padding: 5px;
`;
