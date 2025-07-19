import { Box, Typography, TextField, Button } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import StyledButton from "../Components/Button";
import { useParams } from "react-router-dom";
import Shopbg from "../Images/shopbg.png";
import Hero from "../Components/Hero";

import { CardContext } from "../CardContext";
import Star from "../Images/Star.png";
import PopUp from "../Components/PopUp";

const Shop = () => {
  const { id } = useParams();
  const { selectedCard,SetCount } = useContext(CardContext);
  const [data, setData] = useState(selectedCard || {});
  
  useEffect(() => {
    window.scrollTo(0, 0);
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
  // handle Popup states
  const [openPopUp, setOpenPopUp] = useState(false);
  const increment =()=>{
    SetCount((prevCount) => prevCount + 1)
  }
  const handleOpenPopUp = () => {
    setOpenPopUp(true);
    increment();
  }
  const handleClosePopUp = () => setOpenPopUp(false);
    
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
            <div>
              <StyledButton text="Add to Cart" onClick={handleOpenPopUp} />
              <PopUp
                open={openPopUp}
                onClose={handleClosePopUp}
                title="Your Cart"
              >
              </PopUp>
            </div>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Shop;
