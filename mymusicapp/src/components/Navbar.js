
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Musicical Application With No Music
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
