import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useMount } from 'react-use'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material'
import { ExpandMore } from '@mui/icons-material'
import Layout from 'components/Layout'

import style from './common.module.scss'

const exampleCode = `
import { useState } from 'react'
import { useMount } from 'react-use'

const UseMountExample = () => {
  const [message, setMessage] = useState('바뀌는 걸 보기 위해 2초의 딜레이가 있습니다.')

  useMount(() => {
    setTimeout(() => {
      setMessage('마운트될 때 실행됩니다!')
    }, 2000)
  })

  return (
    <div>
      <p>{message}</p>
    </div>
  )`

const UseMountExample = () => {
  const [message, setMessage] = useState('바뀌는 걸 보기 위해 2초의 딜레이가 있습니다.')

  useMount(() => {
    setTimeout(() => {
      setMessage('마운트될 때 실행됩니다!')
    }, 2000)
  })

  return (
    <Layout>
      <h2>useMount</h2>
      <div>
        <div>설명</div>
        <pre className={style.codeQuote}>useMount(fn: () =&gt; void)</pre>
      </div>
      <p>{message}</p>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography>코드 예제</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <pre className={style.codeBlock}>{exampleCode}</pre>
        </AccordionDetails>
      </Accordion>
      <div>
        {/* TODO: 연관 Hooks 추가 */}
        <div>연관 Hooks</div>
        <List className={style.relatedList}>
          <ListItem>
            <ListItemButton disableGutters>
              <Link to='/use-unmount'>
                <ListItemText primary='useMount' />
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton disableGutters>
              <Link to='/use-lifecycles'>
                <ListItemText primary='useLifecycles' />
              </Link>
            </ListItemButton>
          </ListItem>
        </List>
        {/* TODO: 용례 */}
      </div>
    </Layout>
  )
}

export default UseMountExample
