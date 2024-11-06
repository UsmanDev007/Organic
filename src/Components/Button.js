import React from 'react'
import styled from 'styled-components'
import Arrow from '../Images/Aerrow.svg'
const StyledButton=styled.button`
width: 220px;
height: 79px;
padding: 28px 39px 28px 39px;
border-radius: 16px;
background-color: #274C5B;
color: #FFFFFF;
font-family: Roboto;
font-size: 20px;
font-weight: 700;
line-height: 23.44px;
display:flex;
justify-content: center;
align-items: center;
gap: 4px;
`
const Button = ({text}) => {
  return (
    
       <StyledButton>
          {text}
          <img src={Arrow} alt=""  />
       </StyledButton>
       
    
  )
}

export default Button
