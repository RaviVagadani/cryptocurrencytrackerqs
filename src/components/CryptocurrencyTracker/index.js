// Write your code here
import {Component} from 'react'
import CryptocurrenciesList from '../CryptocurrenciesList'
import './index.css'

class CryptocurrencyTracker extends Component {
  render() {
    return (
      <div className="bg">
        <CryptocurrenciesList />
      </div>
    )
  }
}

export default CryptocurrencyTracker
