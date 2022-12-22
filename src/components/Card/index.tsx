import { Link } from 'react-router-dom'
import style from './card.module.scss'

interface ICardProps {
  text: string
  url: string
}

const Card = ({ text, url }: ICardProps) => {
  return (
    <div className={style.card}>
      <Link to={url}>
        <div>{text}</div>
      </Link>
    </div>
  )
}

export default Card
