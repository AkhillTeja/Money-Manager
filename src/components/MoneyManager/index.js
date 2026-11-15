import {Component} from 'react'
import {v4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
    historyList: [],
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state
    const typeOption = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === optionId,
    )

    const {displayText} = typeOption
    const newHistory = {
      id: v4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }

    this.setState(prevState => ({
      historyList: [...prevState.historyList, newHistory],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  onChangeTitleInput = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmountInput = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeTypeSelection = event => {
    this.setState({optionId: event.target.value})
  }

  getIncome = () => {
    const {historyList} = this.state
    let incomeAmount = 0
    historyList.forEach(eachTransaction => {
      if (eachTransaction.type === 'Income') {
        incomeAmount += eachTransaction.amount
      }
    })
    return incomeAmount
  }

  getExpenses = () => {
    const {historyList} = this.state
    let expensesAmount = 0
    historyList.forEach(eachTransaction => {
      if (eachTransaction.type === 'Expenses') {
        expensesAmount += eachTransaction.amount
      }
    })
    return expensesAmount
  }

  getBalance = () => {
    const {historyList} = this.state
    let balanceAmount = 0
    let expensesAmount = 0
    let incomeAmount = 0

    historyList.forEach(eachTransaction => {
      if (eachTransaction.type === 'Income') {
        incomeAmount += eachTransaction.amount
      }
      if (eachTransaction.type === 'Expenses') {
        expensesAmount += eachTransaction.amount
      }
    })
    balanceAmount = incomeAmount - expensesAmount
    return balanceAmount
  }

  deleteTransaction = id => {
    this.setState(prevState => ({
      historyList: prevState.historyList.filter(
        eachTransaction => eachTransaction.id !== id,
      ),
    }))
  }

  render() {
    const {titleInput, amountInput, optionId, historyList} = this.state
    const balanceAmount = this.getBalance()
    const expensesAmount = this.getExpenses()
    const incomeAmount = this.getIncome()

    return (
      <div className="bg-container">
        <div className="top-container">
          <div className="profile-card">
            <h1 className="name-heading">Hi, Richard</h1>
            <p className="welcome-para">
              Welcome back to your
              <span className="manager-para"> Money Manager</span>
            </p>
          </div>

          <MoneyDetails
            balanceAmount={balanceAmount}
            incomeAmount={incomeAmount}
            expensesAmount={expensesAmount}
          />

          <div className="add-transaction-and-">
            <form
              className="form-transaction-card"
              onSubmit={this.onAddTransaction}
            >
              <h1 className="add-transaction-heading">Add Transaction</h1>
              <label htmlFor="title" className="label">
                TITLE
              </label>
              <input
                onChange={this.onChangeTitleInput}
                id="title"
                value={titleInput}
                type="text"
                className="title-input"
                placeholder="TITLE"
              />
              <label htmlFor="amount" className="label">
                AMOUNT
              </label>
              <input
                id="amount"
                onChange={this.onChangeAmountInput}
                value={amountInput}
                type="text"
                className="amount-input"
                placeholder="AMOUNT"
              />
              <select
                id="select"
                className="type-selection"
                onChange={this.onChangeTypeSelection}
                value={optionId}
              >
                {transactionTypeOptions.map(eachType => (
                  <option
                    key={eachType.optionId}
                    value={eachType.optionId}
                    className="option"
                  >
                    {eachType.displayText}
                  </option>
                ))}
              </select>
              <button type="submit" className="addBtn">
                Add
              </button>
            </form>
            <div className="historyList-container">
              <h1 className="history-heading">History</h1>
              <div className="history-list-card">
                <ul className="history-list">
                  <li className="each-list">
                    <p className="para">Title</p>
                    <p className="para">Amount</p>
                    <p className="para">Type</p>
                  </li>
                  {historyList.map(eachTransaction => (
                    <TransactionItem
                      key={eachTransaction.id}
                      transactionDetails={eachTransaction}
                      deleteTransaction={this.deleteTransaction}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
