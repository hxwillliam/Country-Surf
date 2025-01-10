import { Box, Container, Heading, Input, Button, HStack, chakra } from '@chakra-ui/react'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const ChakraRouterLink = chakra(RouterLink)

export const Header = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()

  const handleNavigate = () => {
    if (searchQuery.trim()) {
      navigate(`/country/${searchQuery.trim()}`)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleNavigate()
    }
  }

  return (
    <Box as="nav" bg="teal.500" py={4} color="white">
      <Container>
        <HStack justify="space-between">
          <ChakraRouterLink to="/" _hover={{ textDecoration: 'none' }}>
            <Heading size="lg">Country Surf with William</Heading>
          </ChakraRouterLink>
          <HStack>
            <Input
              placeholder="Type a country"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              maxW="200px"
              bg="white"
              color="gray.800"
            />
            <Button onClick={handleNavigate} colorScheme="teal" variant="solid">
              Go
            </Button>
          </HStack>
        </HStack>
      </Container>
    </Box>
  )
}