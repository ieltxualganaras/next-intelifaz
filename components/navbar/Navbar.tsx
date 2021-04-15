import React, { Component } from 'react';
import Link from 'next/link';
import { Button, Grid, withStyles } from '@material-ui/core';

import NavbarStyles from './Navbar.styles';

type Props = {
  classes: any
};

class Navbar extends Component<Props> {

  render() {
    const { classes } = this.props;
    return (
      <Grid item container alignItems="flex-end" className={ classes.navbarContainer }>
        <Grid item>
          <Link href="/">
            <Button color="primary">Home</Button>
          </Link>
        </Grid>
        <Grid item>
          <Link href="/blog">
            <Button color="primary">Blog</Button>
          </Link>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(NavbarStyles)(Navbar);