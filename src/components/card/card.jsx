import './card.scss'

export const Card = ({ link, name, description }) => {
  return (
    <div className="card">
      <a target="_blank" className="card__title" href={link}>
        {name}
      </a>
      <div className="card__description">{description}</div>
    </div>
  )
}
