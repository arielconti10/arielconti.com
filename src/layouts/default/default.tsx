import { Footer } from 'components/footer'
import { Header } from 'components/header'

type DefaultLayoutProps = {
  children?: React.ReactNode
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <Header />

      <main>{children}</main>

      <Footer />
    </>
  )
}
