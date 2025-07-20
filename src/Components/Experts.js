import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid2,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";

const Experts = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/ExpertsCards.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
      });
  }, []);

  if (error) {
    return <div>Error fetching data: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <Box sx={{ maxWidth: "1200px", mx: "auto", minHeight: "100vh", p: 2 }}>
      <Box sx={{ textAlign: "center", mx: "auto", maxWidth: "800px", mb: 2 }}>
        <Typography
          sx={{
            fontFamily: "Yellowtail",
            fontSize: "36px",
            fontWeight: 400,
            lineWeight: "49.06px",
            fontStyle: "italic",
            color: "#7EB693",
          }}
        >
          Team
        </Typography>
        <Typography
          sx={{
            fontFamily: "Roboto",
            fontSize: "50px",
            fontWeight: 800,
            lineHeight: "58.59px",
            color: "#274C5B",
          }}
        >
          Our Organic Experts
        </Typography>
        <Typography
          sx={{
            fontFamily: "Open Sans",
            fontSize: "18px",
            fontWeight: 400,
            maxwidth: "800px",
            width: "100%",
            textAlign: "center",
            lineHeight: "29.77px",
            color: "#525C60",
          }}
        >
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley.
        </Typography>
      </Box>
      <Grid2 container spacing={2} sx={{ justifyContent: "center" }}>
        {data.map((item) => (
          <Grid2
            key={item.id}
            size={{ xs: 12, sm: 6, md: 4, lg: 4 }}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box sx={{ maxWidth: "335px", maxHeight: "483px", width: "100%" }}>
              <Card
                sx={{
                  boxShadow: 2,
                  borderRadius: "30px",
                  backgroundColor: "#F9F8F8",
                }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    height: 324,
                    backgroundSize: "cover",
                    backgroundImage: `url(${item.person})`,
                    position: "relative",
                  }}
                />
                <CardContent
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "Roboto",
                        fontSize: "21px",
                        fontWeight: 800,
                        lineHeight: "29.3px",
                        color: "#274C5B",
                      }}
                    >
                      {item.text}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Open Sans",
                        fontSize: "15px",
                        fontWeight: 600,
                        lineHeight: "20.43px",
                        color: "#B8B8B8",
                        mr: 1,
                      }}
                    >
                      {item.subtext}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                      mt: 7,
                    }}
                  >
                    <img
                      src={item.insta}
                      alt="Instagram"
                      style={{
                        cursor: "pointer",
                        width: "24px",
                        height: "24px",
                        objectFit: "contain",
                      }}
                    
                    />

                    <img
                      src={item.fb}
                      alt="Facebook"
                      style={{
                        cursor: "pointer",
                        width: "24px",
                        height: "24px",
                        objectFit: "contain",
                      }}
                    
                    />

                    <img
                      src={item.tweet}
                      alt="Twitter"
                      style={{
                        cursor: "pointer",
                        width: "24px",
                        height: "24px",
                        objectFit: "contain",
                      }}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default Experts;
