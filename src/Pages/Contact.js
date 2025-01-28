import React from 'react'
import Hero from '../Components/Hero'
import HeroBg from '../Images/HeroBg.svg'
import styled from 'styled-components';
import { Box,TextField, Container,  Grid, Button } from '@mui/material';
const Contact = () => {
  const LableStyle=styled.p`
    font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 21.09px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color:#274C5B;
  `;
  return (
    <>
      <Hero text="Contact Us" image={HeroBg}/>
      <Container maxWidth="lg" sx={{mt:5}}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="80vh"
      >
        <Box component="form" noValidate autoComplete="off" sx={{ width: '100%' }}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6} >
              <LableStyle >Full Name*</LableStyle>
              <TextField fullWidth   sx={{
                 borderRadius: '16px',
                 border: '1px solid #7EB693',
                 color: '#7EB693',
                 outline: 'none',
                 '& .MuiInputBase-root': {
                   border: 'none',
                 },
                 '& .MuiOutlinedInput-notchedOutline': {
                   border: 'none',
                 },
              }} />
            </Grid>
            <Grid item xs={12} md={6}>
              <LableStyle>Your Email*</LableStyle>
              <TextField fullWidth sx={{
                 borderRadius: '16px',
                 border: '1px solid #7EB693',
                 color: '#7EB693',
                 outline: 'none',
                 '& .MuiInputBase-root': {
                   border: 'none',
                 },
                 '& .MuiOutlinedInput-notchedOutline': {
                   border: 'none',
                 },
              }} />
            </Grid>
            <Grid item xs={12} md={6}>
              <LableStyle>Company*</LableStyle>
              <TextField fullWidth sx={{
                 borderRadius: '16px',
                 border: '1px solid #7EB693',
                 color: '#7EB693',
                 outline: 'none',
                 '& .MuiInputBase-root': {
                   border: 'none',
                 },
                 '& .MuiOutlinedInput-notchedOutline': {
                   border: 'none',
                 },
              }}  />
            </Grid>
            <Grid item xs={12} md={6}>
              <LableStyle>Subject*</LableStyle>
              <TextField fullWidth sx={{
                 borderRadius: '16px',
                 border: '1px solid #7EB693',
                 color: '#7EB693',
                 outline: 'none',
                 '& .MuiInputBase-root': {
                   border: 'none',
                 },
                 '& .MuiOutlinedInput-notchedOutline': {
                   border: 'none',
                 },
              }} />
            </Grid>
            <Grid item xs={12}>
              <LableStyle>Message*</LableStyle>
              <TextField
                fullWidth
                sx={{
                  borderRadius: '16px',
                  border: '1px solid #7EB693',
                  color: '#7EB693',
                  outline: 'none',
                  '& .MuiInputBase-root': {
                    border: 'none',
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    border: 'none',
                  },
               }}
                multiline
                rows={4}  // Adjust rows as needed
                placeholder="hello there,i would like to talk about how to..."
              />

            </Grid>
            <Grid item xs={12} display="flex" justifyContent="flex-start" spacing={2}>
              <Button variant="contained" sx={{
               
                padding: "18px 29px",
                borderRadius: "10px",
                backgroundColor:"#274C5B",
                textTransform:'capitalize',
                fontFamily: "Roboto",
                fontWeight:700,
                fontSize:'20px',
                lineHeight:'23.44px',

              }}>
                Send Message
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
       
      
      
    


    </>
  )
}

export default Contact