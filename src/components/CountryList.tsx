import { useEffect, useState } from 'react'
import {Box,Container,SimpleGrid,Spinner,Center,Text,Heading} from '@chakra-ui/react'
import { country } from '../types/country'
import { getAllCountries } from '../services/api'
import { CountryCard } from './CountryCard'

export const CountryList = () => {
  const [countries, setCountries] = useState<country[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data = await getAllCountries()
        setCountries(data)
      } catch (error) {
        setError('Failed to fetch countries')
        console.error('Error fetching countries:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchCountries()
  }, [])

  if (loading) {
    return (
      <Center h="60vh">
        <Spinner size="xl" />
      </Center>
    )
  }

  if (error) {
    return (
      <Center h="60vh">
        <Text color="red.500">{error}</Text>
      </Center>
    )
  }

  return (
    <Container maxW="container.xl" my={8}>
      <Heading as="h2" size="lg" mb={6} textAlign="center">
        Browse Countries
      </Heading>
      <SimpleGrid columns={[1, 2, 3, 4]} gap={6}>
        {countries.map((country) => (
          <Box key={country.name.common} className="fade-in">
            <CountryCard country={country} />
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  )
}