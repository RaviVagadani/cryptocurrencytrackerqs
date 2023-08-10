// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {cryptoList: [], isTrue: true}

  componentDidMount() {
    this.getCryptoData()
  }

  getCryptoData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(each => ({
      currencyLogo: each.currency_logo,
      currencyName: each.currency_name,
      euroValue: each.euro_value,
      usdValue: each.usd_value,
    }))
    this.setState({cryptoList: updatedData, isTrue: false})
  }

  onDisplayUserInterface = () => {
    const {cryptoList} = this.state
    return (
      <div>
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <div className="to-center">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
            alt="cryptocurrency"
            className="crypto-image"
          />
        </div>
        <div className="to-margin-left">
          <nav className="to-row-between">
            <div className="to-row">
              <p className="same-font-style">Coin Type</p>
            </div>
            <div className="to-row">
              <p className="same-font-style">USD</p>
              <p className="same-font-styles">EURO</p>
            </div>
          </nav>
          <ul className="list">
            {cryptoList.map(each => (
              <CryptocurrencyItem listDetails={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  render() {
    const {isTrue} = this.state
    return (
      <div>
        {isTrue ? (
          <div data-testid="loader" className="to-align-center">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          this.onDisplayUserInterface()
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
