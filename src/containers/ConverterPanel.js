import { connect } from 'react-redux'
import ConverterPanel from '../components/ConverterPanel'
import { 
  setInputCurrency, 
  setInputAmount,
  setOutputCurrency,
  convertCurrency,
  reverse
} from '../actions/converter'

const mapStateToProps = state => {
  const { 
    converter: {
      loading,
      fromCurrency,
      toCurrency,
      inputAmount,
      outputAmount
    }
  } = state
  return { 
    loading,
    fromCurrency,
    toCurrency,
    inputAmount,
    outputAmount
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setInputCurrency: value => dispatch(setInputCurrency(value)),
    setInputAmount: value => dispatch(setInputAmount(value)),
    setOutputCurrency: value => dispatch(setOutputCurrency(value)),
    convertCurrency: (inputAmount, fromCurrency, toCurrency) => dispatch(convertCurrency(inputAmount, fromCurrency, toCurrency)),
    reverse: () => dispatch(reverse())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConverterPanel)
