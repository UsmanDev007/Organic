import { Box, Grid2, Typography } from '@mui/material'
import React from 'react'
import icon from '../Images/Icon.svg'
import Return from '../Images/Return.svg'
import Fresh from '../Images/Fresh.svg'
import Support from '../Images/Support.svg'
import Secure from '../Images/Secure.svg'
import ChooseGreen from '../Images/ChooseGreen.svg'
import '../App.css'
const WhyChoose = () => {
  return (
    <>
      <Box sx={{ backgroundColor: '#F9F8F9', minHeight: '1429px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Grid2 container justifyContent='center' sx={{border: '1px solid black'}}>
          <Grid2 size={{xs:12,lg:6}} sx={{ border: '4px solid green' }}>
            <Typography
              sx={{
                fontFamily: "Yellowtail",
                fontSize: "36px",
                fontWeight: 400,
                lineHeight: "49.06px",
                textAlign: "left",
                fontStyle: "italic",
                color: '#7EB693'
              }}>Why Choose Us</Typography>

            <Typography
              sx={{
                fontFamily: "Roboto",
                fontSize: "50px",
                fontWeight: 800,
                lineHeight: "58.59px",
                textAlign: "left",
                color: '#274C5B',
                width: '520px'
              }}
            >
              We do not buy from the
              open market & traders.</Typography>
            <Typography
              sx={{
                fontFamily: "Open Sans",
                fontSize: "18px",
                fontWeight: 400,
                lineHeight: "29.77px",
                textAlign: "left",
                width:'620px',
                color:'#525C60'

              }}

            >
              Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard  the 1500s, when an unknown
            </Typography>
            <div style={{ display: "flex", justifyContent: 'flex-start', alignItems: 'center', gap: '2px',
               width: "300px",
               padding: "20px",
               borderRadius: "49px",
               backgroundColor:"#ECECEC"

             }}>
              <img src={icon} alt="" />
              <Typography
              sx={{
              fontFamily: "Roboto",
              fontSize: "20px",
              fontWeight: 500,
              lineHeight: "23.44px",
              color:'#274C5B',

            }}
              >
                100% Natural Product
              </Typography>
            </div>
            <Typography
            sx={{fontFamily: "Open Sans",
            fontSize: "18px",
            fontWeight: 400,
            lineHeight: "29.77px",
            textAlign: "left",
            width:'400px',
            marginLeft:'5%',
            color:'#525C60'}}
            >
              Simply dummy text of the printing and typesetting industry Lorem Ipsum
            </Typography>
            <div style={{ display: "flex", justifyContent: 'flexStart', alignItems: 'center', gap: '2px',
              width: "300px",
              padding: "20px",
              borderRadius: "49px",
              backgroundColor:"#ECECEC"
             }}>
              <img src={icon} alt="" />
              <Typography
              sx={{
                fontFamily: "Roboto",
                fontSize: "20px",
                fontWeight: 500,
                lineHeight: "23.44px",
                color:'#274C5B'
              }}
              >
                Increases resistance
              </Typography>
            </div>
            <Typography
               sx={{fontFamily: "Open Sans",
                fontSize: "18px",
                fontWeight: 400,
                lineHeight: "29.77px",
                textAlign: "left",
                width:'400px',
                marginLeft:'5%',
                color:'#525C60'}}
            >
              Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing
            </Typography>
          </Grid2>
          <Grid2 size={{xs:12,lg:6}} sx={{border:'4px solid red',maxWidth:'678px',width:'100%'}}>
            <img src={ChooseGreen} alt="" />
          </Grid2>
        </Grid2>
        {/* CHILD 2 for cards */}
        <Grid2 container spacing={2} justifyContent="center" sx={{ width: '1118px', border: '1px solid black' }}>
          <Grid2 size={{xs:12,md:6,lg:3}}justifyItems="center" alignItems="center" alignContent="center" textAlign="center"
            sx={{
              width: "257px",
              height: "335px",
              borderRadius: "30px",
              backgroundColor: 'white'
            }}
          >
            <img src={Return} alt="" />
            <Typography>Return Policy</Typography>
            <Typography>Simply dummy text of the printintypesetting industry.</Typography>
          </Grid2>
          <Grid2 size={{xs:12,md:6,lg:3}}
            justifyItems="center" alignItems="center" alignContent="center" textAlign="center"
            sx={{
              width: "257px",
              height: "335px",
              borderRadius: "30px",
              backgroundColor: 'white'
            }}
          >

            <img src={Fresh} alt="" />
            <Typography>100% Fresh</Typography>
            <Typography>Simply dummy text of the printintypesetting industry.</Typography>
          </Grid2>
          <Grid2 size={{xs:12,md:6,lg:3}}
            justifyItems="center" alignItems="center" alignContent="center" textAlign="center"
            sx={{
              width: "257px",
              height: "335px",
              borderRadius: "30px",
              backgroundColor: 'white'

            }}
          >
            <img src={Support} alt="" />
            <Typography>Support 24/7</Typography>
            <Typography>Simply dummy text of the printintypesetting industry.</Typography>
          </Grid2>
          <Grid2 size={{xs:12,md:6,lg:3}}
            justifyItems="center" alignItems="center" alignContent="center" textAlign="center"
            sx={{
              width: "257px",
              height: "335px",
              borderRadius: "30px",
              backgroundColor: 'white'

            }}
          >
            <img src={Secure} alt="" />
            <Typography>Secured Payment</Typography>
            <Typography>Simply dummy text of the printintypesetting industry.</Typography>
          </Grid2>
        </Grid2>
      </Box>

    </>
  )
}
export default WhyChoose
