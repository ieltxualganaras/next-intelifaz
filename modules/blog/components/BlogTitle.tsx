import React, { Component } from 'react';
import { Typography, withStyles } from '@material-ui/core';
import BlogTitleStyles from './BlogTitle.styles'

type Props = {
  classes: any,
  blogTitle: string
}
class BlogTitle extends Component<Props> {

  render() {
    const { classes, blogTitle } = this.props;
    return(
      <Typography variant="h2" classes={{root: classes.blogTitle}}>{blogTitle}</Typography>
    )
  }
}

export default withStyles(BlogTitleStyles)(BlogTitle);
