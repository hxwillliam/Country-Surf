import { useParams, useNavigate } from 'react-router-dom';
import { Box, Image, Text, VStack, Heading, Spinner, Center, Grid, GridItem, Button } from '@chakra-ui/react';
import { IoArrowBack } from 'react-icons/io5';
import { useCountryDetails } from '../hooks/useCountryDetails';

export const CountryDetails = () => {
  const { name } = useParams<{ name: string }>();
  const navigate = useNavigate();
  const { country, loading, error } = useCountryDetails(name);

  if (loading) return <Center h="60vh"><Spinner size="xl" /></Center>;
  if (error || !country) return <Center h="60vh"><Text color="red.500">{error || 'Country not found'}</Text></Center>;

  return (
    <Box p={4}>
      <Button onClick={() => navigate(-1)} mb={4}>
        <IoArrowBack /> Back
      </Button>
      <VStack align="start" gap={6}>
        <Heading>{country.name.common}</Heading>
        <Image
          src={country.flags.svg}
          alt={`Flag of ${country.name.common}`}
          maxW="400px"
          w="100%"
          borderRadius="md"
          shadow="md"
        />
        <Grid templateColumns={['1fr', '1fr 1fr']} gap={6} w="100%">
          <GridItem>
            <VStack align="start" gap={4}>
              <Text fontSize="lg"><strong>Region:</strong> {country.region}</Text>
              <Text fontSize="lg"><strong>Population:</strong> {country.population.toLocaleString()}</Text>
              <Text fontSize="lg"><strong>Capital:</strong> {country.capital?.[0] || 'N/A'}</Text>
              <Text fontSize="lg"><strong>Languages:</strong> {country.languages ? Object.values(country.languages).join(', ') : 'N/A'}</Text>
              <Text fontSize="lg"><strong>Currencies:</strong> {country.currencies ? 
                Object.values(country.currencies).map(currency => `${currency.name} (${currency.symbol})`).join(', ') : 'N/A'}</Text>
            </VStack>
          </GridItem>
          <GridItem>
            <VStack align="start" gap={4}>
              <Text fontSize="lg"><strong>Borders:</strong> {country.borders?.join(', ') || 'N/A'}</Text>
              <Text fontSize="lg"><strong>Timezones:</strong> {country.timezones?.join(', ') || 'N/A'}</Text>
              <Text fontSize="lg"><strong>International Dialing Code:</strong> {
                country.idd?.root ? `${country.idd.root}${country.idd.suffixes?.join(', ')}` : 'N/A'
              }</Text>
            </VStack>
          </GridItem>
        </Grid>
      </VStack>
    </Box>
  );
};