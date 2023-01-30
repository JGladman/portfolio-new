import { Box, Circle, Text, Stack, Center, Show } from "@chakra-ui/react"
import React from "react"

const Home = () => {
  return (
    <Center>
      <Show breakpoint="(min-width: 560px)">
        <Circle
          align="center"
          size={560}
          bgGradient="linear(to-tr, gray.400, gray.700)"
          boxShadow="dark-lg"
          padding={20}
          mt="2.5rem"
          mb="2.7rem"
          color="white"
        >
          <Stack>
            <Box>
              <Text fontSize="6xl" as="b" color="secondary">
                Hello!
              </Text>
            </Box>
            <Text fontSize="3xl">
              My name is Jacob Gladman, and I am a{" "}
              <Text as="b" color="secondary">
                Full-Stack Developer
              </Text>{" "}
              working out of Toronto ON, Canada
            </Text>
          </Stack>
        </Circle>
      </Show>
      <Show breakpoint="(max-width: 560px)">
        <Circle
          align="center"
          size={315}
          bgGradient="linear(to-tr, gray.400, gray.700)"
          boxShadow="dark-lg"
          padding={10}
          mt="2.5rem"
          mb="2.7rem"
          color="white"
        >
          <Stack>
            <Box>
              <Text fontSize="3xl" as="b" color="secondary">
                Hello
              </Text>
            </Box>
            <Text fontSize="xl">
              My name is Jacob Gladman, and I am a{" "}
              <Text as="b" color="secondary">
                Full-Stack Developer
              </Text>{" "}
              working out of Toronto ON, Canada
            </Text>
          </Stack>
        </Circle>
      </Show>
    </Center>
  )
}

export default Home
