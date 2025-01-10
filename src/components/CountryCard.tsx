import { Box, Image, Text, VStack, HStack, Badge } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { country } from '../types/country';

interface CountryCardProps {
  country: country;
}

export const CountryCard = ({ country }: CountryCardProps) => {
  return (
    <RouterLink
      to={`/country/${country.name.common}`}
      style={{ textDecoration: 'none' }}
    >
      <Box
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        _hover={{ 
          shadow: 'lg',
          transform: 'translateY(-2px)',
          transition: 'all 0.2s'
        }}
      >
        <Image
          src={country.flags.svg}
          alt={`Flag of ${country.name.common}`}
          height="160px"
          width="100%"
          objectFit="cover"
        />
        <VStack p={4} align="start" gap={4}>
          <HStack justify="space-between" width="100%">
            <Text fontSize="lg" fontWeight="bold">{country.name.common}</Text>
            <Badge colorScheme="teal">{country.region}</Badge>
          </HStack>
          <Text><strong>Population:</strong> {country.population.toLocaleString()}</Text>
        </VStack>
      </Box>
    </RouterLink>
  );
};