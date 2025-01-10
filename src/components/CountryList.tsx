import { useEffect, useState } from 'react'
import { SimpleGrid, Spinner, Center, Text } from '@chakra-ui/react'
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
    <SimpleGrid columns={[1, 2, 3, 4]} >
      {countries.map((country) => (
        <CountryCard key={country.name.common} country={country} />
      ))}
    </SimpleGrid>
  )
}