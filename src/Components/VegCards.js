import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  CircularProgress,
  Divider,
  Grid2,
  Typography,
} from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Star from "../Images/Star.svg";
import { CardContext } from "../CardContext";
const VegCards = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { SetSelectedCard } = useContext(CardContext);
  useEffect(() => {
    fetch("/VegCards.json")
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
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  }
  // usenavigate to push the data to other component by click
  const handleCardClick = (item) => {
    navigate(`/shop`);
    SetSelectedCard(item);
  };

  return (
    <Box sx={{ maxWidth: "1200px", mx: "auto", minHeight: "100vh", p: 2 }}>
      <Grid2 container spacing={2} sx={{ justifyContent: "center" }}>
        {data.map((item) => (
          <Grid2
            onClick={() => handleCardClick(item)}
            size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
            key={item.id}
            sx={{
              display: "flex",
              justifyContent: "center",
              cursor: "pointer",
            }}
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
                    backgroundImage: `url(${item.image})`,
                    position: "relative",
                  }}
                >
                  <Box sx={{ position: "absolute", top: 14, left: 14 }}>
                    <Chip
                      avatar
                      label={item.type}
                      sx={{
                        borderRadius: "8px",
                        color: "#FFFFFF",
                        backgroundColor: "#274C5B",
                      }}
                    />
                  </Box>
                </CardMedia>
                <CardContent sx={{ p: 2 }}>
                  <Typography
                    sx={{
                      fontFamily: "Roboto",
                      fontSize: "20px",
                      fontWeight: 600,
                      lineHeight: "23.44px",
                      color: "#274C5B",
                    }}
                  >
                    {item.name}
                  </Typography>
                </CardContent>
                <Divider />
                <CardContent
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    p: 2,
                  }}
                >
                  <Box display="flex" alignItems="center">
                    <Typography
                      sx={{
                        fontFamily: "Open Sans",
                        fontSize: "15px",
                        fontWeight: 600,
                        lineHeight: "20.43px",
                        color: "#B8B8B8",
                        textDecoration: "line-through",
                        mr: 1,
                      }}
                    >
                      ${item.actualPrice}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Open Sans",
                        fontSize: "18px",
                        fontWeight: 700,
                        lineHeight: "24.51px",
                        color: "#274C5B",
                      }}
                    >
                      <strong>${item.afterPrice}</strong>
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <Box>
                      <img src={Star} alt="Star Rating" />
                    </Box>
                  </Box>
                </CardContent>
                <Divider />
              </Card>
            </Box>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default VegCards;
