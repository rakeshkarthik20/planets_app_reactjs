// Write your code here
import './index.css'

const PlantItem = props => {
  const {data} = props
  const {name, imageUrl, description} = data
  return (
    <div className="planet-item-container">
      <img className="planet-image" src={imageUrl} alt={`planet ${name}`} />
      <h1 className="planet-name">{name}</h1>
      <p className="planet-description">{description}</p>
    </div>
  )
}

export default PlantItem
