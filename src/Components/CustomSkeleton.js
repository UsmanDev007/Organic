import { Box, Skeleton } from '@mui/material';
import React from 'react'

const CustomSkeleton = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
          <Box sx={{ width: '100%', maxWidth: '1200px', padding: '20px' }}>
            <Skeleton variant="rectangular" width="100%" height={200} sx={{ borderRadius: 2 }} />
            <Skeleton variant="text" sx={{ fontSize: '2rem', marginTop: '20px' }} />
            <Skeleton variant="text" sx={{ fontSize: '1.5rem', marginTop: '10px' }} />
            <Skeleton variant="text" sx={{ fontSize: '1.2rem', marginTop: '10px', width: '80%' }} />
            <Skeleton variant="rectangular" width="100%" height={300} sx={{ borderRadius: 2, marginTop: '20px' }} />
          </Box>
        </Box>
      );
}

export default CustomSkeleton