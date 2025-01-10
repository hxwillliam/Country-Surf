import { useEffect, useState } from 'react';
import { getCountryByName } from '../services/api';
import { country } from '../types/country';

export const useCountryDetails = (name: string | undefined) => {
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

  return { country, loading, error };
};