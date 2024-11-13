import React from 'react'
import BannerServices from '../Images/ServicesBanner.svg'
import Hero from '../Components/Hero'
import Milk from '../Images/Milk Bottle.svg'
import OnlineStore from '../Images/Online Store.svg'
import Derlivery from '../Images/Delivery.svg'
import Agri from '../Images/Agri.svg'
import Wheat from '../Images/Wheat.svg'
import veg from '../Images/Veg.svg'
import orangebg from '../Images/orangebg.svg'
import ServiceCenter from '../Images/CenterServices.svg'
import { Box, Grid2, Typography } from '@mui/material'
const Services = () => {
  return (
    <>
      <Hero image={BannerServices} text="Services" />
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', mt: '3%' }}>
        <Typography sx={{
          fontfamily: "Yellowtail",
          fontSize: "36px",
          fontWeight: 400,
          lineHeight: "49.06px",
          textAlign: "center",
          color: '#7EB693',
          fontStyle: "italic"
        }}>
          What we Grow
        </Typography>
        <Typography sx={{
          fontFamily: "Roboto",
          fontSize: "50px",
          fontWeight: 800,
          lineHeight: "58.59px",
          textAlign: "center",
          color: '#274C5B',
          maxWidth: '400px',
          width: '100%'

        }}>
          Better Agriculture
          for
          Better Future
        </Typography>
      </Box>
      <Box sx={{ maxWidth: '1920px', mx: 'auto', mt: '3%' }}>
        <Grid2 container justifyContent="center">
          {/* Child1 */}
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }} justifyItems={{ md: "end" }} alignContent="center">
            <img src={Milk} alt="" />
            <Typography sx={{
              fontFamily: "Roboto",
              fontSize: "25px",
              fontWeight: 500,
              lineHeight: "29.3px",
              textAlign: "left",
              color: '#274C5B'

            }}>Dairy Products</Typography>
            <Typography sx={{
              fontFamily: "Open Sans",
              fontSize: "18px",
              fontWeight: 400,
              lineHeight: "29.77px",
              textAlign: "right",
              color: '#525C60',
              width: '350px'

            }}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut
              perspiciatis
            </Typography>

            <img src={OnlineStore} alt="" />
            <Typography sx={{
              fontFamily: "Roboto",
              fontSize: "25px",
              fontWeight: 500,
              lineHeight: "29.3px",
              textAlign: "left",
              color: '#274C5B'

            }}
            >Store Services</Typography>
            <Typography sx={{
              fontFamily: "Open Sans",
              fontSize: "18px",
              fontWeight: 400,
              lineHeight: "29.77px",
              textAlign: "right",
              color: '#525C60',
              width: '350px'

            }}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut
              perspiciatis
            </Typography>

            <img src={Derlivery} alt="" />
            <Typography
              sx={{
                fontFamily: "Roboto",
                fontSize: "25px",
                fontWeight: 500,
                lineHeight: "29.3px",
                textAlign: "left",
                color: '#274C5B'

              }}
            >Delivery Services</Typography>
            <Typography sx={{
              fontFamily: "Open Sans",
              fontSize: "18px",
              fontWeight: 400,
              lineHeight: "29.77px",
              textAlign: "right",
              color: '#525C60',
              width: '350px'

            }}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut
              perspiciatis
            </Typography>
          </Grid2>

          {/* Child2 */}
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }} sx={{

            backgroundImage: `url(${ServiceCenter})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '900px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}>

          </Grid2>

          {/* Child3 */}
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }} justifyItems="start" alignContent="center">
            <img src={Agri} alt="" />
            <Typography
              sx={{
                fontFamily: "Roboto",
                fontSize: "25px",
                fontWeight: 500,
                lineHeight: "29.3px",
                textAlign: "left",
                color: '#274C5B'

              }}
            >Agricultural Services</Typography>
            <Typography sx={{
              fontFamily: "Open Sans",
              fontSize: "18px",
              fontWeight: 400,
              lineHeight: "29.77px",
              textAlign: "left",
              color: '#525C60',
              maxWidth: '350px'

            }}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut
              perspiciatis
            </Typography>

            <img src={Wheat} alt="" />
            <Typography
              sx={{
                fontFamily: "Roboto",
                fontSize: "25px",
                fontWeight: 500,
                lineHeight: "29.3px",
                textAlign: "left",
                color: '#274C5B'

              }}
            >Organic Products</Typography>
            <Typography sx={{
              fontFamily: "Open Sans",
              fontSize: "18px",
              fontWeight: 400,
              lineHeight: "29.77px",
              textAlign: "left",
              color: '#525C60',
              maxWidth: '350px'

            }}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut
              perspiciatis
            </Typography>

            <img src={veg} alt="" />
            <Typography
              sx={{
                fontFamily: "Roboto",
                fontSize: "25px",
                fontWeight: 500,
                lineHeight: "29.3px",
                textAlign: "left",
                color: '#274C5B'

              }}
            >Fresh Vegetables</Typography>
            <Typography
              sx={{
                fontFamily: "Open Sans",
                fontSize: "18px",
                fontWeight: 400,
                lineHeight: "29.77px",
                textAlign: "left",
                color: '#525C60',
                maxWidth: '350px'
              }}
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut
              perspiciatis
            </Typography>
          </Grid2>
        </Grid2>
      </Box>
      {/* new content orange bg */}
      <Box sx=
        {{
          backgroundImage: `url(${orangebg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '900px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>

        <Typography sx={{
          fontfamily: "Yellowtail",
          fontSize: "36px",
          fontWeight: 400,
          lineHeight: "49.06px",
          textAlign: "center",
          fontStyle: "italic",
          color: "#7EB693"

        }}>Organic Only</Typography>
        <Typography
          sx={{
            fontfamily: "Roboto",
            fontSize: "50px",
            fontWeight: 800,
            lineHeight: "58.59px",
            textAlign: "center",
            color: "#274C5B"
          }}
        >Everyday Fresh & Clean</Typography>
        <Typography
          sx={{
            fontfamily: "Open Sans",
            fontsize: "18px",
            fontweight: 400,
            lineheight: "29.77px",
            textalign: "center",
            color: "#274C5B",
            
          }}
        >Simply dummy text of the printing and typesetting industry. Lorem had</Typography>
        <Typography
          sx={{
            fontfamily: "Open Sans",
            fontsize: "18px",
            fontweight: 400,
            lineheight: "29.77px",
            textalign: "center",
            color: "#274C5B",
          }}
        >ceased to been the industry's standard dummy text ever since the </Typography>
      </Box>

    </>
  )
}

export default Services
