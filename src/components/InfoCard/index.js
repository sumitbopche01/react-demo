import React, { useState } from "react";
import {
  InfoContainer,
  Heading,
  InfoPop,
  InfoCurrencyWrapper,
  Input,
  CurrencyConversion,
  Heading2,
  Button,
  AmountP,
  ISpan,
} from "./InfoCardElements";

const InfoCard = ({ id, fullname, population, officialCurrencies }) => {
  let [convertedAmount, setConvertedAmount] = useState(0);
  let [amountInSek, setAmountInSek] = useState(0);

  const convert = (exchangeRate) => {
    console.log(exchangeRate, "exchange rate");
    setConvertedAmount(amountInSek * exchangeRate);
  };

  return (
    <>
      <InfoContainer key={id}>
        <Heading>{fullname}</Heading>
        <InfoPop>Population: {population}</InfoPop>
        {officialCurrencies.map((currency) => (
          <InfoCurrencyWrapper key={currency.id}>
            Currency Name: {currency.name} <br />
            Currency Code: {currency.code} <br />
            Symbol : {currency.symbol} <br />
            <br />
            <CurrencyConversion>
              <Heading2>Convert SEK to {currency.code}</Heading2>
              <ISpan>
                <Input
                  type="number"
                  placeholder="Enter Amount"
                  value={amountInSek}
                  onChange={(e) => setAmountInSek(e.target.value)}
                ></Input>
                SEK
              </ISpan>
              <ISpan>
                <AmountP>
                  {convertedAmount == 0
                    ? "Converted Amount in "
                    : convertedAmount}
                </AmountP>
                {currency.code}
              </ISpan>
              <Button
                onClick={(e) => convert(currency.exchangeRateWithBaseCurrency)}
              >
                Convert
              </Button>
            </CurrencyConversion>
          </InfoCurrencyWrapper>
        ))}
      </InfoContainer>
    </>
  );
};

export default InfoCard;
