import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CurrencySelector from '../containers/CurrencySelector'

const useStyles = makeStyles({
  root: {}
})

const ConverterSection = props => {
  const classes = useStyles()
  const { label, value, onCurrencyChange } = props

  return (
    <div className={classes.root}>
      <CurrencySelector
        label={label}
        value={value}
        onChange={onCurrencyChange} />
      {props.children}
    </div>
  )
}

export default ConverterSection
