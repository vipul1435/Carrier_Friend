import React from 'react';
import { Grid, Skeleton, Box, Card, Divider, Chip, Button } from '@mui/material';

const LoadingSkeleton = () => {
  return (
    <Grid item md={6} sx={{ px: '25px', py: '10px' }}>
      <Box component={Card} sx={{ minHeight: '200px', width: 'calc(100% - 40px)', bgcolor: 'white', py: '10px', px: '20px', display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
        <Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Skeleton variant="circular" width={50} height={50} sx={{ borderRadius: '50%', mr: "5px", mb: '5px' }} />
              <Box>
                <Skeleton variant="text" width={150} height={24} />
                <Skeleton variant="text" width={100} height={18} />
              </Box>
            </Box>
            <Skeleton variant="circular" width={24} height={24} sx={{ color: 'green' }} />
          </Box>
          <Divider sx={{ my: '5px' }} />
          <Box sx={{ mt: '10px' }}>
            <Skeleton variant="text" width={200} height={20} />
            <Skeleton variant="text" width={150} height={20} />
            <Skeleton variant="text" width={180} height={20} />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', flexGrow: 1, flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', bottom: '0px' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <Skeleton variant="circular" width={20} height={20} />
              <Skeleton variant="text" width={80} height={20} />
            </Box>
            <Skeleton variant="text" width={60} height={20} sx={{ textAlign: 'right' }} />
          </Box>
          <Divider orientation="vertical" flexItem variant='middle' />
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <Skeleton variant="circular" width={20} height={20} />
              <Skeleton variant="text" width={80} height={20} />
            </Box>
            <Skeleton variant="text" width={80} height={20} sx={{ textAlign: 'right' }} />
          </Box>
          <Divider orientation="vertical" flexItem variant='middle' />
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Skeleton variant="rectangular" width={100} height={30} />
            <Skeleton variant="rectangular" width={100} height={30} sx={{ mt: "5px", mb: '10px' }} />
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default LoadingSkeleton;
