import React from 'react'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  root: {
    height: 150,
    width: '100%',
    padding: '0px 50px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    boxSizing: 'border-box',
    '& > span': {
      fontSize: 14,
      color: '#9a9a8e'
    }
  }
})

const Footer = () => {
  const classes = useStyles()
  return (
    <footer className={classes.root}>
      <span>
        Made by Suk Serhii
      </span>
      <span>
        0669767089
      </span>
      <a href="mailto:sukserhiy@gmail.com">
        sukserhiy@gmail.com
      </a>
      <a target='__blank' href='https://www.linkedin.com/in/serhii-suk-4b761b17a/'>
        LinkedIn
      </a>
    </footer>
  )
}

export default Footer
