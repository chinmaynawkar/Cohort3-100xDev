// src/components/Navbar.tsx

import React from 'react';
import { Box, Typography } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';

const Navbar: React.FC = () => {
  return (
    <Box
      component="nav"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        py: 2,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <InboxIcon fontSize="large" />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography
            variant="h3"
            component="span"
            sx={{
              fontWeight: 'extrabold',
              color: 'grey.900',
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            Suraksha Wallet
            <Typography
              component="span"
              sx={{
                borderRadius: '50%',
                fontSize: '0.875rem',
                backgroundColor: 'secondary.300',
                border: '1px solid',
                borderColor: 'secondary.800',
                px: 1,
                color: 'secondary.800',
              }}
            >
              v1.0
            </Typography>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;