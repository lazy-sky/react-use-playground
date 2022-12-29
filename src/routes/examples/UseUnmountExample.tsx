/* eslint-disable no-alert */
import { useState } from 'react'
import { useUnmount } from 'react-use'
import { Link } from 'react-router-dom'
import { Accordion, AccordionDetails, AccordionSummary, Button, Typography } from '@mui/material'
import { ExpandMore } from '@mui/icons-material'

import Layout from 'components/Layout'

import style from './common.module.scss'

const exampleCode = `
import { useState } from 'react'
import { useUnmount } from 'react-use'

const UseMountExample = () => {
  const [message, setMessage] = useState('바뀌는 걸 보기 위해 2초의 딜레이가 있습니다.')

  useUnmount(() => {
    setTimeout(() => {
      setMessage('마운트될 때 실행됩니다!')
    }, 2000)
  })

  return (
    <div>
      <p>{message}</p>
    </div>
  )`

const Counter = () => {
  const [count, setCount] = useState(0)

  useUnmount(() => {
    alert(`언마운트 시점의 카운터 숫자는 ${count}입니다.`)
  })

  const handleIncreaseClick = () => {
    setCount((prev) => prev + 1)
  }

  const handleDecreaseClick = () => {
    setCount((prev) => prev - 1)
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px', margin: '16px' }}>
      <h4 style={{ fontSize: 24 }}>카운터: {count}</h4>
      <Button onClick={handleIncreaseClick} variant='outlined' color='success'>
        +
      </Button>
      <Button onClick={handleDecreaseClick} variant='outlined' color='error'>
        -
      </Button>
    </div>
  )
}

const UseUnmountExample = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <Layout>
      <h2>useUnmount</h2>
      <div>
        <div>설명</div>
        <pre className={style.codeQuote}>useUnmount(fn: () =&gt; void)</pre>
      </div>

      <div>
        <p>카운터 컴포넌트가 {toggle ? '마운트 되었습니다.' : '언마운트 되었습니다.'}</p>
        {toggle && <Counter />}
        <br />
        {/* <Typography variant='h1' gutterBottom>
          h1. Heading
        </Typography> */}
        <button type='button' onClick={() => setToggle((c) => !c)}>
          {!toggle ? 'Mount' : 'Unmount'}
        </button>
      </div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />} aria-controls='panel1a-content' id='panel1a-header'>
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <pre className={style.codeBlock}>{exampleCode}</pre>
        </AccordionDetails>
      </Accordion>
      <div>
        {/* TODO: 연관 Hooks 추가 */}
        <div>연관 Hooks</div>
        <ul>
          <li>
            <Link to='/use-mount'> useMount</Link>
          </li>
          <li>useLifecycles 링크</li>
        </ul>
      </div>
    </Layout>
  )
}

export default UseUnmountExample
