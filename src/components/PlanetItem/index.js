// Write your code here

import './index.css'

const PlanentItem = props => {
  const {eachList} = props
  const {name, imageUrl, description} = eachList
  return (
    <div className="planent-items-container">
      <img className="item-image" src={imageUrl} alt={`planet ${name}`} />
      <h1 className="item-heading">{name}</h1>
      <p className="item-discription">{description}</p>
    </div>
  )
}
export default PlanentItem
