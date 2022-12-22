import style from './codeBlock.module.scss'

interface ICodeBlockProps {
  children: React.ReactNode
}

const CodeBlock = ({ children }: ICodeBlockProps) => {
  return <pre className={style.codeBlock}>{children}</pre>
}

export default CodeBlock
