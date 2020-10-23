import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { TextField, Button } from '@material-ui/core'
import ConverterSection from './ConverterSection'
import rowsSvg from '../assets/images/two-arrows-pointing-right-and-left.svg'

const useStyles = makeStyles({
  root: {
    padding: '90px 5%',
    flex: 1,
    backgroundColor: '#ffff'
  },
  panelContent: {
    padding: '20px 0px',
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '2px solid F0FFFF'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 20
  },
  convertButton: {
    width: '100%',
    background: '#8080801f',
    '&:disabled': {
      opacity: 0.5
    },
    padding: 10,
    '& > span': {
      fontFamily: "'Roboto Bold'",
      fontSize: 16,
      color: '#9a9a8e'
    }
  },
  reverseButton: {
    height: 30,
    alignSelf: 'center',
    '& img': {
      width: 30
    }
  }
})

const ConverterPanel = props => {
  const classes = useStyles()
  const { 
    loading,
    fromCurrency,
    toCurrency,
    inputAmount,
    outputAmount,
    setInputCurrency,
    setInputAmount,
    setOutputCurrency,
    convertCurrency,
    reverse
  } = props

  const onInputAmountChange = v => {
    if (/^\d{1,6}(\.\d*)?$/.test(v) || v === '') {
      setInputAmount(v)
    }
  }

  return (
    <div className={classes.root}>
      <div className={classes.panelContent}>
        <ConverterSection
          label='From'
          value={fromCurrency}
          currency={fromCurrency}
          onCurrencyChange={setInputCurrency}
        >
          <TextField 
            value={inputAmount || ''}
            onChange={e => onInputAmountChange(e.target.value)}
          />
        </ConverterSection>
        <Button 
          className={classes.reverseButton}
          onClick={reverse}
        >
          <img src={rowsSvg} alt={'reverse'} />
        </Button>
        <ConverterSection
          label='To'
          value={toCurrency}
          currency={toCurrency}
          onCurrencyChange={setOutputCurrency}
        >
          <span>
            {outputAmount}
          </span>
        </ConverterSection>
      </div>
      <div className={classes.buttonContainer}>
        <Button 
          disabled={loading || !inputAmount}
          onClick={() => convertCurrency(inputAmount, fromCurrency, toCurrency)}
          className={classes.convertButton}
        >
          Convert
        </Button>
      </div>
    </div>
  )
}

export default ConverterPanel
