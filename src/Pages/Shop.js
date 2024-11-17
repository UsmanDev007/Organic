import { Box, Typography,TextField, Button } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Shopbg from '../Images/shopbg.svg';
import Hero from '../Components/Hero';
import { CardContext } from '../CardContext';
import Star from '../Images/Star.svg'
const Shop = () => {
  const { id } = useParams();
  const { selectedCard } = useContext(CardContext);
  const [data, setData] = useState(selectedCard);
  // const [error, setError] = useState(null);

  useEffect(() => {
    // if (!selectedCard || selectedCard.id !== parseInt(id, 10)) {
    fetch('/VegCards.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((allData) => {
        console.log("Fetched Data:", allData); // Debugging line
        const foundItem = allData.find(
          (item) => item.id === id || item.id === parseInt(id, 10)
        );
        if (foundItem) {
          setData(foundItem);
        } else {
          console.error(`Item with id ${id} not found`);
          // setError('Item not found');
        }
      })
      .catch((error) => {
        console.log(error)
      });
    // }
  }, [id, selectedCard]);
  return (
    <>
      <Hero image={Shopbg} text="Shop" />
      <Box sx={{display:"flex",justifyContent:'center',alignItems:'center'}}>
        <img src={data.image} alt={data.name} />
        <Box>
          <img src={Star} alt="star" />
          <Typography variant="h6" color="primary">
            Discounted Price: ${data.afterPrice}
          </Typography>
          <Typography sx={{width:"530px"}}>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</Typography>
           <Box sx={{display:'flex',alignItems:'center',gap:"5px"}}>
             <span>Quantity:</span>
              <TextField type='number'/>
              <Button>Add To Cart</Button>
           </Box>
        </Box>

      </Box>
    </>
  );
};

export default Shop;