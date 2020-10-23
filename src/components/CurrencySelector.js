import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Menu, MenuItem, ButtonBase, FormControl, FormLabel } from '@material-ui/core'

const useStyles = makeStyles({
  root: {},
  formLabel: {
    fontSize: 12
  },
  buttonBase: {
    margin: '7px 0px',
    fontSize: 16,
    padding: '10px 0px'
  }
})

const CurrencySelector = props => {
  const classes = useStyles()
  const { label, value, currencies, onChange } = props
  const [ anchorEl, setAnchorEl ] = React.useState(null)

  const handleClick = e => {
    setAnchorEl(e.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const onMenuSelect = id => {
    onChange(id)
    handleClose()
  }

  console.log('currencies', currencies)

  return (
    <div className={classes.root}>
      <FormControl>
        <FormLabel className={classes.formLabel}>
          {label}
        </FormLabel>
        <ButtonBase 
          className={classes.buttonBase}
          onClick={handleClick}
        >
          {currencies[value] && currencies[value].currencyName}
        </ButtonBase>
      </FormControl>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {Object.values(currencies).map(c => (
          <MenuItem 
            key={c.id} 
            onClick={() => onMenuSelect(c.id)}
          >
            {c.currencyName}
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}

export default CurrencySelector
