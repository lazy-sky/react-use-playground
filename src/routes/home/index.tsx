import Card from 'components/Card'

import style from './home.module.scss'

const Home = () => {
  const cardList = [{ text: 'useMount', url: 'use-mount' }]
  return (
    <div className={style.home}>
      <div className={style.cardList}>
        {cardList.map(({ text, url }) => (
          <Card key={text} text={text} url={url} />
        ))}
      </div>
    </div>
  )
}

export default Home
