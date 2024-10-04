// Write your code here
import Slider from 'react-slick'
import PlantItem from '../PlanetItem/index'
import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="plant-slider-main-container" data-testid="planets">
      <h1 className="planet-item-heading">PLANETS</h1>
      <Slider {...settings}>
        {planetsList.map(each => (
          <div key={each.id}>
            <PlantItem data={each} />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
