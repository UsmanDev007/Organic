import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Shopbg from '../Images/shopbg.svg'
import Hero from '../Components/Hero';
const Shop = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    fetch('/VegCards.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((allData) => {
        // Find the specific card by id
        const foundItem = allData.find((item) => item.id === parseInt(id, 10));
        if (foundItem) {
          setData(foundItem);
        } else {
          setError('Item not found');
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError(error.message);
      });
  }, [id]);
  
console.log(data)
  if (error) {
    return <div>Error fetching data: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
       <Hero image={Shopbg} text="Shop"/>
      <img src={data.image} alt={data.name} />
      <Typography>{data.name}</Typography>
      <Typography>Original Price: ${data.actualPrice}</Typography>
      <Typography>Discounted Price: ${data.afterPrice}</Typography>
    </>
  );
};

export default Shop;
