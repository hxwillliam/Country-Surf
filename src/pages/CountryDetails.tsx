import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Image, Text, VStack, Heading, Spinner, Center, Grid, GridItem } from '@chakra-ui/react';
import { getCountryByName } from '../services/api';
import { country } from '../types/country';

export const CountryDetails = () => {
  const { name } = useParams<{ name: string }>();
  const [country, setCountry] = useState<country | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountry = async () => {
      if (!name) {
        setError('Country name is required');
        setLoading(false);
        return;
      }

      try {
        const [data] = await getCountryByName(name);
        setCountry(data);
      } catch (err) {
        setError('Failed to fetch country details');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCountry();
  }, [name]);

  if (loading) return <Center h="60vh"><Spinner size="xl" /></Center>;
  if (error || !country) return <Center h="60vh"><Text color="red.500">{error || 'Country not found'}</Text></Center>;

  return (
    <Box>
      <VStack align="start">
        <Heading>{country.name.common}</Heading>
        <Image
          src={country.flags.svg}
          alt={`Flag of ${country.name.common}`}
          maxW="400px"
          w="100%"
        />
        <Grid templateColumns={['1fr', '1fr 1fr']} gap={6} w="100%">
          <GridItem>
            <VStack align="start" >
              <Text><strong>Region:</strong> {country.region}</Text>
              <Text><strong>Population:</strong> {country.population.toLocaleString()}</Text>
              <Text><strong>Capital:</strong> {country.capital?.[0] || 'N/A'}</Text>
              <Text><strong>Languages:</strong> {country.languages ? Object.values(country.languages).join(', ') : 'N/A'}</Text>
              <Text><strong>Currencies:</strong> {country.currencies ? 
                Object.values(country.currencies).map(currency => `${currency.name} (${currency.symbol})`).join(', ') : 'N/A'}</Text>
            </VStack>
          </GridItem>
          <GridItem>
            <VStack align="start" >
              <Text><strong>Borders:</strong> {country.borders?.join(', ') || 'N/A'}</Text>
              <Text><strong>Timezones:</strong> {country.timezones?.join(', ') || 'N/A'}</Text>
              <Text><strong>International Dialing Code:</strong> {
                country.idd?.root ? `${country.idd.root}${country.idd.suffixes?.join(', ')}` : 'N/A'
              }</Text>
            </VStack>
          </GridItem>
        </Grid>
      </VStack>
    </Box>
  );
};