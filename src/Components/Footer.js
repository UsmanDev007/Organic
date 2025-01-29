import React from "react";
import FooterImg from "../Images/Background.svg";
import {
  Box,
  Button,
  Grid2,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import Logo from "../Images/Logo.svg";
import insta from "../Images/insta.svg";
import fb from "../Images/fb.svg";
import twitter from "../Images//twitter.svg";
import pintrest from "../Images/pintrest.svg";
const Footer = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          overflow: "hidden",
          alignItems: "center",
          backgroundImage: `url(${FooterImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "350px",
          padding: "20px",
          margin: "auto",
          borderRadius: { sm: "0px", md: "20px" },
          marginTop: "15px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Roboto",
            fontSize: { lg: "50px", xs: "40px" },
            fontWeight: "800",
            lineHeight: "50.49px",
            textAlign: "center",
            color: "white",
          }}
        >
          Subscribe <br /> our Newsletter
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
          }}
        >
          <TextField
            id="demo-helper-text-misaligned"
            variant="outlined"
            sx={{
              width: { md: "300px", lg: "349px" },
              height: "57px",
              borderRadius: "16px",
              fontFamily: "Roboto",
              fontSize: "18px",
              fontStyle: "italic",
              fontWeight: "400",
              lineHeight: "21.09px",
              textAlign: "left",
              backgroundColor: "white",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: "none",
                },
              },
            }}
          />

          <Button
            sx={{
              fontFamily: "Roboto",
              width: { xs: 208, sm: 190, lg: 190 },
              height: 55,
              padding: "28.5px",
              borderRadius: "10px",
              backgroundColor: "#274C5B",
              color: "white",
              textTransform: "none",
            }}
          >
            Subscribe
          </Button>
        </Box>
      </Box>
      {/* footer */}
      <Box
        sx={{
          marginTop: "3%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
          gap: 4,
        }}
      >
        {/* Left Section - Contact Us */}
        <Box>
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontSize: "30px",
              fontWeight: 700,
              color: "#274C5B",
            }}
          >
            Contact Us
          </Typography>

          <Typography sx={{ fontWeight: 700, color: "#274C5B", my: 1 }}>
            Email
          </Typography>
          <Typography sx={{ fontWeight: 400, color: "#525C60" }}>
            needhelp@Organia.com
          </Typography>

          <Typography sx={{ fontWeight: 700, color: "#274C5B", my: 1 }}>
            Phone
          </Typography>
          <Typography sx={{ fontWeight: 400, color: "#525C60" }}>
            666 888 888
          </Typography>

          <Typography sx={{ fontWeight: 700, color: "#274C5B", my: 1 }}>
            Address
          </Typography>
          <Typography sx={{ fontWeight: 400, color: "#525C60" }}>
            88 Road, Brooklyn Street, USA
          </Typography>
        </Box>

        {/* Center Section - Logo & Social Media */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <img src={Logo} alt="Logo" style={{ marginBottom: "10px" }} />
          <Typography
            sx={{ fontSize: "18px", fontWeight: 400, color: "#525C60" }}
          >
            Simply dummy text of the printing and typesetting industry.
          </Typography>
          <Typography
            sx={{ fontSize: "18px", fontWeight: 400, color: "#525C60" }}
          >
            Lorem Ipsum simply dummy text of the printing.
          </Typography>

          {/* Social Media Icons */}
          <Box sx={{ display: "flex", mt: 3, gap: 2 }}>
            <IconButton href="#">
              <img src={insta} alt="Instagram" />
            </IconButton>
            <IconButton href="#">
              <img src={fb} alt="Facebook" />
            </IconButton>
            <IconButton href="#">
              <img src={twitter} alt="Twitter" />
            </IconButton>
            <IconButton href="#">
              <img src={pintrest} alt="Pinterest" />
            </IconButton>
          </Box>
        </Box>

        {/* Right Section - Utility Pages */}
        <Box
          sx={{ textAlign: { xs: "center", md: "center", }}}
        >
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontSize: "30px",
              fontWeight: 700,
              color: "#274C5B",
            }}
          >
            Utility Pages
          </Typography>

          {[
            "Style Guide",
            "404 Not Found",
            "Password Protected",
            "Licences",
            "Changelog",
          ].map((item, index) => (
            <Typography
              key={index}
              sx={{ fontWeight: 400, color: "#525C60", my: 1 }}
            >
              {item}
            </Typography>
          ))}
        </Box>
      </Box>

      <hr sx={{ border: "1px #D4D4D4" }} />
      <Typography
        sx={{
          fontFamily: "Open Sans",
          fontSize: "18px",
          lineHeight: "29.77px",
          textAlign: "center",
          color: "#525C60",
        }}
      >
        Copyright © <b>Organick</b> | Designed by <b>VictorFlow</b> Templates -
        Powered by <b>Webflow</b>
      </Typography>
    </>
  );
};

export default Footer;
