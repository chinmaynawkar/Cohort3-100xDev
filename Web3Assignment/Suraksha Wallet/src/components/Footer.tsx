// src/components/Footer.tsx

import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{
        maxWidth: 'container',
        mx: 'auto',
        borderTop: 1,
        borderColor: 'divider',
        px: 2,
        py: 2,
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="body1" color="text.secondary">
          © 2023 Suraksha Wallet
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Designed and Developed by{' '}
          <Link href="https://github.com/chinmaynawkar" underline="hover">
            Chinmay Nawkar❤️
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;