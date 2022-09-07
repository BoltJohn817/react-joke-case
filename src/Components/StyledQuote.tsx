import styled from "styled-components";
import React from "react";

interface IQuoteProps extends React.HTMLAttributes<HTMLElement> {}

const StyledQuote = styled.div`
  display: flex;
  height: 150px;
  position: relative;
  margin: 40px;
  &:first-child {
    flex-diretion: row;
  }
  &:first-child .quote_mark::after {
    content: open-quote;
  }
  &:last-child {
    flex-direction: row-reverse;
  }
  &:last-child .quote_mark::after {
    content: close-quote;
  }
`;
const StyledQuoteMark = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  position: absolute;
  top: -50px;
  font-size: 300px;
  color: rgb(227, 227, 227);
`;
const StyledQuoteText = styled.div`
  margin: 0px 40px;
  position: absolute;
  top: 30px;
  font-size: 25px;
`;

const Quote: React.FC<IQuoteProps> = ({ children }) => {
  return (
    <StyledQuote>
      <StyledQuoteMark className="quote_mark" />
      <StyledQuoteText>{children}</StyledQuoteText>
    </StyledQuote>
  );
};

export default Quote;
