import { Box, Image, Text, VStack, Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { country } from '../types/country'

interface CountryCardProps {
  country: country;
}

export const CountryCard = ({ country }: CountryCardProps) => {
  return (
    <Link
      as={RouterLink}
      href={`/country/${country.name.common}`}
      style={{ textDecoration: 'none' }}
    >
      <Box
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        _hover={{ shadow: 'md' }}
      >
      <Image
        src={country.flags.svg}
        alt={`Flag of ${country.name.common}`}
        height="160px"
        width="100%"
        objectFit="cover"
      />
      <VStack p={4} align="start">
        <Text>Population: {country.population.toLocaleString()}</Text>
      </VStack>
    </Box>
    </Link>
  )
}