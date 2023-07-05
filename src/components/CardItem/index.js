// Write your code h
import './index.css'

const CardItem = props => {
  const {cardsDetails} = props
  const {id, title, description, imgUrl, className} = cardsDetails
  return (
    <li className={`cardContainer ${className}`}>
      <div className="text">
        <h1 className="h-left">{title}</h1>
        <p className="p-left">{description}</p>
      </div>
      <img src={imgUrl} alt={title} className="img-pos" />
    </li>
  )
}

export default CardItem
