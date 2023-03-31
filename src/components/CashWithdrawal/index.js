import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  onAddCash = value => {
    this.setState(prevState => ({
      amount: prevState.amount - value,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {amount} = this.state
    return (
      <div className="container">
        <div className="card-container">
          <div className="profile-container">
            <p className="name">S</p>
            <h1 className="name1">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <p className="balance">Your Balance</p>
            <div className="money-container">
              <p className="amount">{amount}</p>
              <p className="rupees">In Rupees</p>
            </div>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="sum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="list-container">
            {denominationsList.map(eachItem => (
              <DenominationItem
                eachItem={eachItem}
                key={eachItem.id}
                onAddCash={this.onAddCash}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
