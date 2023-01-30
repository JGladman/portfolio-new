import {
  Box,
  Stack,
  Heading,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  Flex,
  Spacer,
  Text,
  List,
  ListItem,
  Link,
} from "@chakra-ui/react"
import Image from "next/image"
import React from "react"

const Project = ({
  img,
  title,
  description,
  frontend,
  backend,
  frontendGithub,
  backendGithub,
  linkText,
  link,
}) => {
  const frontendItems = frontend.map((item) => <ListItem>{item}</ListItem>)

  let backendItems
  if (backend) {
    backendItems = backend.map((item) => <ListItem>{item}</ListItem>)
  }
  return (
    <Box boxShadow="dark-lg" bg="gray.700" w={{ base: "300px", md: "480px" }}>
      <Stack direction="column" spacing={0}>
        <Image src={img} w={{ base: "300px", md: "480px" }} h="235px" />
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton w={{ base: "300px", md: "480px" }} bg="gray.700">
                <Flex align="center" w="100%">
                  <Heading>{title}</Heading>
                  <Spacer />
                  <AccordionIcon w="40px" h="40px" />
                </Flex>
              </AccordionButton>
            </h2>
            <AccordionPanel>
              <Stack
                direction="column"
                w={{ base: "300px", md: "480px" }}
                spacing={8}
              >
                <Stack
                  direction="column"
                  w={{ base: "280px", md: "460px" }}
                  spacing={0}
                >
                  <Text as="u">Description</Text>
                  <Text w={{ base: "280", md: "460px" }}>{description}</Text>
                </Stack>
                {backend ? (
                  <Stack direction="row" w={{ base: "280px", md: "460px" }}>
                    <Stack direction="column" w="40%" spacing={1}>
                      <Text as="u">Frontend</Text>
                      <List>{frontendItems}</List>
                    </Stack>
                    <Stack direction="column" spacing={1}>
                      <Text as="u">Backend</Text>
                      <List>{backendItems}</List>
                    </Stack>
                  </Stack>
                ) : (
                  <Stack
                    direction="column"
                    w={{ base: "280px", md: "460px" }}
                    spacing={1}
                  >
                    <Text as="u">Frontend</Text>
                    <List>{frontendItems}</List>
                  </Stack>
                )}
                <Link href={frontendGithub} color="secondary" isExternal>
                  Frontend Github
                </Link>
                {backendGithub && (
                  <Link href={backendGithub} color="secondary" isExternal>
                    Backend Github
                  </Link>
                )}
                {link ? (
                  <Link href={link} color="secondary" isExternal>
                    Visit Website
                  </Link>
                ) : (
                  <Text>Pending deployment</Text>
                )}
              </Stack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Stack>
    </Box>
  )
}

export default Project
