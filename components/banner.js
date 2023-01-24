import { Square, Flex, Spacer, Text } from "@chakra-ui/react"
import React from "react"

const Banner = ({ title }) => {
  return (
    <Flex
      w="100%"
      h="70px"
      pl="4rem"
      bg="primary"
      align="center"
      color="white"
      boxShadow="dark-lg"
    >
      <Text fontSize="2xl" textColor="white">
        {title}
      </Text>
      <Spacer />
      <Square size="70px" bg="secondary" />
    </Flex>
  )
}

export default Banner
