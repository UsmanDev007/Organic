import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 220px;
  height: 79px;
  padding: 28px 39px 28px 39px;
  border-radius: 16px;
  background-color: #274c5b;
  color: #ffffff;
  font-family: Roboto;
  font-size: 20px;
  font-weight: 700;
  line-height: 23.44px;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

const Button = ({ text, img, onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      {text}
      {img && <img src={img} alt="" />}
    </StyledButton>
  );
};

export default Button;