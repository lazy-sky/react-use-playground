import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useMount } from 'react-use'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
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
  const [message, setMessage] = useState('바뀌는 걸 보기 위해 1초의 딜레이가 있습니다.')

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

const Message = () => {
  const [message, setMessage] = useState('1초 후에 메시지가 바뀝니다.')
  const [isMounted, setIsMounted] = useState(false)

  useMount(() => {
    setTimeout(() => {
      setMessage('메시지가 마운트되었습니다!')
      setIsMounted(true)
    }, 1000)
  })

  return (
    <Box textAlign='center' margin='normal' sx={{ m: 2, p: 4, border: `2px dotted ${isMounted ? 'red' : 'grey'}` }}>
      <p style={{ fontSize: 32 }}>{message}</p>
    </Box>
  )
}

const UseMountExample = () => {
  const [isMessageOpen, setIsMessageOpen] = useState(false)

  const handleMessageToggle = () => {
    setIsMessageOpen((prev) => !prev)
  }

  return (
    <Layout>
      <Typography variant='h2' align='center' gutterBottom>
        useMount
      </Typography>
      <Divider />
      <Box p={2} />
      <Box>
        <Typography variant='h4' paddingY={2}>
          설명 및 예시
        </Typography>
        {/* TODO: 예시 코드 및 설명 텍스트 데이터 분리해서 관리 */}
        <Typography paragraph mb={1}>
          이 훅은 컴포넌트가 DOM에 마운트될 때 작업을 수행할 수 있게 해줍니다. 클래스 컴포넌트에서
          <span className={style.codeQuote}>componentDidMount</span> 라이프사이클 메소드와 유사합니다.
        </Typography>
        <Typography paragraph mb={1}>
          <span className={style.codeQuote}>useMount</span>는 함수를 인수로 받습니다. 이 함수는 컴포넌트가 마운트될 때
          호출됩니다.
          <span className={style.codeQuote}>useMount(fn: () =&gt; void)</span>
        </Typography>
        <Typography paragraph mb={1}>
          이 함수는 컴포넌트가 마운트될 때 수행해야 할 작업, 예를 들어 API에서 데이터를 가져오거나 이벤트 리스너를
          설정하는 것과 같은 작업을 할 수 있습니다.
        </Typography>
        <Typography paragraph mb={1}>
          여기서 중요한 점은 <span className={style.codeQuote}>useMount</span>는 컴포넌트가 처음 마운트될 때만
          호출된다는 것입니다. 컴포넌트가 업데이트될 때마다 작업을 수행해야 한다면{' '}
          <span className={style.codeQuote}>useEffect</span> 훅을 사용해야 합니다.
        </Typography>
      </Box>

      <Box>
        <button type='button' onClick={handleMessageToggle}>
          {!isMessageOpen ? 'Mount' : 'Unmount'}
        </button>
        {isMessageOpen && <Message />}
      </Box>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography>코드 예제</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <pre className={style.codeBlock}>{exampleCode}</pre>
        </AccordionDetails>
      </Accordion>

      <Box>
        {/* TODO: 연관 Hooks 추가 */}
        <Typography variant='h4' paddingY={2}>
          연관 Hooks
        </Typography>
        <List className={style.relatedList}>
          <ListItem disableGutters>
            <ListItemButton disableGutters>
              <Link to='/use-unmount'>
                <ListItemText primary='useMount' />
              </Link>
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disableGutters>
            <ListItemButton disableGutters>
              <Link to='/use-lifecycles'>
                <ListItemText primary='useLifecycles' />
              </Link>
            </ListItemButton>
          </ListItem>
          <Divider />
        </List>
      </Box>
    </Layout>
  )
}

export default UseMountExample
