import style from './layout.module.scss'

interface ILayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <div className={style.layout}>
      <main>{children}</main>
    </div>
  )
}

export default Layout
