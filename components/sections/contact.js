import { Center, Icon, Stack, Box, Link, Flex, Text } from "@chakra-ui/react"
import NextLink from "next/link"
import React from "react"

import Banner from "../banner"

import { GrMail } from "@react-icons/all-files/gr/GrMail"
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub"
import { AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin"

const Contact = () => {
  return (
    <Box>
      <Center>
        <Stack
          direction="column"
          boxShadow="dark-lg"
          p={20}
          rounded="2xl"
          bg="gray.700"
          color="white"
          spacing={20}
          m="3rem"
          mt="8rem"
          mb="8rem"
        >
          <Link
            as={NextLink}
            href="mailto:jacob@gladman.org"
            isExternal
            fontSize="24px"
          >
            <Flex alignItems="center">
              <Icon as={GrMail} mr="10px" fontSize="24px" mt="4px" />
              <Text fontSize="24px">jacob@gladman.org</Text>
            </Flex>
          </Link>
          <Link
            as={NextLink}
            href="https://github.com/JGladman"
            isExternal
            fontSize="24px"
          >
            <Flex alignItems="center">
              <Icon as={AiFillGithub} mr="10px" fontSize="24px" mt="5px" />
              <Text fontSize="24px">github.com/JGladman</Text>
            </Flex>
          </Link>
          <Link
            as={NextLink}
            href="https://www.linkedin.com/in/jacob-gladman/"
            isExternal
          >
            <Flex alignItems="center">
              <Icon as={AiFillLinkedin} mr="10px" fontSize="24px" mt="3px" />
              <Text fontSize="24px">linkedin.com/in/jacob-gladman/</Text>
            </Flex>
          </Link>
          {/* <Link
            href="https://www.instagram.com/jacobgladman32/"
            isExternal
            fontSize="24px"
          >
            <Icon as={AiOutlineInstagram} mr="10px" />
            https://www.instagram.com/jacobgladman32/
          </Link> */}
        </Stack>
      </Center>
      <Banner />
    </Box>
  )
}

export default Contact
