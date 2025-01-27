import { Box, Typography, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import StyledButton from "../Components/Button";
import { useParams } from "react-router-dom";
import Shopbg from "../Images/shopbg.svg";
import Hero from "../Components/Hero";

import { CardContext } from "../CardContext";
import Star from "../Images/Star.svg";

const Shop = () => {
  const { id } = useParams();
  const { selectedCard } = useContext(CardContext);
  const [data, setData] = useState(selectedCard || {});

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top
    fetch("/VegCards.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((allData) => {
        const foundItem = allData.find(
          (item) => item.id === id || item.id === parseInt(id, 10)
        );
        if (foundItem) {
          setData(foundItem);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id, selectedCard]);

  // Render component
  return (
    <>
      <Hero image={Shopbg} text="Shop" />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {/* Display Product Image */}
        {data.image ? (
          <img
            src={data.image}
            alt={data.name}
            style={{ maxWidth: "300px", borderRadius: "8px" }}
          />
        ) : (
          <Typography variant="body1" color="textSecondary">
            No Image Available
          </Typography>
        )}

        <Box sx={{ maxWidth: "600px" }}>
          {/* Star Icon */}
          <Box sx={{ marginBottom: "10px" }}>
            <img src={Star} alt="star" style={{ maxWidth: "100px" }} />
          </Box>

          {/* Discounted Price */}
          <Typography
          sx={{
            fontFamily: "Roboto",
            fontSize: "20px",
            fontWeight: 700,
            lineHeight: "23.44px",
            textAlign: "left",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
            color: "#274C5B",
          }}
          >
          ${data.afterPrice || "N/A"}
          </Typography>

          {/* Product Description */}
          <Typography sx={{ width: "100%", marginTop: "10px" }}>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to be the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </Typography>

          {/* Quantity and Add to Cart */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginTop: "20px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Roboto",
                fontSize: "20px",
                fontWeight: 700,
                lineHeight: "23.44px",
                textAlign: "left",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
                color: "#274C5B",
              }}
            >
              Quantity
            </Typography>

            <TextField
              type="number"
              variant="outlined"
              size="small"
              inputProps={{ min: 1 }}
              defaultValue={1}
              sx={{
                borderRadius: "12px",
                width: "100px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                  padding: "8px",
                  "& fieldset": {
                    borderColor: "#274C5B",
                  },
                  "&:hover fieldset": {
                    borderColor: "#274C5B",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#274C5B",
                  },
                },
                "& .MuiInputBase-input": {
                  padding: "18px",
                },
              }}
            />
            <StyledButton text="Add to Cart" />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Shop;
