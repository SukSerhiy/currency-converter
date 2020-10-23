import { connect } from 'react-redux'
import Home from '../components/Home'
import { fetchCurrencies, fetchCountries } from '../actions/references'

const mapStateToProps = state => {
  const { 
    global: {
      loading
    },
    references: {
      currencies,
      countries 
    } 
  } = state
  return { 
    loading,
    currencies,
    countries
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCurrencies: () => dispatch(fetchCurrencies()),
    fetchCountries: () => dispatch(fetchCountries())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
