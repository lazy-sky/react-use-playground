import { Button, Card, CardActions, CardContent, CardHeader } from '@mui/material'
import { Link } from 'react-router-dom'

import style from './home.module.scss'

const Home = () => {
  const cardList = [
    { text: 'useMount', url: 'use-mount' },
    { text: 'useUnmount', url: 'use-unmount' },
  ]
  return (
    <div className={style.home}>
      <div className={style.cardList}>
        {cardList.map(({ text, url }) => (
          <Card key={text} variant='outlined'>
            <CardHeader title={text} />
            <CardContent>{text}에 대한 설명</CardContent>
            <CardActions>
              {url}
              <Button color='primary'>
                <Link to={url}>살펴보기</Link>
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Home
