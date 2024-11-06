import React from 'react';
import { Box, Typography, Button, Container, Grid2 } from '@mui/material';
import { styled } from '@mui/system';
import Banner from '../Images/Group17.svg';
import Arrow from '../Images/Aerrow.svg'
import Natural from '../Images/Natural.svg'
import Offer from '../Images/Offer.svg'
import About from '../Images/About.svg'
import Food from '../Images/FoodIcon.svg'
import StyledButton from '../Components/Button'
import Quality from '../Images/QualityIcon.svg'
import Lady from '../Images/Lady.svg'
import VegCards from '../Components/VegCards'
import Testmonial from '../Images/TestmonialBackground.svg'
import Star from '../Images/Star.svg'
import YellowBottle from '../Images/YellowBottle.svg'
import Leaf from '../Images/Leaf.svg'
import Cookies from '../Images/Cookies.svg'
const HeroContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  minHeight: '100vh',
  backgroundImage: `url(${Banner})`,
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
//  Object
const array = [
  {
    image: YellowBottle,
    text: 'Organic Juice',
  },
  {
    image: Leaf,
    text: 'Organice Food',
  },
  {
    image: Cookies,
    text: 'Nuts Cookies',
  }
]

const HeroSection = () => {
  return (
    <>

      <HeroContainer sx={{ mt: 5 }}>
        <Container>
          <ContentBox>
            <Typography
              sx={{
                fontFamily: "Yellowtail",
                fontSize: "36px",
                fontWeight: 400,
                lineHeight: "49.06px",
                fontStyle: 'italic',
                color: '#68A47F'
              }}
            >
              100% Natural Food
            </Typography>
            <Typography sx={{
              fontFamily: "Roboto",
              fontSize: "70px",
              fontWeight: 800,
              lineHeight: "82.03px",
              color: '#274C5B'
            }}>
              Choose the best
              healthier way
              of life
            </Typography>

            <Button color='#274C5B' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '6px', backgroundColor: "#EFD372", padding: "28px,39px,28px,39px", borderRadius: "16px", width: '200px', height: '79px' }}>
              Explore Now
              <img src={Arrow} alt="" />
            </Button>
          </ContentBox>
        </Container>
      </HeroContainer>
      {/* Cards */}
      <Box sx={{ maxWidth: '1200px', mx: 'auto', p: 2, mt: '10%' }}>


        <Grid2 container spacing={4} sx={{ justifyContent: 'center' }}>
          <Grid2 size={{ xs: 12, sm: 6, md: 6, lg: 6 }} sx={{
            backgroundImage: `url(${Offer})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '367px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            borderRadius: "30px"

          }}>
            <Typography sx={{
              fontFamily: "Yellowtail",
              fontSize: "36px",
              fontWeight: 400,
              lineHeight: "49.06px",
              marginLeft: '7%',
              color: "#FFFFFF",
              fontStyle: 'italic'
            }}>
              Natural!!
            </Typography>
            <Typography sx={{
              fontFamily: "Roboto",
              fontSize: "40px",
              fontWeight: 800,
              lineHeight: "46.88px",
              marginLeft: '7%',
              color: "#FFFFFF",
              width: "277.63px",
              height: '94px',

            }}>
              Get Garden Fresh Fruits
            </Typography>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 6, lg: 6 }}
            sx={{
              backgroundImage: `url(${Natural})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '367px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              borderRadius: "30px"
            }}
          >
            <Typography sx={{
              fontFamily: "Yellowtail",
              fontSize: "36px",
              fontWeight: 400,
              lineHeight: "49.06px",
              textAlign: "left",
              color: "#7EB693",
              marginLeft: '7%',
              fontStyle: 'italic'
            }}>
              Offer!!
            </Typography>
            <Typography sx={{
              fontFamily: "Roboto",
              fontSize: "40px",
              fontWeight: 800,
              lineHeight: "46.88px",
              textAlign: "left",
              marginLeft: '7%',
              color: "#274C5B",
              width: "250px",
              height: '94px',
            }}>
              Get 10% off
              on Vegetables
            </Typography>
          </Grid2>
        </Grid2>
      </Box>
      {/*About us  */}
      <Box sx={{ maxWidth: '1920px', mx: 'auto', p: 2, mt: '10%', backgroundColor: '#F9F8F8' }}>
        <Grid2 container spacing={4} sx={{ justifyContent: 'center' }}>
          {/* child1 */}
          <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 6 }}
            sx={{
              backgroundImage: `url(${About})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '867px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              borderRadius: "30px"
            }}
          >
          </Grid2>
          {/* child2 */}
          <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 6 }} sx={{ marginTop: { md: '10%' } }}>

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
              We Believe in Working
              Accredited Farmers
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
              Simply dummy text of the printing and typesetting industry. Lorem had ceased to
              been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
            </Typography>
            <Box sx={{ display: "flex", flexDirection: 'column', gap: 3, mt: 3 }}>
              {/* 1 */}
              <Box sx={{ display: 'flex', gap: 3 }}>
                <img src={Food} alt="" />
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
                  >Organic Foods Only</Typography>
                  <Typography
                    sx={{
                      fontFamily: 'Open Sans',
                      fontSize: '18px',
                      fontWeight: 400,
                      lineHeight: '29.77px',
                      textAlign: 'left',
                      maxWidth: '444px',
                      width: '100%',
                      color: '#525C60'
                    }}
                  >
                    Simply dummy text of the printing and typesetting industry. Lorem Ipsum</Typography>
                </Box>
              </Box>
              {/* 2 */}
              <Box sx={{ display: 'flex', gap: 3, mb: 6 }}>
                <img src={Quality} alt="" />
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
                  >Quality Standards</Typography>
                  <Typography
                    sx={{
                      fontFamily: 'Open Sans',
                      fontSize: '18px',
                      fontWeight: 400,
                      lineHeight: '29.77px',
                      textAlign: 'left',
                      maxWidth: '444px',
                      width: '100%',
                      color: '#525C60'
                    }}
                  >Simply dummy text of the printing and typesetting industry. Lorem Ipsum</Typography>

                </Box>

              </Box>

            </Box>
            <StyledButton text="Shop Now" />
          </Grid2>

        </Grid2>
      </Box>
      {/* Products Cards */}
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', mt: '10%' }}>
        <Typography
          sx={{
            fontFamily: "Yellowtail",
            fontSize: "36px",
            fontWeight: 400,
            lineHeight: "49.06px",
            fontStyle: 'italic',
            color: "#7EB693"
          }}>
          Categories
        </Typography>
        <Typography
          sx={{
            fontFamily: "Roboto",
            fontSize: "50px",
            fontWeight: 800,
            lineHeight: "58.59px",
            textAlign: "center",
            color: "#274C5B"
          }}>
          Our Products
        </Typography>
      </Box>
      <VegCards />
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: '5%' }}>
        <StyledButton text="Load More" />
      </Box>
      {/* Testimonial BACKGROUND */}
      <Box sx={{
        backgroundImage: `url(${Testmonial})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '867px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}>
        <Grid2 container spacing={16} sx={{ justifyContent: 'center', mt: { xs: 80, sm: 0 } }}>
          {/* Child1 */}
          <Grid2>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
              <Typography
                sx={{
                  fontFamily: 'Yellowtail',
                  fontSize: '36px',
                  fontWeight: 400,
                  lineHeight: '49.06px',
                  fontStyle: 'italic',
                  color: '#7EB693'

                }}
              >Testimonial</Typography>
              <Typography
                sx={{
                  fontFamily: 'Roboto',
                  fontSize: '50px',
                  fontWeight: 800,
                  lineHeight: '58.59px',
                  textAlign: 'center',
                  color: '#274C5B'
                }}
              >What Our Customer Saying?</Typography>
              <img src={Lady} alt="" />
              <img src={Star} alt="" />
              <Typography sx={{
                maxWidth: '750px', textAlign: 'center',
                color: '#525C60',
                fontFamily: 'Open Sans',
                fontSize: '18px',
                fontWeight: 400,
                lineHeight: '29.77px',
                width: '100%'

              }}>
                Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Roboto',
                  fontSize: '25px',
                  fontWeight: 600,
                  lineHeight: '29.3px',
                  color: '#274C5B'
                }}
              >Sara Taylor</Typography>
              <Typography
                sx={{
                  fontFamily: 'Open Sans',
                  fontSize: '15px',
                  fontWeight: 400,
                  lineHeight: '24.81px',
                  color: '#525C60'
                }}
              >Consumer</Typography>
            </Box>
          </Grid2>
          {/* Child2 */}
          <Grid2>
            {/* Parent Box */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: 5 }}>
              <Box
                sx={{
                  width: 150,
                  height: 150,
                  backgroundColor: '#F1F1F1',
                  borderRadius: '50%',
                  border: '5px solid #7EB693',
                  display: 'flex',

                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'white',
                  textAlign: 'center',
                }}
              >
                <Typography variant="body1"
                  sx={{
                    fontFamily: 'Roboto',
                    fontSize: '45px',
                    fontWeight: 800,
                    lineHeight: '58.59px',
                    textAlign: 'center',
                    color: '#274C5B'
                  }}>

                  100%</Typography>
                <Typography variant="body1"
                  sx={{
                    fontFamily: 'Open Sans',
                    fontSize: '15px',
                    fontWeight: 600,
                    lineHeight: '29.77px',
                    textAlign: 'center',
                    color: '#274C5B',
                  }}
                >Organic</Typography>
              </Box>
              <Box
                sx={{
                  width: 150,
                  height: 150,
                  backgroundColor: '#F1F1F1',
                  borderRadius: '50%',
                  display: 'flex',
                  border: '5px solid #7EB693',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'white',

                  textAlign: 'center',
                }}
              >
                <Typography variant="body1"
                  sx={{
                    fontFamily: 'Roboto',
                    fontSize: '45px',
                    fontWeight: 800,
                    lineHeight: '58.59px',
                    textAlign: 'center',
                    color: '#274C5B'
                  }}>285</Typography>
                <Typography variant="body1"
                  sx={{
                    fontFamily: 'Open Sans',
                    fontSize: '15px',
                    fontWeight: 600,
                    lineHeight: '29.77px',
                    textAlign: 'center',
                    color: '#274C5B',
                  }}
                >Active Product</Typography>
              </Box>
              <Box
                sx={{
                  width: 150,
                  height: 150,
                  backgroundColor: '#F1F1F1',
                  borderRadius: '50%',
                  display: 'flex',
                  border: '5px solid #7EB693',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'white',

                  textAlign: 'center',
                }}
              >
                <Typography variant="body1"
                  sx={{
                    fontFamily: 'Roboto',
                    fontSize: '45px',
                    fontWeight: 800,
                    lineHeight: '58.59px',
                    textAlign: 'center',
                    color: '#274C5B'
                  }}>350+</Typography>
                <Typography variant="body1"
                  sx={{
                    fontFamily: 'Open Sans',
                    fontSize: '15px',
                    fontWeight: 600,
                    lineHeight: '29.77px',
                    textAlign: 'center',
                    color: '#274C5B',
                  }}
                >Organic Orchads</Typography>
              </Box>
              <Box
                sx={{
                  width: 150,
                  height: 150,
                  backgroundColor: '#F1F1F1',
                  borderRadius: '50%',
                  display: 'flex',
                  border: '5px solid #7EB693',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'white',

                  textAlign: 'center',
                }}
              >
                <Typography variant="body1"
                  sx={{
                    fontFamily: 'Roboto',
                    fontSize: '45px',
                    fontWeight: 800,
                    lineHeight: '58.59px',
                    textAlign: 'center',
                    color: '#274C5B'
                  }}>25+</Typography>
                <Typography variant="body1"
                  sx={{
                    fontFamily: 'Open Sans',
                    fontSize: '15px',
                    fontWeight: 600,
                    lineHeight: '29.77px',
                    textAlign: 'center',
                    color: '#274C5B',
                  }}
                >Years of Farming</Typography>
              </Box>
            </Box>
          </Grid2>
        </Grid2>
      </Box>
      {/************************************************************************************************************/}
      <Grid2
        container spacing={3} justifyContent="center" alignItems="center"
        sx={{
          backgroundColor: "#F1F8F4",
          height: '600px',
          mt: { xs: 80, sm: 10, md: 5 }
        }}
      >
        {array.map((item, index) => (
          <Grid2
            key={index}
            size={{ xs: 12, md: 4 }}
            sx={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '367px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',

            }}
          >
            <Button
              variant="contained"
              sx={{
                color: '#274C5B',
                backgroundColor: "#FFFFFF",
                borderRadius: "10px",
                padding: '15px',
                fontFamily: "Roboto",
                fontSize: "25px",
                fontWeight: 500,
                lineHeight: "29.3px",
                textAlign: "left",
                textTransform:'capitalize'

              }}
            >
              {item.text}
            </Button>
          </Grid2>
        ))}
      </Grid2>
       
      
    </>
  );
};

export default HeroSection;
