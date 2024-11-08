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
      <Box sx={{ backgroundColor: '#F9F8F9', width: '100%', minHeight: { lg: '1429px' }, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Grid2 container justifyContent="center">
          <Grid2 xs={12} md={6}>
            <Typography
              sx={{
                fontFamily: "Yellowtail",
                fontSize: "36px",
                fontWeight: 400,
                lineHeight: "49.06px",
                fontStyle: "italic",
                color: '#7EB693'
              }}
            >
              Why Choose Us
            </Typography>

            <Typography
              sx={{
                fontFamily: "Roboto",
                fontSize: "50px",
                fontWeight: 800,
                lineHeight: "58.59px",
                textAlign: "left",
                color: '#274C5B',
                maxWidth: '520px',
                width: '100%',
              }}
            >
              We do not buy from the open market & traders.
            </Typography>

            <Typography
              sx={{
                fontFamily: "Open Sans",
                fontSize: "18px",
                fontWeight: 400,
                lineHeight: "29.77px",
                maxWidth: '620px',
                width: '100%',
                color: '#525C60'
              }}
            >
              Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard the 1500s, when an unknown
            </Typography>

            {/* First Info Box */}
            <div style={{ display: "flex", alignItems: 'center', gap: '2px', width: "300px", padding: "20px", borderRadius: "49px", backgroundColor: "#ECECEC" }}>
              <img src={icon} alt="" style={{ width: '24px', height: '24px' }} />
              <Typography
                sx={{
                  fontFamily: "Roboto",
                  fontSize: "20px",
                  fontWeight: 500,
                  lineHeight: "23.44px",
                  color: '#274C5B',
                }}
              >
                100% Natural Product
              </Typography>
            </div>

            <Typography sx={{ fontFamily: "Open Sans", fontSize: "18px", fontWeight: 400, lineHeight: "29.77px", maxWidth: '400px', width: "100%", marginLeft: '5%', color: '#525C60' }}>
              Simply dummy text of the printing and typesetting industry Lorem Ipsum
            </Typography>

            {/* Second Info Box */}
            <div style={{ display: "flex", alignItems: 'center', gap: '2px', width: "300px", padding: "20px", borderRadius: "49px", backgroundColor: "#ECECEC" }}>
              <img src={icon} alt="" style={{ width: '24px', height: '24px' }} />
              <Typography
                sx={{
                  fontFamily: "Roboto",
                  fontSize: "20px",
                  fontWeight: 500,
                  lineHeight: "23.44px",
                  color: '#274C5B'
                }}
              >
                Increases resistance
              </Typography>
            </div>

            <Typography sx={{ fontFamily: "Open Sans", fontSize: "18px", fontWeight: 400, lineHeight: "29.77px", maxWidth: '400px', width: "100%", marginLeft: '5%', color: '#525C60' }}>
              Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing
            </Typography>
          </Grid2>

          {/* Responsive Image Section */}
          <Grid2 xs={12} md={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginLeft: { xs: "3%", sm: "0%" } }}>
            <img
              src={ChooseGreen}
              alt=""
              style={{
                width: '100%',
                height: 'auto',
                maxWidth: '100%',
                objectFit: 'cover',
              }}
            />
          </Grid2>
        </Grid2>

        {/* CHILD 2 for cards */}
        <Grid2 container spacing={2} justifyContent="center" sx={{ maxWidth: { lg: '1118px', marginTop: "5%" } }}>
          <Grid2 size={{ xs: 4, md: 6, lg: 3 }} justifyItems="center" alignItems="center" alignContent="center" textAlign="center"
            sx={{
              width: "257px",
              height: "335px",
              borderRadius: "30px",
              backgroundColor: 'white'
            }}
          >
            <img src={Return} alt="" />
            <Typography sx={{

              fontFamily: 'Roboto',
              fontSize: '25px',
              fontWeight: 800,
              lineHeight: '29.3px',
              color: '#274C5B'

            }}>Return Policy</Typography>
            <Typography
              sx={{
                fontFamily: 'Open Sans, sans-serif',
                fontSize: '18px',
                fontWeight: 400,
                lineHeight: '29.77px',
                color: '#525C60'
              }}
            >Simply dummy text of the printintypesetting industry.</Typography>
          </Grid2>
          <Grid2 size={{ xs: 4, md: 6, lg: 3 }}
            justifyItems="center" alignItems="center" alignContent="center" textAlign="center"
            sx={{
              width: "257px",
              height: "335px",
              borderRadius: "30px",
              backgroundColor: 'white'
            }}
          >

            <img src={Fresh} alt="" />
            <Typography
              sx={{

                fontFamily: 'Roboto',
                fontSize: '25px',
                fontWeight: 800,
                lineHeight: '29.3px',
                color: '#274C5B'

              }}
            >100% Fresh</Typography>
            <Typography
              sx={{
                fontFamily: 'Open Sans, sans-serif',
                fontSize: '18px',
                fontWeight: 400,
                lineHeight: '29.77px',
                color: '#525C60'
              }}

            >Simply dummy text of the printintypesetting industry.</Typography>
          </Grid2>
          <Grid2 size={{ xs: 4, md: 6, lg: 3 }}
            justifyItems="center" alignItems="center" alignContent="center" textAlign="center"
            sx={{
              width: "257px",
              height: "335px",
              borderRadius: "30px",
              backgroundColor: 'white'

            }}
          >
            <img src={Support} alt="" />
            <Typography
              sx={{

                fontFamily: 'Roboto',
                fontSize: '25px',
                fontWeight: 800,
                lineHeight: '29.3px',
                color: '#274C5B'

              }}
            >Support 24/7</Typography>
            <Typography
              sx={{
                fontFamily: 'Open Sans, sans-serif',
                fontSize: '18px',
                fontWeight: 400,
                lineHeight: '29.77px',
                color: '#525C60'
              }}

            >Simply dummy text of the printintypesetting industry.</Typography>
          </Grid2>
          <Grid2 size={{ xs: 4, md: 6, lg: 3 }}
            justifyItems="center" alignItems="center" alignContent="center" textAlign="center"
            sx={{
              width: "257px",
              height: "335px",
              borderRadius: "30px",
              backgroundColor: 'white'
            }}
          >
            <img src={Secure} alt="" />
            <Typography
              sx={{

                fontFamily: 'Roboto',
                fontSize: '25px',
                fontWeight: 800,
                lineHeight: '29.3px',
                color: '#274C5B'

              }}
            >

              Secured Payment</Typography>
            <Typography
              sx={{
                fontFamily: 'Open Sans, sans-serif',
                fontSize: '18px',
                fontWeight: 400,
                lineHeight: '29.77px',
                color: '#525C60'
              }}
            >Simply dummy text of the printintypesetting industry.</Typography>
          </Grid2>
        </Grid2>
      </Box>

    </>
  )
}
export default WhyChoose
