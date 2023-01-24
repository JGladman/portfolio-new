import {
  Flex,
  Box,
  Center,
  Heading,
  Text,
  Spacer,
  Button,
} from "@chakra-ui/react"
import Image from "next/image"
import React from "react"
import { Link } from "react-scroll"

import logo from "../public/logo-cropped.png"
// import { FaHome } from "@react-icons/all-files/fa/FaHome"
// import { FaBasketballBall } from "@react-icons/all-files/fa/FaBasketballBall"
// import { ImOffice } from "@react-icons/all-files/im/ImOffice"
// import { FaCode } from "@react-icons/all-files/fa/FaCode"
// import { FaLaptopCode } from "@react-icons/all-files/fa/FaLaptopCode"
// import { GrMail } from "@react-icons/all-files/gr/GrMail"

const Navbar = () => {
  return (
    <Flex
      pos="fixed"
      h="100vh"
      w="200px"
      direction="column"
      bg="gray.700"
      boxShadow="dark-lg"
      p="1.5rem"
      pt="2rem"
    >
      <Flex direction="column">
        <Image src={logo} width="173px" height="58px" />
        <Heading mt="2rem" size="lg" color="white">
          Jacob Gladman
        </Heading>
        <Text fontSize="16px" color="secondary" mb={3}>
          Full-Stack Developer
        </Text>
      </Flex>
      <Spacer />
      <Flex direction="column" alignItems="start">
        <Button
          className="nav-item"
          variant="link"
          mr="10px"
          size="lg"
          color="gray.200"
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={300}
            isDynamic={true}
          >
            <Flex direction="row" alignItems="center">
              {/* <Icon as={FaHome} mr={2} /> */}
              <Text>Home</Text>
            </Flex>
          </Link>
        </Button>
        <Button
          className="nav-item"
          variant="link"
          mr="10px"
          size="lg"
          color="gray.200"
        >
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={300}
            isDynamic={true}
          >
            <Flex direction="row" alignItems="center">
              {/* <Icon as={FaBasketballBall} mr={2} /> */}
              <Text>About Me</Text>
            </Flex>
          </Link>
        </Button>
        <Button
          className="nav-item"
          variant="link"
          mr="10px"
          size="lg"
          color="gray.200"
        >
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={300}
            isDynamic={true}
          >
            <Flex direction="row" alignItems="center">
              {/* <Icon as={FaLaptopCode} mr={2} /> */}
              <Text>Projects</Text>
            </Flex>
          </Link>
        </Button>
        <Button
          className="nav-item"
          variant="link"
          mr="10px"
          size="lg"
          color="gray.200"
        >
          <Link
            to="experience"
            spy={true}
            smooth={true}
            duration={300}
            isDynamic={true}
          >
            <Flex direction="row" alignItems="center">
              {/* <Icon as={ImOffice} mr={2} /> */}
              <Text>Experience</Text>
            </Flex>
          </Link>
        </Button>
        <Button
          className="nav-item"
          variant="link"
          mr="10px"
          size="lg"
          color="gray.200"
        >
          <Link
            to="skills"
            spy={true}
            smooth={true}
            duration={300}
            isDynamic={true}
          >
            <Flex direction="row" alignItems="center">
              {/* <Icon as={FaCode} mr={2} /> */}
              <Text>Technologies</Text>
            </Flex>
          </Link>
        </Button>
        <Button
          className="nav-item"
          variant="link"
          mr={10}
          size="lg"
          color="gray.200"
        >
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={300}
            isDynamic={true}
            onClick={() => console.log("click")}
          >
            <Flex direction="row" alignItems="center">
              {/* <Icon as={GrMail} mr={2} /> */}
              <Text>Contact</Text>
            </Flex>
          </Link>
        </Button>
      </Flex>
      <Spacer />
      <Spacer />
      <Spacer />
    </Flex>
  )
}

export default Navbar
