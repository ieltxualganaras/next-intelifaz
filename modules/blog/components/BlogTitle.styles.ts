import { Theme, createStyles } from '@material-ui/core';

const BlogTitleStyles = (theme: Theme) =>
  createStyles({
    root: {
      color: 'blue',
      padding: theme.spacing(2)
    }
  });

export default BlogTitleStyles;
