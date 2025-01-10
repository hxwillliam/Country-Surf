import { country } from '../types/country'

export const getAllCountries = async (): Promise<country[]> => {
  const response = await fetch('https://restcountries.com/v3.1/all')
  if (!response.ok) throw new Error('Failed to fetch countries')
  return response.json()
}