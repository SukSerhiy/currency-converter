import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Home from '../containers/Home'
import { Header, Footer } from './'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%'
  }
})

const App = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App
