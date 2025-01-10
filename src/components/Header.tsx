import { Box, Container, Heading, Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

export const Header = () => {
  return (
    <Box as="nav" bg="teal.500" py={4} color="white">
      <Container maxW="container.xl">
        <Link as={RouterLink} href="/" _hover={{ textDecoration: 'none' }}>
          <Heading size="lg">Country Surf with William</Heading>
        </Link>
      </Container>
    </Box>
  )
}