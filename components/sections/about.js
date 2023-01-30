import {
  Stack,
  Heading,
  Text,
  Center,
  Box,
  Link,
  Hide,
  Show,
} from "@chakra-ui/react"
import React from "react"
import Image from "next/image"

import headshot from "../../public/circle-headshot.png"

const About = () => {
  return (
    <Center>
      {/* Make column for responsive design */}
      <Stack
        className="card"
        direction="row"
        spacing={10}
        boxShadow="dark-lg"
        p={10}
        rounded="2xl"
        bg="gray.700"
        m="2.5rem"
      >
        <Hide breakpoint="(max-width: 1225px)">
          <Image src={headshot} height={325} width={325} />
        </Hide>
        <Stack color="white">
          <Show breakpoint="(max-width: 1225px)">
            <Center>
              <Image src={headshot} height={325} width={325} />
            </Center>
          </Show>
          <Heading color="white" size="2xl">
            About Me
          </Heading>
          <Box w="auto" fontSize="lg">
            <Text>
              My name is{" "}
              <Text color="white" as="b">
                Jacob Gladman{" "}
              </Text>
              and I am a{" "}
              <Text color="white" as="b">
                Full-Stack Developer{" "}
              </Text>{" "}
              working out of Toronto ON, Canada. I am passionate about
              developing beautiful and performant web applications. I am
              currently studying{" "}
              <Text color="white" as="b">
                Computer Science
              </Text>{" "}
              at Queen's University and am graduating in 2023. My passions
              extend outside of the professional world through my hobbies such
              as Basketball, Brazilian Jiu Jitsu, and Chess
              {/* <Text color="secondary" as="b">
                Basketball
              </Text>
              ,{" "}
              <Text color="primary" as="b">
                Brazilian Jiu Jitsu
              </Text>
              , and{" "}
              <Text color="secondary" as="b">
                Chess
              </Text> */}
              . I am always looking to learn and develop skills in new areas
              both in and out of the technology industry! You can find out more
              about my professional experiences by checking out my{" "}
              <Link
                href="https://drive.google.com/file/d/1PKSsbcYTRUlhz68hCCBJtrMpd6a1DHsj/view?usp=sharing"
                isExternal
                color="secondary"
              >
                resume
                {/* resume <Icon as={BiLinkExternal} /> */}
              </Link>
            </Text>
          </Box>
        </Stack>
      </Stack>
    </Center>
  )
}

export default About
