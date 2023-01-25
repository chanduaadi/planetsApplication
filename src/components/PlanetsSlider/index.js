// Write your code here

import Slider from 'react-slick'

import PlanentItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div data-testid="planets" className="page-container">
      <h1 className="page-heading">PLANETS</h1>
      <Slider {...settings}>
        {planetsList.map(eachList => (
          <PlanentItem key={eachList.id} eachList={eachList} />
        ))}
      </Slider>
    </div>
  )
}
export default PlanetsSlider
