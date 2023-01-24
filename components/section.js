import React from "react"
import { Box, Flex } from "@chakra-ui/react"
import { Element } from "react-scroll"
import Banner from "./banner"

const Section = ({ element, title, children }) => {
  return (
    <Element name={element}>
      <Flex direction="column" w="100%">
        <Banner title={title} />
        {children}
      </Flex>
    </Element>
  )
}

export default Section
