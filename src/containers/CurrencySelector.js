import { connect } from 'react-redux'
import CurrencySelector from '../components/CurrencySelector'

const mapStateToProps = state => {
  const { 
    references: {
      currencies,
      countries 
    } 
  } = state
  return { 
    currencies,
    countries
  }
}

export default connect(mapStateToProps, null)(CurrencySelector)
