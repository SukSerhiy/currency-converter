import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    height: 100,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eff7ff'
  },
  headerText: {
    fontSize: 20,
    fontWeight: 500,
    color: 'grey'
  }
});

const Header = () => {
  const classes = useStyles()
  return (
    <header className={classes.root}>
      <span className={classes.headerText}>Currencies converter</span>
    </header>
  )
}

export default Header
