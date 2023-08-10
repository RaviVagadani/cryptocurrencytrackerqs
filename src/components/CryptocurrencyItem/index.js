// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {listDetails} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = listDetails

  return (
    <li className="to-row-space-between">
      <div className="to-row">
        <img src={currencyLogo} alt={currencyName} className="currency-image" />
        <p className="same-font">{currencyName}</p>
      </div>
      <div className="to-row">
        <p className="same-fonts">{euroValue}</p>
        <p className="same-fonts">{usdValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
