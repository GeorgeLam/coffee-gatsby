import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"
import { makeStyles } from "@material-ui/core/styles"

import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Grid,
} from "@material-ui/core/"

import MenuIcon from "@material-ui/icons/Menu"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

const IndexPage = () => {
  const classes = useStyles()

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Coffeeshop
          </Typography>

          <Button>
            <Link to="/blog">Blog</Link>
          </Button>
        </Toolbar>
      </AppBar>
      <div>
        <Grid item xs={12}>
          <Image />{" "}
        </Grid>
      </div>
    </div>
  )
}

export default IndexPage
