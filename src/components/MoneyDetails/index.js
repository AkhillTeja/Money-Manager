// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props

  return (
    <div className="mid-transaction-container">
      <div className="representing-transaction-card">
        <div className="each-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            className="transaction-image"
            alt="balance"
          />
          <div className="your">
            <p className="your-para">Your Balance</p>
            <p className="details-money" data-testid="balanceAmount">
              Rs {balanceAmount}
            </p>
          </div>
        </div>

        <div className="each-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            className="transaction-image"
            alt="income"
          />
          <div className="your">
            <p className="your-para">Your Income</p>
            <p className="details-money" data-testid="incomeAmount">
              Rs {incomeAmount}
            </p>
          </div>
        </div>

        <div className="each-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            className="transaction-image"
            alt="expenses"
          />
          <div className="your">
            <p className="your-para">Your Expenses</p>
            <p className="details-money" data-testid="expensesAmount">
              Rs {expensesAmount}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
