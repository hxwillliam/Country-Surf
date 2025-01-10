import { Box, Heading } from '@chakra-ui/react'
import { CountryList } from '../components/CountryList'

export const Home = () => {
  return (
    <Box>
      <Heading mb={8}>Countries</Heading>
      <CountryList />
    </Box>
  )
}