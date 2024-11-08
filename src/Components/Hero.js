import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

const HeroContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'image',
})(({ theme, image }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '41.67vh',
  backgroundImage: `url(${image})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
    backgroundPosition: 'center',
  },
}));

const ContentBox = styled(Box)(({ theme }) => ({
  maxWidth: '600px',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
  },
}));

const Hero = ({ image, text }) => {
  return (
    <HeroContainer image={image} sx={{ mt: 5 }}>
      <ContentBox>
        <Typography
          sx={{
            textAlign: 'center',
            width: '290px',
            height: '82px',
            color: '#274C5B',
            fontFamily: 'Roboto',
            fontSize: '70px',
            fontWeight: 800,
            lineHeight: '82.03px',
          }}
        >
          {text}
        </Typography>
      </ContentBox>
    </HeroContainer>
  );
};

export default Hero;
