import React from 'react';
import { AppBar, Toolbar, Typography } from 'material-ui';
// import Button from 'material-ui/Button';
// import IconButton from 'material-ui/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

const Header = () => (

  <AppBar position="static">
    <Toolbar>
      <Typography variant="headline" color="inherit">
        Excercises
      </Typography>
      {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
        <MenuIcon />
      </IconButton>
      <Typography variant="title" color="inherit" className={classes.flex}>
            Title
      </Typography>
      <Button color="inherit">Login</Button> */}
    </Toolbar>
  </AppBar>

);

export default Header;
