import { NextSeo } from 'next-seo'

import { useColorMode } from '@chakra-ui/color-mode'

import { DefaultLayout } from 'layouts/default'

import { Button } from 'components/button'

import { Box, Flex, Text } from 'components/layout'

const HomePage = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <NextSeo title="Home" />

      <DefaultLayout>
        <Flex direction="column" h="100vh" justify="center" align="center">

          <Box>
            <Text color="white" fontSize="6xl" as="h1">
              Ariel Conti
            </Text>
            <Text color="white">
              Front-end engineer who loves UX, Performance and Design.
            </Text>
            <Text color="white">
              Brazilian based in Lisboa, Portugal.
            </Text>
          </Box>

        </Flex>
      </DefaultLayout>
    </>
  )
}

export default HomePage
