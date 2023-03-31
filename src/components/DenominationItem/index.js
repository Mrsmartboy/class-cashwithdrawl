import './index.css'

const DenominationItem = props => {
  const {eachItem, onAddCash} = props
  const {value} = eachItem

  const onAddMoney = () => {
    onAddCash(value)
  }

  return (
    <li className="item-container" onClick={onAddMoney}>
      <button type="button" className="button">
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
