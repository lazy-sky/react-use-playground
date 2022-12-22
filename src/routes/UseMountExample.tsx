import { useState } from 'react'
import { useMount } from 'react-use'

import CodeBlock from 'components/CodeBlock'

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
    <div>
      <h2>useMount Example</h2>
      <p>{message}</p>
      <CodeBlock>{exampleCode}</CodeBlock>
      <div>
        {/* TODO: 연관 Hooks 추가 */}
        <div>연관 Hooks</div>
        <ul>
          <li>useUnmount 링크</li>
          <li>useLifecycles 링크</li>
        </ul>
      </div>
    </div>
  )
}

export default UseMountExample
