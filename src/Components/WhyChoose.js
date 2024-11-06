import { Box, Typography } from '@mui/material'
import React from 'react'
import icon from '../Images/Icon.svg'
import ChooseGreen from '../Images/ChooseGreen.svg'
import '../App.css'
const WhyChoose = () => {
  return (
    <> 
      <Box sx={{backgroundColor:'#F9F8F9',height:'1429px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <Box sx={{display:'flex',border:'1px solid black',width:'1400px'}}>
          <Box sx={{border:'1px solid black'}}>
              <Typography>Why Choose Us</Typography>
              <Typography>We do not buy from the
              open market & traders.</Typography>
              <Typography>
              Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard  the 1500s, when an unknown
              </Typography>
              <div style={{display:"flex",justifyContent:'flex-start',alignItems:'center',gap:'2px'}}>
                 <img src={icon} alt="" />
                 <Typography>
                 100% Natural Product
                 </Typography>
              </div>
              <Typography>
              Simply dummy text of the printing and typesetting industry Lorem Ipsum
              </Typography>
              <div style={{display:"flex",justifyContent:'flexStart',alignItems:'center',gap:'2px'}}>
                 <img src={icon} alt="" />
                 <Typography>
                 Increases resistance
                 </Typography>
              </div>
              <Typography>
              Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing
              </Typography>
          </Box> 
            <Box>
                <img src={ChooseGreen} alt="" />
            </Box>
            </Box>
          {/* CHILD 2 for cards */}
               <Box>
                   <Typography>Cards</Typography>
               </Box>         
      </Box>
         
    </>
  )
}
export default WhyChoose
   