import React, { useEffect } from 'react'
import { CircularProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ConverterPanel from '../containers/ConverterPanel'

const useStyles = makeStyles({
  root: {
    width: '100%',
    flex: 1,
    boxSizing: 'border-box',
    padding: '0 20%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#f9f9f9'
  },
  circularContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const isObjectEmpty = obj => Object.keys(obj).length === 0

const Home = props => {
  const classes = useStyles()
  const { loading, fetchCurrencies, fetchCountries, currencies, countries } = props
  useEffect(() => {
    if (isObjectEmpty(currencies)) {
      fetchCurrencies()
    }
    if (isObjectEmpty(countries)) {
      fetchCountries()
    }
  }, [fetchCurrencies, fetchCountries, currencies, countries])
  if (loading) {
    return (
      <div className={classes.circularContainer}>
        <CircularProgress />
      </div>
    )
  }
  return (
    <main className={classes.root}>
      <ConverterPanel />
    </main>
  )
}

export default Home
