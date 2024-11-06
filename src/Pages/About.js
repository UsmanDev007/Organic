import React from 'react'
import { styled } from '@mui/system';
import { Box,Grid2,Typography } from '@mui/material';
import AboutBanner from '../Images/AboutBanner.svg'
import Tractor from '../Images/Tractor.svg'
import StyledButton from '../Components/Button'
import ChemicalPlant from '../Images/Chemical Plant.svg'
import Grapes from '../Images/Grapes.svg'
const HeroContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '41.67vh',
  backgroundImage: `url(${AboutBanner})`,
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
const About = () => {
  return (
    <>
      <HeroContainer sx={{ mt: 5 }}>
        <ContentBox>
        <Typography 
        sx={{textAlign:'center',width: '290px', height: '82px', color: '#274C5B',
          fontFamily: "Roboto",
          fontSize: "70px",
          fontWeight: 800,
          lineHeight: "82.03px",
          
          

         }}>
          About Us
        </Typography>
        </ContentBox>
      </HeroContainer>
      {/* About */}
      <Box sx={{ maxWidth: '1920px', mx: 'auto', p: 2, mt: '10%', }}>
        <Grid2 container spacing={2} sx={{ justifyContent: 'center', }}>
          {/* child1 */}
          <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 6 }}
            sx={{
              backgroundImage: `url(${Grapes})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '767px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              borderRadius: "30px",
              

            }}
          >
          </Grid2>
          {/* child2 */}
          <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 6 }} sx={{ marginTop: { md: '10%', }, }}>

            <Typography sx={{
              fontFamily: 'Yellowtail',
              fontSize: '36px',
              fontWeight: 400,
              lineHeight: '49.06px',
              textAlign: 'left',
              color: '#7EB693',
              fontStyle: 'italic',
            }}>
              About Us
            </Typography>

            <Typography sx={{
              fontFamily: 'Roboto',
              fontSize: '50px',
              fontWeight: 800,
              lineHeight: '58.59px',
              textAlign: 'left',
              color: '#274C5B',
              maxwidth: '702px',
              width: "100%"

            }}>
              We do Creative 
              Things for Success
            </Typography>

            <Typography sx={{
              fontFamily: 'Open Sans',
              fontSize: '18px',
              fontWeight: 400,
              lineHeight: '29.77px',
              textAlign: 'left',
              color: "#525C60",
              maxwidth: '640px',
              width: "100%"
            }}>
              Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
            </Typography>
            
            <Box sx={{ display: "flex", flexDirection: 'row',flexWrap:'wrap', gap: 3, mt: 3,mb:6 }}>
              {/* 1 */}
              <Box sx={{ display: 'flex', gap: 3, }}>
                <img src={Tractor} alt="" />
                <Box>
                  <Typography
                    sx={{
                      fontFamily: 'Roboto',
                      fontSize: '25px',
                      fontWeight: 800,
                      lineHeight: '29.3px',
                      textAlign: 'left',
                      color: '#274C5B',
                    }}
                  >Modern Agriculture
                  Equipment
                  </Typography>
                </Box>
              </Box>
              {/* 2 */}
              <Box sx={{ display: 'flex', gap: 3,}}>
                <img src={ChemicalPlant} alt="" />
                <Box>
                  <Typography
                    sx={{
                      fontFamily: 'Roboto',
                      fontSize: '25px',
                      fontWeight: 800,
                      lineHeight: '29.3px',
                      textAlign: 'left',
                      width:"210px",
                      color: '#274C5B',
                    }}
                  >No growth hormones are used</Typography>
                </Box>
              </Box>
            </Box> 
            <StyledButton text="Explore Now" />
          </Grid2>
        </Grid2>
      </Box>
      {/*  */}
    </>
  )
}

export default About
