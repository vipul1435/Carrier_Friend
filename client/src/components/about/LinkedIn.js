import { Box } from '@mui/material'
import React from 'react'
const LinkedIn = () => {
    React.useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://platform.linkedin.com/badges/js/profile.js';
        script.async = true;
        script.defer = true;
        script.type = 'text/javascript';
        document.head.appendChild(script);
        return () => {
          document.head.removeChild(script);
        };
      }, []);
  return (
    <Box sx={{ my: '2%', mx: '2%', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
        <Box className="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="HORIZONTAL" data-vanity="vipulkumar2003" data-version="v1"></Box>
      </Box>
  )
}

export default LinkedIn