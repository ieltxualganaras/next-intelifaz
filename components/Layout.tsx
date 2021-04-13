import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { Button, Container, Grid, withStyles } from '@material-ui/core'
import LayoutStyles from './Layout.styles';

type Props = {
  children?: ReactNode
  title?: string,
  classes: any
}

const Layout = ({ children, title = 'This is the default title', classes }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Grid container direction="column">
      <Grid item container alignItems="flex-end">
        <Grid item>
          <Link href="/">
            <Button>Home</Button>
          </Link>
        </Grid>
        <Grid item>
          <Link href="/blog">
            <Button>Blog</Button>
          </Link>
        </Grid>
      </Grid>
    </Grid>
    <Grid className={ classes.fullHeight }>
      <Container>
        <>
        {children}
        </>
      </Container>
    </Grid>
    <Grid item>
      <footer>
        <hr />
        <span>I'm here to stay (Footer)</span>
      </footer>
    </Grid>
  </div>
)

export default withStyles(LayoutStyles)(Layout)
