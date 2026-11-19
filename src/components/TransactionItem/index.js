// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props
  const {id, title, amount, type} = transactionDetails

  const onDeleteButton = () => {
    deleteTransaction(id)
  }

  return (
    <li className="history-list-card">
      <p className="history-para">{title}</p>
      <p className="history-para">{amount}</p>
      <p className="history-para">{type}</p>
      <div className="delete-container">
        <button
          data-testid="delete"
          type="button"
          onClick={onDeleteButton}
          className="delete-btn"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="delete-image"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
