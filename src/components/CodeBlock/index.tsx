import { useToggle } from 'react-use'

import style from './codeBlock.module.scss'

interface ICodeBlockProps {
  children: React.ReactNode
}

const CodeBlock = ({ children }: ICodeBlockProps) => {
  const [isOn, toggle] = useToggle(false)

  return (
    <>
      <button type='button' onClick={toggle}>
        {isOn ? '코드 닫기' : '코드 보기'}
      </button>
      {isOn && <pre className={style.codeBlock}>{children}</pre>}
    </>
  )
}

export default CodeBlock
