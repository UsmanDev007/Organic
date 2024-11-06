import React from 'react';
import FooterImg from '../Images/Background.svg';
import { Box, Button, Grid2, IconButton, TextField, Typography} from '@mui/material';
import Logo from '../Images/Logo.svg';
import insta from '../Images/insta.svg';
import fb from '../Images/fb.svg';
import twitter from '../Images//twitter.svg';
import pintrest from '../Images/pintrest.svg';
const Footer = () => {
  
  return (
    <>
    <div style={{ margin: 0, padding: 0,overflow:'hidden',objectFit:'contain' }}>
      <Box sx={{ position: 'relative',display:'flex',justifyContent:'center',overflow:'hidden' 
       }}>
        <Box
          component="img"
          src={FooterImg}
          alt="footerimg"
          sx={{
            width: '100%',
            maxWidth: '1400px',
            margin: {md:'0 auto'},
            padding: {md:'0 20px'},
            height: {
              xs: '400px',   
              md: 'auto',   
            },
            objectFit: 'cover',
           
            
          }}
          
        
        />

        <Typography
          sx={{
            position: 'absolute',
            top: { xs: '5%', sm: '10%', md: '10%', lg: '32%' },
            left: { xs: '30%',sm:'38%', md: '40%', lg: '10%' },
            fontFamily: 'Roboto',
            fontSize: { lg: '50px', xs: '40px' },
            fontWeight: '800',
            lineHeight: '50.49px',
            textAlign: 'left',
            color: 'white',
          }}
        >
          Subscribe <br /> our Newsletter
        </Typography>

        <Box
          sx={{
            position: 'absolute',
            top: {  xs: '44%',md: '60%',lg:'43%' },
            left: { xs: '25%',sm:'28%',md:'30%',lg: '55%' },
            display: {sm: 'flex'},
            gap: 1,
          }}
        >
          <TextField
            id="demo-helper-text-misaligned"
            label="Your Email Address"
            variant="outlined"
            sx={{
              width: { md: '300px', lg: '349px' },
              height: '57px',
              borderRadius: '16px',
              fontFamily: 'Roboto',
              fontSize: '18px',
              fontStyle: 'italic',
              fontWeight: '400',
              lineHeight: '21.09px',
              textAlign: 'left',
              backgroundColor: 'white',
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  border: 'none', 
                },
              }
            }}
          />

          <Button
            sx={{
              fontFamily: 'Roboto',
              width: {xs:208,sm:190,lg:190},
              height: 55,
              padding: '28.5px',
              borderRadius: '10px',
              backgroundColor: '#274C5B',
              color: 'white',
              my:{xs:'4px',sm:'0px'},
              textTransform: 'none',
            }}
          >
            Subscribe
          </Button>
        </Box>
      </Box>           
    </div>
  {/* footer */}
  <Box sx={{marginBottom:'7%'}}>
  <Grid2 container spacing={12} columns={{ xs: 4, sm: 8, lg: 12 }} rowSpacing={0} mt={{md:10}}>
    <Grid2 size={{xs:2,lg:4}} sx={{ display: 'flex', justifyContent: 'center',borderRight:{xl:'1px solid #D4D4D4'},}}>
      <Box sx={{textAlign:'right',ml:20}}>
      <Typography
      sx={{
        fontFamily: 'Roboto',
        fontSize: '30px',
        fontWeight: 700,
        lineHeight: '35.16px',
        color:'#274C5B',
      }}
      >Contact Us</Typography>
      <Typography
      sx={{
        fontFamily: 'Open Sans',
        fontSize: '18px',
        fontWeight: 700,
        lineHeight: '29.7px',
        color:'#274C5B',
        my:1,
        
      }}
      >Email</Typography>
      <Typography
      sx={{
        fontFamily: 'Open Sans',
        fontSize: '18px',
        fontWeight: 400,
        lineHeight: '29.7px',
        color:'#525C60',
        my:1,
      }}
      >needhelp@Organia.com</Typography>
      <Typography
      sx={{
        fontFamily: 'Open Sans',
        fontSize: '18px',
        fontWeight: 700,
        lineHeight: '29.7px',
        color:'#274C5B',
        my:1,
      }}
      >Phone</Typography>
      <Typography
      sx={{
        fontFamily: 'Open Sans',
        fontSize: '18px',
        fontWeight: 400,
        lineHeight: '29.7px',
        color:'#525C60',
        my:1,
        
      }}
      >666 888 888</Typography>
      <Typography
      sx={{
        fontFamily: 'Open Sans',
        fontSize: '18px',
        fontWeight: 700,
        lineHeight: '29.7px',
      color:'#274C5B',
      my:1,

      }}
      >Address</Typography>
      <Typography
      sx={{
        fontFamily: 'Open Sans',
        fontSize: '18px',
        fontWeight: 400,
        lineHeight: '29.7px',
        color:'#525C60'
        
      }}
      >88 road, borklyn street, USA</Typography>
      </Box>
          
    </Grid2>
    <Grid2 size={4} sx={{ display: 'flex', justifyContent: 'center', }}>
        <Box sx={{ display: 'flex',flexDirection:'column', justifyContent: 'center',alignItems:'center',}}>
        <img src={Logo} alt="" style={{marginBottom:'10px'}}   />
        <Typography
        sx={{
          fontFamily: 'Open Sans',
          fontSize: '18px',
          fontWeight: 400,
          lineHeight: '29.7px',
          color:'#525C60',
          textAlign:'center',
        }}
        >
        Simply dummy text of the printing and typesetting industry.
        </Typography>
        <Typography
        sx={{
          fontFamily: 'Open Sans',
          fontSize: '18px',
          fontWeight: 400,
          lineHeight: '29.7px',
          color:'#525C60',
          textAlign:'center'
        }}
        >
        Lorem Ipsum simply dummy text of the printing
        </Typography>

        {/* Social Media Links */}
        <Box sx={{display:'flex', mt:5}}>
        <IconButton href="#"  >
          <img src={insta} alt="" />
        </IconButton>
          <IconButton href="#" >
          <img src={fb} alt="" />
           </IconButton>
         <IconButton href="#" >
         <img src={twitter} alt="" />
          </IconButton>
          <IconButton href="#" >
          <img src={pintrest} alt="" />
          </IconButton>
        </Box>
         {/* Social Media Links */}

        </Box>
        
        
    </Grid2>
    <Grid2 size={{xs:2,lg:4}} sx={{ display: 'flex', justifyContent: 'center',borderLeft:{xl:'1px solid #D4D4D4'},   }}>
      <Box sx={{mr:{lg:24},ml:{xs:28,sm:2},textWrap:{xs:'nowrap',sm:'wrap',md:'nowrap'}}}>
      <Typography
      sx={{
        fontFamily: 'Roboto',
        fontSize: '30px',
        fontWeight: 700,
        lineHeight: '35.16px',
        color:'#274C5B'
        
      }}
      >Utility Pages</Typography>
      <Typography
      sx={{
        fontFamily: 'Open Sans',
        fontSize: '18px',
        fontWeight: 400,
        lineHeight: '29.7px',
        color:'#525C60',
        my:1,
        
      }}
      >Style Guide</Typography>
      <Typography
      sx={{
        fontFamily: 'Open Sans',
        fontSize: '18px',
        fontWeight: 400,
        lineHeight: '29.7px',
        color:'#525C60',
        my:2
      }}
      >404 Not Found</Typography>
      <Typography
      sx={{
        fontFamily: 'Open Sans',
        fontSize: '18px',
        fontWeight: 400,
        lineHeight: '29.7px',
        color:'#525C60',
        my:2
      }}
      >Password Protected</Typography>
      <Typography
      sx={{
        fontFamily: 'Open Sans',
        fontSize: '18px',
        fontWeight: 400,
        lineHeight: '29.7px',
        color:'#525C60',
        my:2,
      }}
      >Licences</Typography>
      <Typography
      sx={{
        fontFamily: 'Open Sans',
        fontSize: '18px',
        fontWeight: 400,
        lineHeight: '29.7px',
        color:'#525C60'
        
      }}
      >Changelog</Typography>
      </Box>
      
    </Grid2>
  </Grid2>
</Box>
  <hr sx={{border:'1px #D4D4D4'}}/>  
   <Typography
   sx={{
    fontFamily: 'Open Sans',
    fontSize: '18px',
    // fontWeight: 700,
    lineHeight: '29.77px',
    textAlign: 'center',
    color:'#525C60'

   }}
   >
   Copyright © <b>Organick</b> | Designed by <b>VictorFlow</b> Templates - Powered by <b>Webflow</b>
   </Typography>
    </>    
  );
};

export default Footer;
