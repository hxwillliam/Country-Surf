import { Container } from '@chakra-ui/react'
import { Header } from './Header'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Container maxW="container.xl" py={8}>
        {children}
      </Container>
    </>
  )
}